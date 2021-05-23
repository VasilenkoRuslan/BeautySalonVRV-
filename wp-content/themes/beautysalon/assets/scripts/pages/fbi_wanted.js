$(document).ready(function () {
	if ($('.FBI_page').length > 0) {

		$('.office-items select').change(function () {
			console.log(themeVars.ajaxurl);
			$.ajax({
				url: themeVars.ajaxurl,
				dataType: 'json',
				method: "GET",
				data: {
					action: 'get_fbi_data',
				},
				success: function(data){   /* функция которая будет выполнена после успешного запроса.  */
					console.log(data);            /* В переменной data содержится ответ от index.php. */
				},
			})
		})
	}
})
