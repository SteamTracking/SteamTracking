
function CuratorLanding_SetupSingleMicrotrailer( elItem, strMicroTrailerURL )
{
	var videos = elItem.find( '.microtrailer_video');
	if( strMicroTrailerURL && videos && videos.length > 0  )
	{
		var elVideo = $J( videos[0] ); 		elVideo.on( "canplay", function() { elItem.addClass( 'has_microtrailer' ); } );
		elVideo.on( "playing", function() { elItem.addClass( 'has_microtrailer' ); } );

		elItem.hover(
			function() { 				if( elVideo.hasClass( 'added_source'))
				{
					elVideo.addClass( 'added_source' );
					elVideo.append( $J( '<source>', { src: strMicroTrailerURL, type: "video/webm" } ) );
				}

				playPromise = elVideo.get(0).play();
				if( playPromise )
				{
					playPromise.catch( function (e ) {
						elItem.removeClass( 'has_microtrailer');
					});
				}
			},

			function () { 							elVideo.trigger( 'pause');
			}
		);
	}
}

function CuratorLanding_SetupMicrotrailer()
{
	var elements = $J( ".setup_microtrailer" );
	if( elements )
	{
		elements.each( function( index ) {

			var elItem = $J( elements[index]) ;
			var strMicroTrailerURL = elItem.data('micro');
			CuratorLanding_SetupSingleMicrotrailer( elItem, strMicroTrailerURL );
		});
	}
}
