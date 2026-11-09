


(function() {
		function CreateOnInputEnterEventClosure( form_element )
	{
		var form = form_element;
		return function( e ) {
			var keynum = 0;
			
			if( e.keyCode ) 		  	{
				keynum = e.keyCode;
			}
			else if( e.which ) 			{
				keynum = e.which;
			}
			
			if ( keynum == 13 ) 
			{
				if ( form.onsubmit == undefined || form.onsubmit() )
					form.submit();
				Event.stop( e );
			}
		};
	}
	
		function Initialize() {
		Event.observe( window, 'load', function() {
			var forms = document.getElementsByTagName('form');
		
		    for (var i = 0; i < forms.length; i++ ) 
		    {
		        var inputs = forms[i].getElementsByTagName('input');
		
		        for ( var j = 0; j < inputs.length; j++ )
		        	Event.observe( inputs[j], 'keydown', CreateOnInputEnterEventClosure( forms[i] ) );
		    }
		} );
	}
	
		Initialize();
})();

