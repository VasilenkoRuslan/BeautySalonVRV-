<?php
add_filter('woocommerce_product_single_add_to_cart_text',
	'wh_single_beauty_cart_button_text');

function wh_single_beauty_cart_button_text()
{
	return __('Add to cart', 'woocommerce');
}
