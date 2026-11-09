
var g_ActiveDropLists = {};
var g_LastSelectHideTime = 0;

$J(function() {
	$J(document).on( 'keydown', HandleKeyDown );
});

function HandleMouseClick( e, key )
{
			if ( !g_ActiveDropLists[key] )
		return;

	var $Trigger = $J('#'+key+'_trigger');
	var $Droplist = $J('#'+key+'_droplist');

	var $Target = $J( e.target);
	if ( //$Trigger.is( e.target ) || $J.contains( $Trigger[0], e.target ) ||
		$Droplist.is( e.target ) || $J.contains( $Droplist[0], e.target ) )
		return;

		DSelectHide( key );
}

var TYPEAHEAD_TIMEOUT_MS = 750;
var g_timeLastCharEvent = 0;
var g_strTypeahead = '';

function HandleKeyDown( e )
{
	var bSwallowEvent = false;
	var keynum = e.which;

	if ( e.altKey || e.ctrlKey )
	{
		// bail out now so the browser can do it's thing
		return;
	}

	var bCharEvent = false;
	switch ( keynum )
	{
				case 40: 		case 38: 		case 13: 		case 9:  		case 34: 		case 33: 		case 36: 		case 35: 		case 27: 			break;
				case 16: 			return !bSwallowEvent;
				default:
			bCharEvent = true;
			break;
	}

		for ( var id in g_ActiveDropLists )
	{

				if ( !g_ActiveDropLists[id] )
			continue;

		var $Droplist = $J('#'+id+'_droplist');
		var $Trigger = $J('#'+id+'_trigger');
		var rgItems = $Droplist.find('a');
		var curIndex = $Trigger.data('highlightedItem');
		if ( typeof curIndex == 'undefined' )
			curIndex = -1;

				if ( keynum != 9 )
			bSwallowEvent = true;

				if ( keynum == 13 || keynum == 9 )
		{
			DHighlightItem( id, curIndex, true, false );
			continue;
		}
		else if ( keynum == 27 )
		{
			DSelectHide( id );
			continue;
		}

								if ( bCharEvent )
		{
			var c = String.fromCharCode( keynum );
			var bExpandingMatch = false;
			var time = $J.now();
			if ( time - g_timeLastCharEvent < TYPEAHEAD_TIMEOUT_MS )
			{
				c = g_strTypeahead + c;
				bExpandingMatch = true;
			}

			g_timeLastCharEvent = time;
			g_strTypeahead = c;

			var firstIndex = curIndex;
			var nextIndex = curIndex;
			var regExp = new RegExp( '^' + V_EscapeRegExp( c ), 'i' );
						if ( !bExpandingMatch || curIndex < 0 || !rgItems[curIndex].innerHTML.match( regExp ) )
			{
				for( var i = 0; i < rgItems.length; ++ i )
				{
					var s = rgItems[i].innerHTML;
					if ( s.length > 0 && s.match( regExp ) )
					{
						if ( curIndex == firstIndex )
							firstIndex = i;

						if ( curIndex < i )
						{
							nextIndex = i;
							break;
						}
					}
				}
			}

									if ( nextIndex != curIndex )
				curIndex = nextIndex;
			else if ( firstIndex != curIndex )
				curIndex = firstIndex;

			DHighlightItem( id, curIndex, false, true );

						if ( !$J( '#'+id+'_trigger').hasClass('activetrigger') )
			{
				DSelectShow( id );
			}
		}
		else
		{
			g_timeLastCharEvent = 0; 									if ( keynum == 40 )	//down
				curIndex++;
			else if ( keynum == 38 )	//up
				curIndex--;
			else if ( keynum == 36 )	// home
				curIndex = 0;
			else if ( keynum == 35 )	// end
				curIndex = rgItems.length - 1;

						var nPageItemCount = rgItems.length < 1 ? 0 : Math.floor(($Droplist.height() / $J(rgItems[0]).height() ));
			if ( keynum == 34 )	//pagedown
				curIndex += Math.min( nPageItemCount, (rgItems.length - curIndex - 1) );
			else if ( keynum == 33 )	//pageup
				curIndex -= Math.min( nPageItemCount, curIndex );

			if( curIndex >= 0 && curIndex < rgItems.length )
			{
				DHighlightItem( id, curIndex, false, true );

								if ( !$J( '#'+id+'_trigger').hasClass('activetrigger') )
				{
					DSelectShow( id );
				}
			}
		}
	}

	if ( bSwallowEvent )
		e.preventDefault();

	return !bSwallowEvent;
}

function DSelectOnGamepadDirection( event, id )
{
	if ( !g_ActiveDropLists[id] )
		return false;

	var bSwallowEvent = false;

	var $Droplist = $J('#'+id+'_droplist');
	var $Trigger = $J('#'+id+'_trigger');
	var rgItems = $Droplist.find('a');
	var curIndex = $Trigger.data('highlightedItem');
	if ( typeof curIndex == 'undefined' )
		curIndex = -1;

	if ( event.detail.button === 9 ) // up
	{
		bSwallowEvent = true;
		curIndex--;
	}
	if ( event.detail.button === 10 ) // down
	{
		bSwallowEvent = true;
		curIndex++;
	}
	if( curIndex >= 0 && curIndex < rgItems.length )
	{
		DHighlightItem( id, curIndex, false, true );

				if ( !$J( '#'+id+'_trigger').hasClass('activetrigger') )
		{
			DSelectShow( id );
		}
	}

	return bSwallowEvent;
}

function DSelectOnOKButton( event, id )
{
	if ( !g_ActiveDropLists[id] )
		return false;

	var $Trigger = $J('#'+id+'_trigger');
	var curIndex = $Trigger.data('highlightedItem');
	if ( typeof curIndex == 'undefined' )
		curIndex = -1;

	DHighlightItem( id, curIndex, true, false );
	return true;
}

function DSelectOnCancelButton( event, id )
{
	if ( !g_ActiveDropLists[id] )
		return false;

	DSelectHide( id );
	return true;
}

function DHighlightItem( id, index, bSetSelected, bScrollToItem )
{
	var $Droplist = $J('#'+id+'_droplist');
	var $Trigger = $J('#'+id+'_trigger');
	var rgItems = $Droplist.find('a');
	if ( index >= 0 && index < rgItems.length )
	{
		var $Item = $J(rgItems[index]);

				if ( typeof $Trigger.data('highlightedItem') != 'undefined' && $Trigger.data('highlightedItem') != index )
		{
			var $prev = $J(rgItems[$Trigger.data('highlightedItem')]).removeClass('highlighted_selection').addClass( 'inactive_selection' );
		}

		$Trigger.data( 'highlightedItem', index );
		$Trigger.attr( 'aria-activedescendant', $Item.attr( 'id' ) );
		$Item.removeClass('inactive_selection').addClass('highlighted_selection');

				if ( bScrollToItem )
		{
			var nItemTop = $Item.position().top;
			if ( nItemTop < 0 )
			{
				$Droplist.scrollTop( $Droplist.scrollTop() + nItemTop );
			}
			else if ( nItemTop + $Item.height() > $Droplist.height() )
			{
				$Droplist.scrollTop( $Droplist.scrollTop() + nItemTop - $Droplist.height() + $Item.height() );
			}
		}

		if ( bSetSelected )
		{
						$Trigger.html( $Item.html() );
			var $Input = $J('#'+id);
			$Input.val( $Item.attr('id') );

			DSelectHide( id );
			$Input.change();
		}
	}
}

function DHighlightItemByValue( id, value, bSetSelected )
{
	var $Droplist = $JFromIDOrElement(id+'_droplist');
	var rgItems = $Droplist.find( 'a' );

	for ( var index = 0; index < rgItems.length; index++ )
	{
		var item = rgItems[index];
		if ( item.id == value )
		{
			DHighlightItem( id, index, bSetSelected, true );
			return;
		}
	}
}

function DSelectNoop()
{
	return;
}

function DSelectOnFocus( id )
{
	var bUseGamepadScreenMode = window.UseGamepadScreenMode && window.UseGamepadScreenMode();

	if ( !bUseGamepadScreenMode )
		g_ActiveDropLists[id] = true;
}

function DSelectOnBlur( id )
{
		if ( !$J( '#'+id+'_trigger').hasClass( 'activetrigger' ) )
	{
		g_ActiveDropLists[id] = false;
	}
}

function DSelectHide( id )
{
	var $Trigger = $J('#'+id+'_trigger');
	var $Droplist = $J('#'+id+'_droplist');
	try
	{
		$Droplist.parent()[0]?.hidePopover();
	}
	catch(e) {}

		g_LastSelectHideTime = $J.now();

	$Trigger.removeClass('activetrigger');
	$Trigger.attr( 'aria-activedescendant', null );
	$Droplist.attr( 'class', 'dropdownhidden' );
	$Droplist.find('a.highlighted_selection' ).removeClass('highlighted_selection' ).addClass('inactive_selection');
	g_ActiveDropLists[id] = false;
		$Trigger.focus();

	if ( $Droplist.data('originalParent' ) )
		$Droplist.data('originalParent' ).append( $Droplist.parent() );

	$J( document.body ).removeClass( 'dselect_scroll_disable' );
	$J( '.dselect_overlay' ).stop();
	$J( '.dselect_overlay' ).fadeOut( 200, 0 );
	$J( '[data-focusring]' ).css( 'outline', '' );

	$J( document ).off('click.HideActiveDSelect');
}

function DSelectShow( id )
{
		var d = $J.now();
	if ( d - g_LastSelectHideTime < 50 )	//50ms
		return;

	window.setTimeout( function() { $J(document).on( 'click.HideActiveDSelect', function( e ) { HandleMouseClick( e, id ) } ); } );

	// Move the droplist parent to the body-level container. This must be done before changing visibility/styles below,
	// or the positions we read back may not be accurate.
	var $Droplist = $J('#'+id+'_droplist');
	$Droplist.parent()[0].popover = 'manual';
	$Droplist.parent()[0].showPopover();

	var $Trigger = $J('#'+id+'_trigger');
	$Trigger.addClass( 'activetrigger' );
	$Droplist.attr( 'class', 'dropdownvisible' );

	var offset = $Trigger.offset();
	var boundingRect = $Trigger[0].getBoundingClientRect();
	var $rgDroplistCSS = {
		'position': 'absolute',
		'inset': 'unset',
		'padding': 0,
		'background': 'transparent',
		'top': ( offset.top + boundingRect.height ) + 'px',
		'left':  offset.left + 'px',
		'width': boundingRect.width + 'px',
		'overflow': 'visible',
	};

    var bUseGamepadScreenMode = window.UseGamepadScreenMode && window.UseGamepadScreenMode();
    if ( bUseGamepadScreenMode )
	{
		var nTop = Math.max( Math.floor( ( $J(window).height() - $Droplist.height() ) / 2 ), 12 );
		$rgDroplistCSS = {
			'position': 'fixed',
			'inset': 'unset',
			'padding': 0,
			'background': 'transparent',
			'top': nTop,
			'left':  '50vw',
			'width': '320px',
			'transform' : 'translateX( -50% )',
			'z-index' : '2000',
			'overflow': 'visible',
		};

		var $elOverlay = $J( document.body ).children('.dselect_overlay');
		if ( !$elOverlay.length )
            $elOverlay = $J('<div/>', {'class': 'dselect_overlay'} );

		$elOverlay.css( 'opacity' , 0 );
		$J( document.body).append( $elOverlay );
		$elOverlay.stop();
		$elOverlay.fadeTo( 200, 0.8 );
		$J( document.body ).addClass( 'dselect_scroll_disable' );

		// Highlight any existing selected item, or else the first item by default. Also ensure only the selected item
		// (if any) is marked as `aria-selected`.
		var rgItems = $Droplist.find('a');
		for ( var index = 0; index < rgItems.length; ++index )
		{
			$J( rgItems[index] ).attr( 'aria-selected', false );
		}
		var selectedValue = $J('#'+id).val();
		if ( selectedValue == '' )
		{
			DHighlightItem( id, 0, false );
		}
		else
		{
			DHighlightItemByValue( id, selectedValue, false );
			$J( '#'+selectedValue ).attr( 'aria-selected', true );
		}

		$J( '[data-focusring]' ).css( 'outline', 'unset' );
	}

	$Droplist.parent().css( $rgDroplistCSS );

	// Adjust droplist size/position to avoid obscuring content. Do this after applying `$rgDroplistCSS` since that can
	// change the size of the droplist.
	if ( !bUseGamepadScreenMode && $Droplist.length )
	{
		// Widen the droplist if it would need a horizontal scrollbar.
		$Droplist.removeAttr( 'style' );  // Remove any previous width to avoid affecting `scrollWidth`.
		const nScrollWidth = $Droplist[0].scrollWidth;
		let nDroplistWidth = $Droplist.innerWidth();
		if ( nScrollWidth > $Droplist.innerWidth() )  // `.innerWidth()` includes padding, which matches `.scrollWidth`.
		{
			nDroplistWidth = nScrollWidth + 10;
			$Droplist.innerWidth( nDroplistWidth );
		}

		// If the trailing droplist edges would increase the document's scroll dimensions, try to move to a different
		// side of the anchor element, unless that would be offscreen.
		//
		// Hide the droplist while doing this to avoid affecting the document's scroll dimensions. This is done with
		// direct CSS `display` twiddling instead of jQuery `hide()/show()` because the latter would leave the droplist
		// permanently visible, even after `DSelectHide()`.
		$Droplist.css( 'display', 'none' );
		if ( offset.left + nDroplistWidth > document.documentElement.scrollWidth )
		{
			const nNewX = offset.left + boundingRect.width - nDroplistWidth;
			if ( nNewX >= 0 )
			{
				$rgDroplistCSS.left = nNewX;
				$Droplist.parent().css( $rgDroplistCSS );
			}
		}
		const nDroplistHeight = $Droplist.innerHeight();
		if ( offset.top + boundingRect.height + nDroplistHeight > document.documentElement.scrollHeight )
		{
			const nNewY = offset.top - nDroplistHeight;
			if ( nNewY >= 0 )
			{
				$rgDroplistCSS.top = nNewY;
				$Droplist.parent().css( $rgDroplistCSS );
			}
		}
		$Droplist.css( 'display', '' );
	}

	g_ActiveDropLists[id] = true;
		$Trigger.focus();
}

function DSelectSetOptions( id, rgOptions )
{
	var $Droplist = $J( '#' + id + '_droplist' );
	$Droplist.children().remove();

	for ( let i = 0; i < rgOptions.length; ++i )
	{
		const option = rgOptions[ i ];
		const $elOption = $J('<li>', option.class ? { 'class': option.class } : {});
		$J( '<a>', {
			'role': 'option',
			'data-panel': '{"noFocusRing":true}',
			'class': 'inactive_selection',
			'tabindex': '99999',
			href: 'javascript:DSelectNoop();',
			'onmouseover': `DHighlightItem( '${id}', ${i}, false );`,
			'id': option.value,
			'onclick': `DHighlightItem( '${id}', ${i}, true );`,
			text: option.text
		} ).appendTo( $elOption );
		$Droplist.append( $elOption );
	}
}

function DSelectOnTriggerClick( id )
{
	var $Trigger = $J('#'+id+'_trigger');
	if ( !$Trigger.hasClass( 'activetrigger' ) )
	{
		DSelectShow( id );
	}
}

