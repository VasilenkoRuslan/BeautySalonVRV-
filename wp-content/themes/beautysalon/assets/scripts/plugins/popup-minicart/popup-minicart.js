/* global wc_add_to_cart_params */
/*
 * Plugin: offcanvas-mobile-menu
 * https://github.com/jaynoe/offcanvas-mobile-menu
 */
(function ($) {

	$.fn.offcanvasmenu = function (options) {

		// Default options
		options = $.extend({
			menuTrigger: "trigger",
			position: "right",
			speed: "0.3",
			width: "30vw",
			fixedContainer: false,
			fixedContainerName: "",
		}, options);

		// Build the vars
		// Containers:
		var canvas = $(this);
		var trigger = $("#" + options.menuTrigger);
		var body = $("body");
		var link = canvas.find("a");
		var pos = options.position;
		var fc = $("#" + options.fixedContainerName);

		// inline styles
		// for body
		body.css({
			"-webkit-transition": "all " + options.speed + "s ease-in-out",
			"transition": "all " + options.speed + "s ease-in-out",
			"position": "relative",
		})
		// for offcanvas:
		canvas.css({
			"-webkit-transition": "all " + options.speed + "s ease-in-out",
			"transition": "all " + options.speed + "s ease-in-out",
			"width": options.width,
			"display": "block",
		});
		// for fixedContainer
		if (options.fixedContainer === true) {
			fc.css({
				"-webkit-transition": "all " + options.speed + "s ease-in-out",
				"transition": "all " + options.speed + "s ease-in-out",
			})
		}

		// check position
		if (pos === "right") {
			body.css("left", "0");
			canvas.css({
				"right": "0",
				"-webkit-transform": "translate(" + options.width + ", 0)",
				"transform": "translate(" + options.width + ", 0)",
			});
			fc.css("left", "0");
		} else {
			body.css("right", "0");
			canvas.css({
				"left": "0",
				"-webkit-transform": "translate(-" + options.width + ", 0)",
				"transform": "translate(-" + options.width + ", 0)",
			});
			fc.css("right", "0");
		}

		// function out & hide
		function canvasOut() {
			$("#offcanvas").css({
				"-webkit-transform": "translate(0, 0)",
				"transform": "translate(0, 0)",
			});

			if (pos === "right") {
				body.css("left", "-" + options.width);
				fc.css("left", "-" + options.width);
			} else {
				body.css("right", "-" + options.width);
				fc.css("right", "-" + options.width);

			}
		}

		function canvasHide() {

			if (pos === "right") {
				body.css("left", "0");
				$("#offcanvas").css({
					"-webkit-transform": "translate(" + options.width + ", 0)",
					"transform": "translate(" + options.width + ", 0)",
				});
				fc.css("left", "0");
			} else {
				body.css("right", "0");
				$("#offcanvas").css({
					"left": "0",
					"-webkit-transform": "translate(-" + options.width + ", 0)",
					"transform": "translate(-" + options.width + ", 0)",
				});
				fc.css("right", "0");
			}
		}

		// if click on the trigger
		trigger.click(function () {
			canvasOut();
			$('#gray').toggle();
		});

		// if page get response ajaxify function 'added_to_cart'
		$('body').on('added_to_cart', function () {
			canvasOut();
			$('#gray').toggle();
		});

		// close when click on link in menu
		link.click(function () {
			canvasHide();
			$('#gray').toggle();
		});
		// close when click on #gray, .cart-close, .cart-toggle
		$(document).on('click', '#gray, .cart-close, .cart-toggle', function () {
			canvasHide();
			$('#gray').toggle();
		});
	};

})(jQuery);

$("#offcanvas").offcanvasmenu();

/* add to cart at single simple prod page */
$('form.cart').on('submit', function (e) {
	e.preventDefault();

	let obj = $(this),

		prod_id = obj.find('.single_add_to_cart_button').val(),
		form_data = obj.serializeArray();

	if (prod_id !== '') {
		form_data.push({name: 'product_id', value: prod_id});
	}

	if (typeof wc_add_to_cart_params === 'undefined') {
		return false;
	}

	console.log(form_data);

	$.ajax({
		type: 'POST',
		url: wc_add_to_cart_params.wc_ajax_url.toString().replace('%%endpoint%%', 'add_to_cart'),
		data: form_data,
		success: function (response) {
			if ( ! response ) {
				return;
			}

			if ( response.error && response.product_url ) {
				window.location = response.product_url;
				return;
			}

			// Trigger event so themes can refresh other areas.
			$( document.body ).trigger( 'added_to_cart', [ response.fragments, response.cart_hash, obj ] );
		},
		dataType: 'json',
	});
});
