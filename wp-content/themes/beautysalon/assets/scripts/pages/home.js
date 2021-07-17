$(document).ready(function () {

	if ($('.filters-container').length > 0) {
		let url_s = window.location.href;
		let button_reset_filter = $('.reset-filters');
		if (url_s === window.location.origin+'/') {
			button_reset_filter.hide();
		} else {
			button_reset_filter.show();
		}
	}
});
