(function ($) {

	function ajax_get_compare_count () {
		$.ajax({
			url: themeVars.ajaxurl,
			type: 'get',
			dataType: 'json',
			data: {
				action: 'get_compare_count',
			},
			success: function (data) {
				if ( ! data ) {
					return;
				}
				$.each(data, function (key, value) {
					$(key).empty().append(value);

					sessionStorage.setItem('compare_count', value);
				});

			},
		});
	}
	let compare_count = sessionStorage.getItem('compare_count');
	if (compare_count == null) {
		ajax_get_compare_count();
	} else {
		$('.header_compare .badge').text(compare_count);
	}

	$(document).on('yith_woocompare_open_popup', function() {
		ajax_get_compare_count();
	});
	$(document).on('yith_woocompare_product_removed', function() {
		ajax_get_compare_count();
	});

})(jQuery);
