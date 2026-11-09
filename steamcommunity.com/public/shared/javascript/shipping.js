

function BHasShippingStateDropDown()
{
	return $J('#shipping_state_select_droplist') && $J('#shipping_state_select_droplist')[0] && $J('#shipping_state_select_droplist')[0].childNodes.length > 1;
}

function Shipping_UpdateStateSelectState()
{
	if ( $J('#shipping_country') )
	{
		if ( BHasShippingStateDropDown() )
		{
			$J('#shipping_state_text').hide();
			$J('#shipping_state_select_dselect_container').show();
		}
		else
		{
			$J('shipping_state_text').show();
			$J('shipping_state_select_dselect_container').hide();
		}
	}
}

function Shipping_VerifyAddressFields( rgBadFields )
{
	var errorString = '';
	rgBadFields = {
		shipping_first_name : false,
		shipping_last_name : false,
		shipping_address : false,
		shipping_city : false,
		shipping_state_text : false,
		shipping_phone : false,
		shipping_postal_code : false,
		shipping_state_select_trigger: false
	}

	return errorString;
}

function Shipping_VerifyShippingAddress( sessionID, ajax_url, callbacks )
{
	CrossDomainPost( ajax_url, {
		sessionid: sessionID,
		'ShippingFirstName' : $J('#shipping_first_name') ? $J('#shipping_first_name').val() : '',
		'ShippingLastName' : $J('#shipping_last_name').val(),
		'ShippingAddress' : $J('#shipping_address').val(),
		'ShippingAddressTwo' : $J('#shipping_address_two').val(),
		'ShippingCountry' : $J('#shipping_country').val(),
		'ShippingCity' : $J('#shipping_city').val(),
		'ShippingState' : (BHasShippingStateDropDown() ? $J('#shipping_state_select').val() : $J('#shipping_state_text').val()),
		'ShippingPostalCode' : $J('#shipping_postal_code').val(),
		'ShippingPhone' : $J('#shipping_phone').val()
	} ).done( function(data) {
		callbacks.onSuccess( data );
	}).fail( function() {
		callbacks.onFailure();
	})
}

function Shipping_UpdateFieldsFromVerificationCall( result )
{
	$J('#corrected_shipping_address').val( result.correctedAddress.address1.value );
	$J('#corrected_shipping_address_two').val( result.correctedAddress.address2.value );
	$J('#corrected_shipping_city').val( result.correctedAddress.city.value );
	$J('#corrected_shipping_state').val( result.correctedAddress.state.value );
	$J('#corrected_shipping_postal_code').val( result.correctedAddress.postcode.value );

		var fnFieldHTML = function( strSelector ) { return V_EscapeHTML( $J( strSelector ).val() ); };

		var verify_text = fnFieldHTML('#shipping_first_name') + ' ' + fnFieldHTML('#shipping_last_name') + '<br>';
	verify_text += fnFieldHTML('#shipping_address') + '<br>';
	if ( $J('#shipping_address_two').val().length > 0 )
		verify_text += fnFieldHTML('#shipping_address_two') + '<br>';
	verify_text += fnFieldHTML('#shipping_city') + ', ' + ($J('#shipping_country').val() == 'US' ? fnFieldHTML('#shipping_state_select') : fnFieldHTML('#shipping_state_text')) + ' ' + fnFieldHTML('#shipping_postal_code') + '<br>';

	$J('#shipping_info_verify_address_entered').html( verify_text );

		verify_text = fnFieldHTML('#shipping_first_name') + ' ' + fnFieldHTML('#shipping_last_name') + '<br>';
	verify_text += fnFieldHTML('#corrected_shipping_address') + '<br>';
	if ( $J('#corrected_shipping_address_two').val().length > 0 )
		verify_text += fnFieldHTML('#corrected_shipping_address_two') + '<br>';
	verify_text += fnFieldHTML('#corrected_shipping_city') + ', ' + fnFieldHTML('#corrected_shipping_state') + ', ' + fnFieldHTML('#corrected_shipping_postal_code') + '<br>';

	$J('#shipping_info_verify_address_corrected').html( verify_text );
}

function Shipping_UpdateAddressWithCorrectedFields()
{
	$J('#shipping_address').val( $J('#corrected_shipping_address').val() );
	$J('#shipping_address_two').val( $J('#corrected_shipping_address_two').val() );
	$J('#shipping_city').val( $J('#corrected_shipping_city').val() );
	if ( BHasShippingStateDropDown() )
	{
		 $J('#shipping_state_select').val( $J('#corrected_shipping_state').val() );
	}
	else
	{
		$J('#shipping_state_text').val( $J('#corrected_shipping_state').val() );
	}
	$J('#shipping_postal_code').val( $J('#corrected_shipping_postal_code').val() );
}
