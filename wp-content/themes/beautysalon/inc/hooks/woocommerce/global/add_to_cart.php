<?php

function add_to_cart_ajaxify ( $fragments ){
	ob_start();
	woocommerce_mini_cart();
	$mini_cart = ob_get_contents();
	ob_end_clean();
	$fragments['.minicart'] = $mini_cart;

	return $fragments;
}

add_filter( 'woocommerce_add_to_cart_fragments', 'add_to_cart_ajaxify' );
