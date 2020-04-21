jQuery( document ).ready( function ( $ ) {
	$( document ).on( 'click', '.uplp-list-button', function( e ) {
		
		// set vars
		var ulist_id		= this.id.match( /[0-9]+/ );
		var container_id	= '#uplp-list-' + ulist_id;
		var form_id			= '#uplp-list-' + ulist_id + '-form';
		var button_id		= '#uplp-list-' + ulist_id + '-button';
		var spinner_id		= '#uplp-list-' + ulist_id + '-spinner';
		var message_id		= '#uplp-list-' + ulist_id + '-no-more-label';
		var pagenum_id		= '#uplp-list-' + ulist_id + '-page-number';
		
		// feedback: hide waiting symbol, disable submit button
		$( spinner_id ).show();
		$( button_id ).attr( 'disabled', true );
		
		// parameters for POST
		data = {
			action: 'uplp_ajax_load_more',
			list_id: ulist_id,
			number_items: $( container_id + ' > ul' ).find( 'li' ).length,
			page_number: $( pagenum_id ).val(),
			uplp_nonce: uplp_vars.uplp_nonce
		};

		// request further posts
		jQuery.post( uplp_vars.ajaxurl, data, function( response ) {
			// if there is a valid (non-empty) response
			if ( response ) {
				// append them to current list
				$( container_id + ' > ul' ).append( response );
				// remove focus state from clicked element
				$( button_id ).blur();
			} else {
				// print error message after last element of the container
				$( container_id ).append( '<p>' + $( message_id ).val() + '</p>' );
				// remove form
				$( form_id ).remove();
			}
			// feedback: hide waiting symbol, enable submit button
			$( spinner_id ).hide();
			$( button_id ).attr( 'disabled', false );
		});

		// prevent form to submit
		return false;
	});
});