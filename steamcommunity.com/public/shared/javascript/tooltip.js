/* Requires jQuery
 *
 * This plugin will create div.jsTooltip elements (or configure your own!) in body for every tooltip on the page. Some
 * basic CSS is applied automagically, but you'll want to style it on your own from there. This code will be applied to
 * every element in your .v_tooltip() selector, so giving it a common selector like '.tooltip' is ideal.
 *
 * Options:
 * - location: Where the tooltip should spawn in relation to it's parent
 * - offsetN: How many pixels to add
 * - trackMouse: Should we track the mouse cursor instead of the parent?
 * - suppressOnClick: Should we hide if a user clicks the target?
 * - suppressWhileToggled: Should we ignore events if the target has the 'toggled' class?
 * - tooltipClass: css class to apply to tooltip elements
 * - fadeSpeed:	Time (in milliseconds) to spend fading in/out. Set to 0 to disable.
 * - allowHover: Should we keep the tooltip open if we mouse directly on to the tooltip? (Your tooltip will need to spawn inside it's owner's box for this to work)
 * - tooltipParent: More generally useless properties for supernav: Lets us specify which element to parent the tooltips to. YOU PROBABLY DON'T NEED THIS.
 * - correctForScreenSize: Adjust tooltip position to ensure it doesn't render outside of the viewport
 * - sizeCorrectionXPadding: How far we should keep the tooltip from the window edge
 * - useClickEvent: Should we use the mouse click event instead of hover?
 * - inheritParentMinWidth: Should we set min-width based on our parent's width?
 * - parentActiveCSSClass: What CSS class should we add to our parent while we're visible?
 * - childActiveCSSClass: What CSS class should we add to the tooltip when active (Mostly useful for triggering CSS transitions
 * - funcName: Global name of a function to call on hover (It searches the global window object; not safe inside "use strict"
 * - func: Actual JS code to run.
 * - responsiveMode: enable when in responsive mode/mobile/tablet, requires tooltip elements to be decorated with data-tooltip-responsive to enable in responsive mode
 */
/* <script> */
(function( $ ){
	let g_nextTooltipId = 0;
	var methods = {

		init : function( options ) {

			var settings = $.extend( {
				'location'			: 'top',
				'offsetX'			: 0,
				'offsetY'			: -10,
				'trackMouse'		: false,
				'trackMouseCentered': true,
				'suppressOnClick'	: true,
				'suppressWhileToggled': true,
				'tooltipClass'		: 'jsTooltip',
				'fadeSpeed'			: 150,
				'allowHover'		: true,
				'tooltipParent'		: 'body',
				'correctForScreenSize': true,
				'sizeCorrectionXPadding': 15,
				'sizeCorrectionYPadding': 10,
				'useClickEvent'		: false,
				'useContextMenuEvent'	: false,
				'useMouseEnterEvent'	: true,
				'useMouseLeaveEvent'	: true,
				'preventDefault'	: true,
				'stopPropagation'	: false,
				'inheritParentMinWidth'	: false,
				'parentActiveCSSClass'	: false,
				'dataName'			: 'tooltipContent',
				'funcName'			: 'tooltipFunc',
				'func'				: false,
				'disableOnTouchDevice'	: false,
				'childActiveCSSClass' : false,
				'destroyWhenDone': true,
				'createOnLoad': false,
				'replaceExisting': true, // should we stomp on existing tooltips?
				'defaultType': 'html', // default tooltip type if not specified.
				'responsiveMode': false,
				'appearanceDelayMs': 0, // How long do we wait after the trigger to show the tooltip (or to start fade-in)
			}, options);




			return this.each(function(){

				var $target = $(this);

				if ( settings.responsiveMode && !this.hasAttribute('data-tooltip-responsive' ) )
					return;

				if( $target.data('tooltip.settings') && !settings.replaceExisting)
					return;

				if( settings.useClickEvent )
				{
					$target.bind('click.tooltip', methods.show);
				}
				else
				{
					$target.bind('vgp_onfocus.tooltip', methods.show );
					$target.bind('vgp_onblur.tooltip', methods.hide );
				}

				if( settings.useContextMenuEvent )
				{
					$target.bind('contextmenu.tooltip', methods.show);
				}
				if( settings.useMouseEnterEvent )
				{
					$target.bind('mouseenter.tooltip', methods.show);
				}
				if( settings.useMouseLeaveEvent )
				{
					$target.bind('mouseleave.tooltip', methods.hide);
				}

				if ( settings.disableOnTouchDevice )
				{
					// if we get a touch event, disable tooltip events on this object.  This fires before mouse events, so we
					//	can prevent the hover from showing.
					//	(we could preventDefault(), but that will prevent the actual click event that's coming too)
					$target.bind('touchstart.tooltip', function(e) { $target.data('inTouchEvent', true); });
					$target.bind('mouseup.tooltip', function(e) { $target.data('inTouchEvent', false); });
				}

				$target.data('tooltip.settings', settings);
				$target.data('tooltip.id', g_nextTooltipId++);

				if( settings.createOnLoad )
					methods.gettooltip( this, settings );
			});

		},
		destroy : function() {

			return this.each(function(){
				$(window).unbind('.tooltip');
			})

		},
		gettooltip : function( element, settings ) {
			var $element= $(element);
			var toolDiv = $element.data("tooltip.element");
			var toolId = $element.data("tooltip.id");
			if ( !toolDiv )
			{
				toolDiv = $('<div />');

				if( settings.suppressOnClick )
				{
					toolDiv.bind('click.tooltip', jQuery.proxy(methods.hide, element));
				}
				toolDiv.hide();
				toolDiv.addClass(settings.tooltipClass);
				if ( $element.data( 'tooltip-class' ) )
				{
					toolDiv.addClass( $element.data( 'tooltip-class' ) );
				}
				toolDiv.css({
					position: 'absolute',
					'z-index': 1500
				});
				toolDiv.attr('id', 'tooltip-' + toolId);
				var type = $element.data('tooltip-type');
				if( !type )
					type = settings.defaultType;

				var content = '';
				if ( settings.dataAttr )
					content = $element.attr( settings.dataAttr );
				else if ( settings.dataName )
					content = $element.data(settings.dataName);

				if( type == 'text')
				{
					toolDiv.text( content );
				}
				else if ( type == 'selector' )
				{
					var toolElement = $( content, $element.parent() );
					toolDiv.data( 'originalParent', toolElement.parent() );
					toolDiv.append( toolElement.show() );
					toolDiv.data( 'preserveContent', true );
				}
				else
				{
					toolDiv.html( content );
				}

				if ( typeof( g_TextFilter ) !== 'undefined' && g_TextFilter != null )
				{
					g_TextFilter.FilterElement( toolDiv );
				}

				$( settings.tooltipParent || $element.parent() ).append(toolDiv);
				$element.data("tooltip.element", toolDiv);

			}

			var funcName = settings.funcName && $(element).data( settings.funcName );
			if( funcName )
			{
				if( type == 'text')
					toolDiv.text( window[funcName](element) );
				else
					toolDiv.html( window[funcName](element) );
			}

			if( settings.func )
				settings.func.bind(toolDiv)(element);

			return toolDiv;
		},
		updateposition : function() {
		    var newPosition = {};
		    var settings = $(this).data('tooltip.settings');
		    var toolDiv = methods.gettooltip( this, settings );

		    var parentPosition = $(this).offset();

		    const bRTL = toolDiv[0].matches( ':dir(rtl)' );
		    switch( settings.location )
		    {
				case 'top':
					if ( bRTL )
					{
						newPosition = {
							left: parentPosition.left + $(this).outerWidth() - toolDiv.outerWidth() + settings.offsetX,
							top: parentPosition.top - toolDiv.outerHeight() + settings.offsetY
						};
					}
					else
					{
						newPosition = {
							left: parentPosition.left + settings.offsetX,
							top: parentPosition.top - toolDiv.outerHeight() + settings.offsetY
						};
					}
					break;

				case 'bottom':
					if ( bRTL )
					{
						newPosition = {
							left: parentPosition.left + $(this).outerWidth() - toolDiv.outerWidth() + settings.offsetX,
							top: parentPosition.top + $(this).outerHeight() + settings.offsetY
						};
					}
					else
					{
						newPosition = {
							left: parentPosition.left + settings.offsetX,
							top: parentPosition.top + $(this).outerHeight() + settings.offsetY
						};
					}
					break;

				case 'bottom left':
					if ( bRTL )
					{
						newPosition = {
							left: parentPosition.left + settings.offsetX,
							top: parentPosition.top + $(this).outerHeight() + settings.offsetY
						};
					}
					else
					{
						newPosition = {
							left: parentPosition.left + settings.offsetX - toolDiv.outerWidth() + $J(this).outerWidth(),
							top: parentPosition.top + $(this).outerHeight() + settings.offsetY
						};
					}
					break;

				default:
					console.log("Invalid location passed to v_tooltip: %s", settings.location);
		    }
		    // Correct for window size
		    if( settings.correctForScreenSize )
		    {
		        var rightEdge = newPosition.left + toolDiv.width();
		        var windowRightEdge = $(window).width() - settings.sizeCorrectionXPadding + $(window).scrollLeft();
		        var windowLeftEdge =  $(window).scrollLeft() + settings.sizeCorrectionXPadding;

		        if( rightEdge > windowRightEdge )
		            newPosition.left = windowRightEdge - toolDiv.width() - settings.sizeCorrectionXPadding;

		        if( newPosition.left < windowLeftEdge )
		            newPosition.left = windowLeftEdge;

				if ( newPosition.top < 0 )
					newPosition.top = parentPosition.top + $(this).height() + settings.sizeCorrectionYPadding - settings.offsetY;
		    }

		    toolDiv.css(newPosition);
		},
		reposition : function(event) {
			var newPosition = {};
			var settings = $(this).data('tooltip.settings');
			var toolDiv = methods.gettooltip( this, settings );

			var parentPosition = $(this).offset();

			if( settings.trackMouse )
			{
				if ( settings.trackMouseCentered )
					newPosition.left = event.pageX - toolDiv.outerWidth() / 2;
				else
					newPosition.left = event.pageX + settings.offsetY;

				if ( settings.location == 'top' )
					newPosition.top = event.pageY - toolDiv.outerHeight() + settings.offsetY;
				else
					newPosition.top = event.pageY + settings.offsetY;

			} else {
				const bRTL = toolDiv[0].matches( ':dir(rtl)' );
				switch( settings.location )
				{
					case 'top':
						if ( bRTL )
						{
							newPosition = {
								left: parentPosition.left + $(this).outerWidth() - toolDiv.outerWidth() + settings.offsetX,
								top: parentPosition.top - toolDiv.outerHeight() + settings.offsetY
							};
						}
						else
						{
							newPosition = {
								left: parentPosition.left + settings.offsetX,
								top: parentPosition.top - toolDiv.outerHeight() + settings.offsetY
							};
						}
						break;

					case 'bottom':
						if ( bRTL )
						{
							newPosition = {
								left: parentPosition.left + $(this).outerWidth() - toolDiv.outerWidth() + settings.offsetX,
								top: parentPosition.top + $(this).outerHeight() + settings.offsetY
							};
						}
						else
						{
							newPosition = {
								left: parentPosition.left + settings.offsetX,
								top: parentPosition.top + $(this).outerHeight() + settings.offsetY
							};
						}
						break;

					case 'bottom left':
						if ( bRTL )
						{
							newPosition = {
								left: parentPosition.left + settings.offsetX,
								top: parentPosition.top + $(this).outerHeight() + settings.offsetY
							};
						}
						else
						{
							newPosition = {
								left: parentPosition.left + settings.offsetX - toolDiv.outerWidth() + $J(this).outerWidth(),
								top: parentPosition.top + $(this).outerHeight() + settings.offsetY
							};
						}
						break;

					case 'mouse':
						newPosition = {
							left: event.pageX + settings.offsetX,
							top: event.pageY + settings.offsetY
						}

					default:
						console.log("Invalid location passed to v_tooltip: %s", settings.location);
				}
			}
			// Correct for window size
			if( settings.correctForScreenSize )
			{
				var rightEdge = newPosition.left + toolDiv.width();
				var windowRightEdge = $(window).width() - settings.sizeCorrectionXPadding + $(window).scrollLeft();
				var windowLeftEdge =  $(window).scrollLeft() + settings.sizeCorrectionXPadding;

				if( rightEdge > windowRightEdge )
					newPosition.left = windowRightEdge - toolDiv.width() - settings.sizeCorrectionXPadding;

				if( newPosition.left < windowLeftEdge )
					newPosition.left = windowLeftEdge;

				if ( newPosition.top < 0 )
					newPosition.top = parentPosition.top + $(this).height() + settings.sizeCorrectionYPadding - settings.offsetY;
			}

			toolDiv.css(newPosition);
		},
		show : function(event) {
			var settings = $(this).data('tooltip.settings') || {};

			if ( settings.disableOnTouchDevice && $(this ).data('inTouchEvent') )
			{
				return;
			}

			var toolDiv = methods.gettooltip( this, settings );

			if( toolDiv.is(':empty') )
				return;

			if( event.type == "click" && event.currentTarget != this )
				return;

			if( settings.suppressWhileToggled && $(this).hasClass('toggled') )
				return false;

			var tipElem = this;
			if ( !settings.trackMouse )
			{
				toolDiv.find( 'img' ).on( 'load', function() { jQuery.proxy(methods.updateposition, tipElem)() } );
			}

			if( settings.preventDefault )
				event.preventDefault();

			if( settings.stopPropagation )
				event.stopPropagation();

			if( settings.parentActiveCSSClass )
				$(this).addClass(settings.parentActiveCSSClass);

			if( settings.inheritParentMinWidth )
			{
				var parentWidth = $(this).outerWidth();
				var localPadding = toolDiv.outerWidth() - toolDiv.width();
				toolDiv.css({'min-width': + (parentWidth - localPadding) + "px"});
			}

			toolDiv[0].popover = 'manual';
			toolDiv.css('inset', 'unset');
			toolDiv.css('border', 'none');
			toolDiv.css('overflow', 'initial');

			toolDiv.stop(true, true);
			if( settings.fadeSpeed > 0 )
				toolDiv.delay( settings.appearanceDelayMs ).fadeTo( settings.fadeSpeed, 1 );
			else
				toolDiv.delay( settings.appearanceDelayMs ).show();

			if( settings.allowHover )
			{
				if( settings.useClickEvent )
					toolDiv.bind('click.tooltip', jQuery.proxy(methods.show, this));
				else if( settings.useContextMenuEvent )
					toolDiv.bind('contextmenu.tooltip', jQuery.proxy(methods.show, this));
				else
					toolDiv.bind('mouseenter.tooltip', jQuery.proxy(methods.show, this));
				toolDiv.bind('mouseleave.tooltip', jQuery.proxy(methods.hide, this));
			}

			if( settings.trackMouse )
				$(this).bind('mousemove.tooltip', methods.reposition);
			jQuery.proxy(methods.reposition, this)(event);

			if( settings.childActiveCSSClass )
			{
				toolDiv.css('opacity');
				toolDiv.addClass(settings.childActiveCSSClass);

			}

			toolDiv[0].showPopover();

			toolDiv.css('pointer-events','auto');

			$(this).trigger('v_tooltip_shown', [ toolDiv ] );

			$(this).attr('aria-describedby', 'tooltip-' + $(this).data("tooltip.id"));

		},
		hide : function(event) {
			var toolDiv = $(this).data('tooltip.element');
			var settings = $(this).data('tooltip.settings') || {};

			// the element may not have been created yet - in which case there is nothing to hide
			if ( !toolDiv || !toolDiv.length )
				return;


			if( event && event.type != 'click' )
			{
				// Moving between the click target and it's children
				if( event.relatedTarget && ( this == event.relatedTarget || this.contains(event.relatedTarget) ) )
					return;
				// Moving to the tooltip or one of it's children
				else if( event.relatedTarget && ( event.relatedTarget == toolDiv[0] || toolDiv[0].contains(event.relatedTarget ) ) )
					return;
			}

			if( settings.trackMouse )
				$(this).unbind('mousemove.tooltip');

			toolDiv.unbind('mouseenter.tooltip');
			toolDiv.unbind('mouseleave.tooltip');

			if( settings.parentActiveCSSClass )
				$(this).removeClass(settings.parentActiveCSSClass);


			// Clear the animation queue so appearance delays and fading are aborted
			toolDiv.stop( true );
			if( settings.fadeSpeed > 0 && toolDiv.is(':visible') )
			{
				toolDiv.fadeTo( settings.fadeSpeed, 0, function() {
					if ( settings.destroyWhenDone )
					{
						methods.destroytooltip( toolDiv );
					}
					if ( toolDiv[0].popover )
					{
						toolDiv[0].hidePopover();
					}
				} );
			} else if( settings.childActiveCSSClass )
			{
				toolDiv.css('opacity');
				toolDiv.removeClass(settings.childActiveCSSClass);
				// Note: This callback isn't reliable, so we may end up junking up the dom with a few spare copies
				// Not a huge deal in most cases, but keep in mind if you're using this on pages which may exist for
				// long periods of time without reloading.
				if( settings.destroyWhenDone )
				{
					toolDiv.on ( "transitionend", function () {
						methods.destroytooltip ( toolDiv );
						if ( toolDiv[0].popover )
						{
							toolDiv[0].hidePopover();
						}
					} );

					// Transitionend may not fire under various conditions, so JUST IN CASE....
					setTimeout( function(){
						methods.destroytooltip ( toolDiv );
						if ( toolDiv[0].popover )
						{
							toolDiv[0].hidePopover();
						}
					}, 1000);
				}
				else
				{
					if ( toolDiv[0].popover )
					{
						toolDiv[0].hidePopover();
					}
				}
			}
			else
			{
				if( settings.destroyWhenDone )
					methods.destroytooltip( toolDiv );

				if ( toolDiv[0].popover )
				{
					toolDiv[0].hidePopover();
				}
			}
			if( settings.destroyWhenDone )
				$(this).removeData('tooltip.element');
			else
				toolDiv.css('pointer-events','none');

			$(this).trigger( 'v_tooltip_hidden' );
		},
		destroytooltip: function( toolDiv )
		{
			if ( toolDiv )
			{
				if ( $(toolDiv ).data('preserveContent') )
				{
					$( toolDiv.data( 'originalParent') ).append( $(toolDiv ).children().hide());
				}

				$(toolDiv).remove();
			}
		}
	};

	$.fn.v_tooltip = function( method ) {

		if ( methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
		}

	};


})( jQuery );


