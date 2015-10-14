jQuery( function ( $ ) {
	// Focus styles for menus when using keyboard navigation

	// Properly update the ARIA states on focus (keyboard) and mouse over events
	$( 'nav > ul' ).on( 'focus.wparia  mouseenter.wparia', '[aria-haspopup="true"]', function ( ev ) {
		$( ev.currentTarget ).attr( 'aria-expanded', true );
	} );

	// Properly update the ARIA states on blur (keyboard) and mouse out events
	$( 'nav > ul' ).on( 'blur.wparia  mouseleave.wparia', '[aria-haspopup="true"]', function ( ev ) {
		$( ev.currentTarget ).attr( 'aria-expanded', false );
	} );
} );