$(document).ready(function () {

	if ($('.my-account-tab-menu').length > 0) {
		let main_page = $('.my-account-tab-menu a[href="'+window.location.href+'"]');
		main_page.addClass('active');
		main_page.click(function(e) {
			e.preventDefault();
			return false;
		});
	}
});
