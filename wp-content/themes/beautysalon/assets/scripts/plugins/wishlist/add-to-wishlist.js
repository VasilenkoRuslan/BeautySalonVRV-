(function ($) {

	function ajax_get_wishlist_count () {
		$.ajax({
			url: themeVars.ajaxurl,
			type: 'get',
			dataType: 'json',
			data: {
				action: 'get_wishlist_count',
			},
			success: function (data) {
				if ( ! data ) {
					return;
				}
				$.each(data, function (key, value) {
					$(key).empty().append(value);

					sessionStorage.setItem('wishlist_count', value);
				});

			},
		});
	}
	let wishlist_count = sessionStorage.getItem('wishlist_count');
	if (wishlist_count == null) {
		ajax_get_wishlist_count();
	} else {
		$('.header_heart_count .badge').text(wishlist_count);
	}

	$(document).on( 'added_to_wishlist removed_from_wishlist', function() {
		ajax_get_wishlist_count();
	});


})(jQuery);
