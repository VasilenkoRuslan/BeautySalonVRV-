$(document).ready(function () {
	if ($('.FBI_page').length > 0) {
		$('.FBI_page .office-items select').change(function () {
			let office = $(this).val();

			if (office === 'false') {
				return '';
			}

			$.ajax({
				url: themeVars.ajaxurl,
				method: "GET",
				data: 'action=get_fbi_data&field_offices=' + office,
				beforeSend: () => {
					$('.FBI_page .fbi_results .error_message').hide();
					$('.FBI_page .fbi_results .load_spin').show();
				},
				success: function (data) {/* функция которая будет выполнена после успешного запроса.  */
					$('.list_of_prisoners').empty();
					$('.pagination-block .pagination').empty();
					if (data.status === 'success') {
						let list = data.result;

						$('.FBI_page .fbi_results .list_of_prisoners').append(list).show(200);
						$('.pagination-block .pagination').append(data.pages);
					} else {
						let error_message = data.error;
						$('.FBI_page .fbi_results .error_message').text(error_message).show(300);
					}
					$('.FBI_page .fbi_results .load_spin').hide();
				},
			})
		})

		$('.FBI_page .fbi_results .pagination-block .pagination.page-numbers').on('click','li', function () {

			if ($(this).hasClass('current')) {
				return '';
			}

			$.ajax({
				url: themeVars.ajaxurl,
				type: 'GET',
				data: 'action=get_fbi_data&field_offices=' + $('.FBI_page .office-items select').val() + '&page=' + $(this).data('page'),
				beforeSend: () => {
					$('.FBI_page .fbi_results .error_message').hide();
				},
				success: function (data) {
					$('.list_of_prisoners').empty();
					$('.FBI_page .fbi_results .list_of_prisoners').append(data.result);
					$('.FBI_page .fbi_results .load_spin').hide();
					$('.pagination.page-numbers > li').removeClass('current');
					$(this).addClass('current');
					$('html, body').animate({
						scrollTop: $('.FBI_page').offset().top,
					}, 1000);
				},
			});
		});
	}
})

