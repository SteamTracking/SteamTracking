<?php
declare(strict_types=1);

ini_set( 'memory_limit', '1G' ); // Some files may be big

	new SteamTracker( isset( $argv ) && count( $argv ) === 2 ? $argv[ 1 ] : '' );

	class SteamTracker
	{
		private const ViteUrlsPath = __DIR__ . '/.support/urls_from_vite.txt';
		private const EnglishChunkPattern = '/_english\d*\.js$/';

		private string $APIKey = '';
		private int $AppStart;
		private int $CurrentTime;
		private bool $UseCache = true;
		private bool $ExtractClientArchives = false;
		private bool $DumpJavascriptFiles = false;
		private bool $UpdateViteUrls = false;
		private bool $UpdateSSRUrls = false;

		/** @var array<string, string> */
		private array $ClientArchiveFolder =
		[
			'ClientManifest/steam_client_publicbeta_steamrt64' => 'linux_archives',
			'ClientManifest/steam_cmd_publicbeta_linux'       => 'linux_archives',
		];

		/** @var array<string, string> */
		private array $ClientArchiveHashes = [];

		/** @var array<string, string|array<int, string>> */
		private array $ETags = [];

		/** @var array<int, string> */
		private array $Requests = [];

		/** @var array<int, array{URL: string, File: string}> */
		private array $URLsToFetch = [];

		/** @var array<string, true> */
		private array $CurrentSSRFiles = [];

		/** @var array<string, true> */
		private array $FilesToFormat = [];

		/** @var array<int, mixed> */
		private array $Options =
		[
			CURLOPT_USERAGENT      => 'SteamTracking (+https://github.com/SteamTracking/SteamTracking)',
			CURLOPT_ENCODING       => '',
			CURLOPT_HEADER         => 1,
			CURLOPT_AUTOREFERER    => 0,
			CURLOPT_RETURNTRANSFER => 1,
			CURLOPT_FOLLOWLOCATION => 0,
			CURLOPT_TIMEOUT        => 30,
			CURLOPT_CONNECTTIMEOUT => 10,
			CURLOPT_SSL_VERIFYPEER => 0,
			CURLOPT_SSL_VERIFYHOST => 0,
			CURLOPT_COOKIE         => 'workshop_preferences=%7B%22bOptedIn%22%3Atrue%7D',
		];

		private CurlShareHandle $CurlShareHandle;

		public function __construct( string $Option )
		{
			$this->AppStart = hrtime( true );

			if( $Option === 'force' )
			{
				$this->UseCache = false;
			}

			$ETagsPath = __DIR__ . '/.support/etags.json';
			$ApiKey = getenv( 'STEAM_API_KEY' );

			if( $ApiKey === false || $ApiKey === '' )
			{
				$this->Log( '{lightred}Missing STEAM_API_KEY environment variable' );

				exit( 1 );
			}

			if( $this->UseCache && file_exists( $ETagsPath ) )
			{
				$this->ETags = json_decode( file_get_contents( $ETagsPath ), true );
			}

			$this->APIKey = trim( $ApiKey );
			$this->CurrentTime = time( );

			$this->URLsToFetch = $this->ParseUrls( );
			$KnownUrls = [];

			foreach( $this->URLsToFetch as $Url )
			{
				$KnownUrls[ $Url[ 'URL' ] ] = true;
			}

			$this->CurlShareHandle = curl_share_init();
			curl_share_setopt( $this->CurlShareHandle, CURLSHOPT_SHARE, CURL_LOCK_DATA_PSL );
			curl_share_setopt( $this->CurlShareHandle, CURLSHOPT_SHARE, CURL_LOCK_DATA_DNS );

			$Tries = 5;
			$WindowSize = 10;

			do
			{
				$URLs = $this->URLsToFetch;
				$this->URLsToFetch = [];

				$this->Log( '{yellow}' . count( $URLs ) . ' urls to be fetched...' );
				$this->Fetch( $URLs, $WindowSize );
				$WindowSize = 1;
			}
			while( !empty( $this->URLsToFetch ) && $Tries-- > 0 );

			if( $this->UpdateViteUrls )
			{
				$Tries = 5;
				$PreviousViteUrls = [];

				if( file_exists( self::ViteUrlsPath ) )
				{
					$PreviousViteUrls = file( self::ViteUrlsPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES );
				}

				do
				{
					$this->URLsToFetch = array_merge( $this->URLsToFetch, $this->ProcessViteChunks( $KnownUrls ) );

					if( empty( $this->URLsToFetch ) )
					{
						break;
					}

					$URLs = $this->URLsToFetch;
					$this->URLsToFetch = [];

					$this->Log( '{yellow}' . count( $URLs ) . ' urls to be fetched...' );
					$this->Fetch( $URLs, 5 );
				}
				while( $Tries-- > 0 );

				$this->DeleteOldViteChunks( $PreviousViteUrls, $KnownUrls );
			}

			if( $this->UpdateSSRUrls && !empty( $this->CurrentSSRFiles ) )
			{
				$Tries = 5;

				do
				{
					$this->DeleteOldSSRFiles();

					$this->URLsToFetch = $this->ProcessSSRFiles();

					if( empty( $this->URLsToFetch ) )
					{
						break;
					}

					do
					{
						$URLs = $this->URLsToFetch;
						$this->URLsToFetch = [];

						$this->Log( '{yellow}' . count( $URLs ) . ' urls to be fetched...' );
						$this->Fetch( $URLs, 5 );
					}
					while( !empty( $this->URLsToFetch ) && $Tries-- > 0 );
				}
				while( $Tries >= 0 );

				$this->DeleteOldSSRFiles();
			}

			foreach( $this->ETags as &$ETags )
			{
				if( is_array( $ETags ) )
				{
					while( count( $ETags ) > 3 )
					{
						array_shift( $ETags );
					}
				}
			}

			unset( $ETags );

			file_put_contents( $ETagsPath, json_encode( $this->ETags, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT ) );

			if( $this->ExtractClientArchives )
			{
				$this->Log( '{lightblue}Extracting client archives' );
				$this->DumpJavascriptFiles = true;

				$this->RunCommand( escapeshellarg( PHP_BINARY ) . ' tools/extract_client.php' );
			}

			if( $this->DumpJavascriptFiles )
			{
				$this->Log( '{lightblue}Dumping web protobufs' );

				$this->RunCommand( 'node tools/dump_javascript_protobufs.ts' );
				$this->RunCommand( 'node tools/dump_javascript_urls.ts' );
				$this->RunCommand( 'node tools/dump_javascript_svg.ts' );
			}

			$this->Log( '{lightblue}Done' );
		}

		private function GenerateURL( string $URL ) : string
		{
			return str_replace(
				[
					'__KEY__',
					'__TIME__',
					'__CDN__',
					'https://steamcommunity.com/public/',
					'https://store.steampowered.com/public/',
				],
				[
					'key=' . $this->APIKey,
					'_=' . $this->CurrentTime,
					'_cdn=fastly',
					'https://community.fastly.steamstatic.com/public/',
					'https://store.fastly.steamstatic.com/public/',
				],
				$URL
			);
		}

		private function HandleResponse( string $File, string $Data, string $URL ) : bool
		{
			$IsSSR = str_starts_with( $File, 'store.steampowered.com/ssr/' ) || str_starts_with( $File, 'steamcommunity.com/ssr/' ) || str_starts_with( $File, 'partner.steamgames.com/ssr/' );

			if( $File === 'API/SupportedAPIList.json' )
			{
				$Data = json_decode( $Data, true );

				if( !isset( $Data[ 'apilist' ][ 'interfaces' ] ) )
				{
					return false;
				}

				foreach( $Data[ 'apilist' ][ 'interfaces' ] as $Interface )
				{
					$File = __DIR__ . '/API/' . $Interface[ 'name' ] . '.json';

					$Interface = json_encode( $Interface, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT ) . PHP_EOL;

					if( !file_exists( $File ) || $Interface !== file_get_contents( $File ) )
					{
						file_put_contents( $File, $Interface );
					}
				}

				return true;
			}
			// Get archives from client manifest
			else if( isset( $this->ClientArchiveFolder[ $File ] ) )
			{
				if( preg_match_all( '/"([a-z0-9_]+\.zip)\.([a-f0-9]{40})"/', $Data, $Test ) > 0 )
				{
					foreach( $Test[ 1 ] as $Index => $Archive )
					{
						$Hash = $Test[ 2 ][ $Index ];
						$Path = '.support/' . $this->ClientArchiveFolder[ $File ] . '/' . $Archive;

						if( isset( $this->ClientArchiveHashes[ $Path ] ) )
						{
							$this->Log( 'Matched {lightblue}' . $Path . '{normal}, but it is already queued' );
							continue;
						}

						if( !file_exists( $Path ) || hash_file( 'sha1', $Path ) !== $Hash )
						{
							$this->Log( 'Downloading {lightblue}' . $Path . '{normal} - checksum: ' . $Hash );

							$this->ClientArchiveHashes[ $Path ] = $Hash;

							$this->URLsToFetch[ ] =
							[
								'URL'  => 'https://client-update.fastly.steamstatic.com/' . $Archive . '.' . $Hash,
								'File' => $Path,
							];
						}
						else
						{
							$this->Log( 'Matched {lightblue}' . $Path . '{normal}, but we already have it cached' );
						}
					}
				}
				else
				{
					$this->Log( '{yellow}Failed to find any archives' );
				}

				unset( $Test, $Archive, $Hash, $Index );
			}
			// Prettify
			else if( $File === 'Random/Jobs.json' )
			{
				$Data = json_decode( $Data, true );
				$Data = json_encode( $Data, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT );
			}
			else if( $File === 'Random/SteamMobileApks.txt' )
			{
				$ApkLinks = [];

				if( preg_match_all( '/(https:\/\/[\w.\/-]+\.apk)/', $Data, $Test ) > 0 )
				{
					$ApkLinks = $Test[ 0 ];
				}

				if( empty( $ApkLinks ) )
				{
					$this->Log( '{lightred}Failed to find apk links' );

					return false;
				}

				foreach( $ApkLinks as &$ApkLink )
				{
					$ApkLink = preg_replace( '/^https:\/\/[^\/]+\//', 'https://media.steampowered.com/', $ApkLink );
				}

				unset( $ApkLink );

				$Data = implode( "\n", $ApkLinks ) . "\n";

				$FilePath = __DIR__ . '/' . $File;

				if( file_exists( $FilePath ) && $Data === file_get_contents( $FilePath ) )
				{
					return false;
				}

				foreach( $ApkLinks as $ApkLink )
				{
					if( str_contains( $ApkLink, '/apps/steam-android/' ) )
					{
						$this->URLsToFetch[ ] =
						[
							'URL'  => $ApkLink,
							'File' => '.support/archives/steam-android.apk',
						];
					}
				}
			}
			else if( $File === 'SSR' )
			{
				if( preg_match( '/"clientAssets":(\{.+?\}),"/', $Data, $Matches ) !== 1 )
				{
					$this->Log( '{lightred}Failed to find SSR on ' . $URL );

					return false;
				}

				$SSR = json_decode( $Matches[ 1 ], true );

				if( !isset( $SSR[ 'js' ] ) )
				{
					$this->Log( '{lightred}Failed to find any SSR JS on ' . $URL );

					return false;
				}

				$AssetTypes =
				[
					'js',
					'css',
					'preload',
				];

				foreach( $AssetTypes as $AssetType )
				{
					foreach( ( $SSR[ $AssetType ] ?? [] ) as $Asset )
					{
						$File = $this->GetSSRFilepath( $Asset[ 'href' ] );

						if( $File === null )
						{
							continue;
						}

						if( isset( $this->CurrentSSRFiles[ $File ] ) )
						{
							continue;
						}

						$this->CurrentSSRFiles[ $File ] = true;

						$this->URLsToFetch[ ] =
						[
							'URL'  => $Asset[ 'href' ],
							'File' => $File,
						];
					}
				}

				return true;
			}
			else if( $IsSSR )
			{
				// raw ssr files are not tracked, only clean versions are
			}
			else if( $File === '.support/archives/steam-android.apk' )
			{
				$this->Log( 'Dumping mobile app' );

				$Folder = dirname( $File );

				if( !is_dir( $Folder ) )
				{
					mkdir( $Folder, 0755, true );
				}

				file_put_contents( $File, $Data );

				$Zip = new ZipArchive();
				if( $Zip->open( '.support/archives/steam-android.apk' ) === true )
				{
					$ExtractedFile = $Zip->getFromName( 'assets/index.android.bundle' );

					if( $ExtractedFile !== false )
					{
						file_put_contents( '.support/archives/index.android.bundle', $ExtractedFile );
					}

					$Zip->close();
				}

				if( file_exists( '.support/archives/index.android.bundle' ) )
				{
					$this->RunCommand( './tools/hermes.py .support/archives/index.android.bundle Random/SteamApkStrings.txt' );
					unlink( '.support/archives/index.android.bundle' );
				}

				return true;
			}
			// Unzip it
			else if( str_ends_with( $File, '.zip' ) )
			{
				if( hash( 'sha1', $Data ) !== $this->ClientArchiveHashes[ $File ] )
				{
					$this->Log( '{lightred}Checksum mismatch for ' . $File );

					return false;
				}

				$File = __DIR__ . '/' . $File;

				$Folder = dirname( $File );

				if( !is_dir( $Folder ) )
				{
					mkdir( $Folder, 0755, true );
				}

				file_put_contents( $File, $Data );

				$this->ExtractClientArchives = true;

				return true;
			}
			// Make sure we received everything
			else if( str_ends_with( $File, '.html' ) )
			{
				if( strrpos( $Data, '</html>' ) === false )
				{
					return false;
				}

				$Data = preg_replace( '/[&\?]v=[a-zA-Z0-9\.\-\_]{3,}/', '?v=valveisgoodatcaching', $Data );
				$Data = str_replace( 'akamai.steamstatic', 'fastly.steamstatic', $Data );
				$Data = str_replace( '_cdn=akamai', '_cdn=fastly', $Data );
			}
			else if( str_ends_with( $File, '.css' ) || str_ends_with( $File, '.js' ) )
			{
				$Data = preg_replace( '/(\.(?:js|png|jpg|svg|css)[&\?]v=)[a-zA-Z0-9\.\-\_]{3,}/i', '$1valveisgoodatcaching', $Data );
			}

			$OriginalFile = $File;
			$File = __DIR__ . '/' . $File;

			$Folder = dirname( $File );

			if( !is_dir( $Folder ) )
			{
				$this->Log( '{lightblue}Creating ' . $Folder );

				mkdir( $Folder, 0755, true );
			}

			$IsViteFile = str_contains( $OriginalFile, '/applications/' );
			$IsLocalization = str_contains( $OriginalFile, '/localization/' );

			if(
				$IsSSR ||
				$IsViteFile ||
				str_starts_with( $OriginalFile, 'www.dota2.com/' ) ||
				str_starts_with( $OriginalFile, 'www.counter-strike.net/' ) ||
				str_starts_with( $OriginalFile, 'www.playdeadlock.com/' ) ||
				str_contains( $OriginalFile, '/webui/' ) ||
				str_contains( $OriginalFile, '/legacy_web/' ) ||
				str_contains( $OriginalFile, '/partnermenu/' )
			)
			{
				$HashPath = $OriginalFile . '.unmodified';
				$Hash = hash( 'sha256', $Data );

				if( ( $this->ETags[ $HashPath ] ?? '' ) === $Hash )
				{
					return false;
				}

				$this->ETags[ $HashPath ] = $Hash;

				// English string chunks are stored as json only
				if( $IsViteFile && !$IsLocalization && preg_match( self::EnglishChunkPattern, $File ) === 1 )
				{
					file_put_contents( $File, $Data );

					$JsonFile = substr( $File, 0, -3 ) . '.json';

					system( 'node tools/extract_strings.ts ' . escapeshellarg( $File ) . ' ' . escapeshellarg( $JsonFile ), $ReturnCode );

					if( $ReturnCode !== 0 )
					{
						$this->Log( '{lightred}Failed to extract strings from ' . $File );
					}
					else
					{
						unlink( $File );
					}

					return true;
				}

				// Content hashes change with every build and would mark every importing file as changed
				$Data = preg_replace( '/\.(js|css)\?contenthash=[\w-]{8}/', '.$1', $Data );

				file_put_contents( $File, $Data );

				if( $IsSSR )
				{
					$this->UpdateSSRUrls = true;
				}

				if( str_ends_with( $File, '.js' ) )
				{
					if( $IsViteFile )
					{
						$this->UpdateViteUrls = true;
					}

					if( !str_ends_with( $File, '/manifest.js' ) && !$IsLocalization )
					{
						$CleanFile = __DIR__ . '/c/' . $OriginalFile;
						$CleanFolder = dirname( $CleanFile );

						if( !is_dir( $CleanFolder ) )
						{
							$this->Log( '{lightblue}Creating ' . $CleanFolder );

							mkdir( $CleanFolder, 0755, true );
						}

						system( 'node tools/generate_clean_js.ts ' . escapeshellarg( $File ) . ' ' . escapeshellarg( $CleanFile ), $ReturnCode );

						if( $ReturnCode === 0 )
						{
							$this->FilesToFormat[ $CleanFile ] = true;
						}
					}

					$this->DumpJavascriptFiles = true;
				}
				else if( $IsSSR && str_ends_with( $File, '.css' ) )
				{
					$CleanFile = __DIR__ . '/c/' . $OriginalFile;
					$CleanFolder = dirname( $CleanFile );

					if( !is_dir( $CleanFolder ) )
					{
						$this->Log( '{lightblue}Creating ' . $CleanFolder );

						mkdir( $CleanFolder, 0755, true );
					}

					file_put_contents( $CleanFile, $Data );

					$this->FilesToFormat[ $CleanFile ] = true;
				}

				$this->FilesToFormat[ $File ] = true;

				return true;
			}

			if( file_exists( $File ) && $Data === file_get_contents( $File ) )
			{
				return false;
			}

			file_put_contents( $File, $Data );

			return true;
		}

		/** @param array<int, array{URL: string, File: string}> $URLs */
		private function Fetch( array $URLs, int $WindowSize ) : void
		{
			$this->Requests = [];

			$Master = curl_multi_init( );

			if( $WindowSize > count( $URLs ) )
			{
				$WindowSize = count( $URLs );
			}

			for( $i = 0; $i < $WindowSize; $i++ )
			{
				$URL = array_shift( $URLs );

				$this->CreateHandle( $Master, $URL );
			}

			unset( $URL, $WindowSize, $i );

			do
			{
				curl_multi_exec( $Master, $Running );

				while( $Done = curl_multi_info_read( $Master ) )
				{
					/** @var CurlHandle */
					$Handle = $Done[ 'handle' ];
					$URL   = curl_getinfo( $Handle, CURLINFO_EFFECTIVE_URL );
					$Code  = curl_getinfo( $Handle, CURLINFO_HTTP_CODE );

					$Request = $this->Requests[ (int)$Handle ];
					$IsSSR = $Request === 'SSR';

					if( $Code === 429 && $IsSSR )
					{
						$this->Log( '{yellow}Error ' . $Code . '{normal}    - ' . $URL . ' (but continuing)' );
						$Code = 200;
					}

					if( $Code === 304 )
					{
						$this->Log( '{green}HTTP Cache  {normal} - ' . $URL );
					}
					else if( $Code !== 200 )
					{
						$this->Log( '{yellow}Error ' . $Code . '{normal}    - ' . $URL );

						if( $Code < 100 || $Code >= 500 )
						{
							$this->URLsToFetch[ ] =
							[
								'URL'  => $URL,
								'File' => $Request
							];
						}
					}
					else
					{
						$LengthExpected = curl_getinfo( $Handle, CURLINFO_CONTENT_LENGTH_DOWNLOAD_T );
						$LengthDownload = curl_getinfo( $Handle, CURLINFO_SIZE_DOWNLOAD_T );

						if( $LengthExpected !== $LengthDownload && !$IsSSR && $Request !== 'Random/SteamMobileApks.txt' )
						{
							$this->Log( '{lightred}Wrong Length {normal}(' . $LengthDownload . ' != ' . $LengthExpected . '){normal} - ' . $URL );

							$this->URLsToFetch[ ] =
							[
								'URL'  => $URL,
								'File' => $Request
							];
						}
						else
						{
							$HandleResponse = true;
							$HeaderSize = curl_getinfo( $Handle, CURLINFO_HEADER_SIZE );
							$Data = curl_multi_getcontent( $Handle );
							$Header = substr( $Data, 0, $HeaderSize );

							if( preg_match( '/^ETag: (.+)$/im', $Header, $Test ) === 1 )
							{
								$ETag = trim( $Test[ 1 ] );

								$AlreadyHaveETag = isset( $this->ETags[ $Request ] ) && in_array( $ETag, $this->ETags[ $Request ], true );

								if( !$AlreadyHaveETag )
								{
									$this->ETags[ $Request ][] = $ETag;
								}

								if( $AlreadyHaveETag && file_exists( $Request ) )
								{
									$HandleResponse = false;
									$this->Log( '{green}ETag Matched{normal} - ' . $URL );
								}
							}

							if( $HandleResponse )
							{
								$Data = substr( $Data, $HeaderSize );

								if( $this->HandleResponse( $Request, $Data, $URL ) === true )
								{
									$this->Log( '{lightblue}Fetched     {normal} - ' . $URL );
								}
								else
								{
									$this->Log( '{green}Not Modified{normal} - ' . $URL );
								}
							}

							unset( $Data, $Header );
						}
					}

					curl_multi_remove_handle( $Master, $Handle );

					if( !empty( $URLs ) )
					{
						$URL = array_shift( $URLs );

						$this->CreateHandle( $Master, $URL );

						$Running = true;
					}

					unset( $Request, $Handle );
				}

				if( $Running )
				{
					curl_multi_select( $Master, 5 );
				}
			}
			while( $Running );

			curl_multi_close( $Master );

			$this->FormatFiles();
		}

		private function FormatFiles() : void
		{
			if( empty( $this->FilesToFormat ) )
			{
				return;
			}

			$this->Log( '{lightblue}Formatting ' . count( $this->FilesToFormat ) . ' files' );

			// Batched to stay under command line length limits
			foreach( array_chunk( array_keys( $this->FilesToFormat ), 50 ) as $Files )
			{
				$Arguments = implode( ' ', array_map( 'escapeshellarg', $Files ) );

				system( 'npm run prettier ' . $Arguments );
			}

			$this->FilesToFormat = [];
		}

		/** @param array{URL: string, File: string} $URL */
		private function CreateHandle( CurlMultiHandle $Master, array $URL ) : CurlHandle
		{
			$Handle = curl_init( );
			$File  = $URL[ 'File' ];

			$Options = $this->Options;
			$Options[ CURLOPT_SHARE ] = $this->CurlShareHandle;
			$Options[ CURLOPT_URL ] = $this->GenerateURL( $URL[ 'URL' ] );

			$this->Requests[ (int)$Handle ] = $File;

			if( $this->UseCache && isset( $this->ETags[ $File ] ) && file_exists( $File ) )
			{
				$Options[ CURLOPT_HTTPHEADER ] =
				[
					'If-None-Match: ' . implode( ', ', $this->ETags[ $File ] ),
				];
			}

			curl_setopt_array( $Handle, $Options );
			curl_multi_add_handle( $Master, $Handle );

			return $Handle;
		}

		/** @return array<int, array{URL: string, File: string}> */
		private function ParseUrls() : array
		{
			$UrlsPath = __DIR__ . '/urls.txt';

			if( !file_exists( $UrlsPath ) )
			{
				$this->Log( '{lightred}Missing ' . $UrlsPath );

				exit( 1 );
			}

			$Data = file_get_contents( $UrlsPath );
			$Data = explode( "\n", $Data );
			$Urls = [];

			// Add sale urls for current year
			$Year = idate( 'Y' );
			$Data[] = 'store.steampowered.com/public/css/promo/autumn_year_nominations.css @ https://store.steampowered.com/public/css/promo/autumn' . $Year . '_nominations.css?__TIME__&__CDN__';
			$Data[] = 'store.steampowered.com/public/css/promo/autumn_year_sale.css @ https://store.steampowered.com/public/css/promo/autumn' . $Year . '_sale.css?__TIME__&__CDN__';
			$Data[] = 'store.steampowered.com/public/css/promo/spring_year_sale.css @ https://store.steampowered.com/public/css/promo/spring' . $Year . '_sale.css?__TIME__&__CDN__';
			$Data[] = 'store.steampowered.com/public/css/promo/summer_year_sale.css @ https://store.steampowered.com/public/css/promo/summer' . $Year . '_sale.css?__TIME__&__CDN__';
			$Data[] = 'store.steampowered.com/public/css/promo/winter_year_sale.css @ https://store.steampowered.com/public/css/promo/winter' . $Year . '_sale.css?__TIME__&__CDN__';

			foreach( $Data as $Line )
			{
				$Line = trim( $Line );

				if( empty( $Line ) || $Line[ 0 ] === '/' )
				{
					continue;
				}

				if( str_contains( $Line, '@' ) )
				{
					$Line = explode( '@', $Line );
					$File = trim( $Line[ 0 ] );
					$Url = trim( $Line[ 1 ] );
				}
				else
				{
					$Url = $Line;
					$ParsedUrl = parse_url( $Url );

					if( $ParsedUrl === false || empty( $ParsedUrl[ 'host' ] ) || empty( $ParsedUrl[ 'path' ] ) )
					{
						$this->Log( $Line . ' is malformed' );
						continue;
					}

					$File = $ParsedUrl[ 'host' ] . $ParsedUrl[ 'path' ];
				}

				$Urls[] =
				[
					'URL' => $Url,
					'File' => $File,
				];
			}

			return $Urls;
		}

		/**
		 * @param array<string, true> $KnownUrls
		 *
		 * @return array<int, array{URL: string, File: string}>
		 */
		private function ProcessViteChunks( array &$KnownUrls ) : array
		{
			$this->RunCommand( 'node tools/generate_vite_urls.ts' );

			if( !file_exists( self::ViteUrlsPath ) )
			{
				throw new Exception( self::ViteUrlsPath . ' does not exist' );
			}

			$URLsToFetch = [];
			$ViteUrls = file( self::ViteUrlsPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES );

			foreach( $ViteUrls as $Url )
			{
				if( !str_starts_with( $Url, 'https://' ) )
				{
					throw new Exception( $Url . ' does not start with https://' );
				}

				$QuestionMark = strrpos( $Url, '?' );

				if( $QuestionMark === false )
				{
					throw new Exception( $Url . ' does not contain a question mark' );
				}

				if( isset( $KnownUrls[ $Url ] ) )
				{
					continue;
				}

				$KnownUrls[ $Url ] = true;
				$URLsToFetch[] =
				[
					'URL'  => $Url,
					'File' => substr( $Url, 8, $QuestionMark - 8 ),
				];
			}

			return $URLsToFetch;
		}

		/**
		 * @param array<int, string> $PreviousUrls
		 * @param array<string, true> $KnownUrls
		 */
		private function DeleteOldViteChunks( array $PreviousUrls, array $KnownUrls ) : void
		{
			foreach( $PreviousUrls as $Url )
			{
				if( isset( $KnownUrls[ $Url ] ) )
				{
					continue;
				}

				$QuestionMark = strrpos( $Url, '?' );

				if( $QuestionMark === false || !str_starts_with( $Url, 'https://' ) )
				{
					continue;
				}

				$File = substr( $Url, 8, $QuestionMark - 8 );
				$FilepathOnDisk = __DIR__ . '/' . $File;

				if( file_exists( $FilepathOnDisk ) )
				{
					$this->Log( 'Chunk ' . $FilepathOnDisk . ' is no longer referenced' );

					unlink( $FilepathOnDisk );
				}

				$CleanFilepath = __DIR__ . '/c/' . $File;

				if( file_exists( $CleanFilepath ) )
				{
					$this->Log( 'Deleting clean file ' . $CleanFilepath );

					unlink( $CleanFilepath );
				}

				if( preg_match( self::EnglishChunkPattern, $File ) === 1 )
				{
					$JsonFilepath = substr( $FilepathOnDisk, 0, -3 ) . '.json';

					if( file_exists( $JsonFilepath ) )
					{
						$this->Log( 'Deleting strings file ' . $JsonFilepath );

						unlink( $JsonFilepath );
					}
				}

				unset( $this->ETags[ $File ], $this->ETags[ $File . '.unmodified' ] );
			}
		}

		/**
		 * @return array<int, array{URL: string, File: string}>
		 */
		private function ProcessSSRFiles() : array
		{
			$this->RunCommand( 'node tools/generate_ssr_urls.ts' );

			$SSRUrlsPath = __DIR__ . '/.support/urls_from_ssr.txt';

			if( !file_exists( $SSRUrlsPath ) )
			{
				throw new Exception( $SSRUrlsPath . ' does not exist' );
			}

			$URLsToFetch = [];
			$SSRUrls = file( $SSRUrlsPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES );

			foreach( $SSRUrls as $Url )
			{
				if( !str_starts_with( $Url, 'https://' ) )
				{
					throw new Exception( $Url . ' does not start with https://' );
				}

				$File = $this->GetSSRFilepath( $Url );

				if( $File === null || isset( $this->CurrentSSRFiles[ $File ] ) )
				{
					continue;
				}

				$this->CurrentSSRFiles[ $File ] = true;

				$URLsToFetch[] =
				[
					'URL'  => $Url,
					'File' => $File,
				];
			}

			return $URLsToFetch;
		}

		private function DeleteOldSSRFiles() : void
		{
			// Find and delete old chunk files
			$Folders = [];

			foreach( $this->CurrentSSRFiles as $Filepath => $_ )
			{
				$Folder = __DIR__ . '/' . dirname( $Filepath ) . '/';

				if( !isset( $Folders[ $Folder ] ) )
				{
					$Folders[ $Folder ] = [];
				}

				$Folders[ $Folder ][ basename( $Filepath ) ] = true;
			}

			foreach( $Folders as $Folder => $NewChunks )
			{
				if( !is_dir( $Folder ) )
				{
					continue;
				}

				foreach( new DirectoryIterator( $Folder ) as $FileInfo )
				{
					if( $FileInfo->isDot() )
					{
						continue;
					}

					$Filename = $FileInfo->getFilename();

					if( !isset( $NewChunks[ $Filename ] ) )
					{
						$FilepathOnDisk = $FileInfo->getRealPath();

						$this->Log( 'Chunk ' . $FilepathOnDisk . ' no longer exists' );

						$File = substr( dirname( $FileInfo->getPathname() ), strlen( __DIR__ . '/' ) ) . '/' . $Filename;
						unset( $this->ETags[ $File ], $this->ETags[ $File . '.unmodified' ] );

						unlink( $FilepathOnDisk );
					}
				}

				// Clean up orphaned files in the clean directory
				$CleanFolder = str_replace( __DIR__ . '/', __DIR__ . '/c/', $Folder );

				if( !is_dir( $CleanFolder ) )
				{
					continue;
				}

				foreach( new DirectoryIterator( $CleanFolder ) as $FileInfo )
				{
					if( $FileInfo->isDot() )
					{
						continue;
					}

					$Filename = $FileInfo->getFilename();

					if( !isset( $NewChunks[ $Filename ] ) )
					{
						$FilepathOnDisk = $FileInfo->getRealPath();

						$this->Log( 'Deleting clean file ' . $FilepathOnDisk );
						unlink( $FilepathOnDisk );
					}
				}
			}
		}

		private function GetSSRFilepath( string $Url ) : ?string
		{
			$File = parse_url( $Url, PHP_URL_PATH );

			if( str_starts_with( $File, '/store/ssr/' ) )
			{
				return 'store.steampowered.com/ssr/' . basename( $File );
			}
			else if( str_starts_with( $File, '/steamcommunity/public/ssr/' ) )
			{
				return 'steamcommunity.com/ssr/' . basename( $File );
			}
			else if( str_starts_with( $File, '/appmgmt/ssr/' ) )
			{
				return 'partner.steamgames.com/ssr/' . basename( $File );
			}

			$this->Log( '{lightred}Unknown SSR path: ' . $File );

			return null;
		}

		private function RunCommand( string $Command ) : void
		{
			system( $Command, $ReturnCode );

			if( $ReturnCode !== 0 )
			{
				throw new RuntimeException( 'Command failed with code ' . $ReturnCode . ': ' . $Command );
			}
		}

		private function Log( string $String ) : void
		{
			$Log  = '[';
			$Log .= number_format( ( hrtime( true ) - $this->AppStart ) / 1e9, 2 );
			$Log .= 's] ';
			$Log .= $String;
			$Log .= '{normal}';
			$Log .= PHP_EOL;

			$Log = str_replace( $this->APIKey, '{lightred}*APIKEY*{normal}', $Log );

			$Log = str_replace(
				[
					'{normal}',
					'{green}',
					'{yellow}',
					'{lightred}',
					'{lightblue}'
				],
				[
					"\033[0m",
					"\033[0;32m",
					"\033[1;33m",
					"\033[1;31m",
					"\033[1;34m"
				],
			$Log );

			echo $Log;
		}
	}
