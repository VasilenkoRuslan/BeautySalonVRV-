<?php
function get_wishlist_count()
{
	$output = array(
		'.header_heart_count .badge'=> yith_wcwl_count_all_products()
	);

	echo json_encode($output);
	die();
}

add_action("wp_ajax_get_wishlist_count", 'get_wishlist_count');
add_action("wp_ajax_nopriv_get_wishlist_count", 'get_wishlist_count');

function get_compare_count()
{
	$compared_products = $_COOKIE['yith_woocompare_list'];
	$compared_products_count = count(json_decode($compared_products));

		$output = array(
		'.header_compare .badge'=> $compared_products_count
	);

	echo json_encode($output);
	die();
}

add_action("wp_ajax_get_compare_count", 'get_compare_count');
add_action("wp_ajax_nopriv_get_compare_count", 'get_compare_count');
