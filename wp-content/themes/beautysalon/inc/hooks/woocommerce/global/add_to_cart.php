<?php

function add_to_cart_ajaxify ( $fragments ){

	/* minicart fragments */
	ob_start();
	woocommerce_mini_cart();
	$mini_cart = ob_get_contents();
	ob_end_clean();
	$fragments['.minicart'] = $mini_cart;

	/* total products in cart & total sum */
	$cart_data = wc()->cart;

	$cart_total_price = $cart_data->get_total();
	$cart_total_products = $cart_data->get_cart_contents_count();

	$fragments['.cart-icons .badge.atc'] = '<span class="badge atc">'.$cart_total_products.'</span>';
	$fragments['.cart-total-price .cart_total'] = '<span class="cart_total">'.$cart_total_price.'</span>';

	return $fragments;
}

add_filter( 'woocommerce_add_to_cart_fragments', 'add_to_cart_ajaxify' );
