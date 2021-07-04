$(document).ready(function() {

	if($('.team_page').length > 0) {
		// Click on department link
		$('.team_departments a').click(function() {

			// Если текущая ссылка содержит класс active, то прекращаем выполнение кода
			if($(this).hasClass('active')) {
				return false;
			}

			// Get department id from link data attribute
			let department_id = $(this).data('department');

			// Remove previous active department link
			$('.team_departments a.active').removeClass('active');

			// Display current department link
			$(this).addClass('active');

		if(department_id === 'all') {

			// Hide previous active department list
			$('.dep-block').addClass('active');

			return false;

		}

			// Hide previous active department list
			$('.dep-block.active').removeClass('active');

			// Display current department list
			$('.dep-block[data-department="'+ department_id +'"]').addClass('active');

			return false;
		});
	}

});
