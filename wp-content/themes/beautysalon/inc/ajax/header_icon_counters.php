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
	global $yith_woocompare;
	$total_compare_products = count($yith_woocompare->obj->products_list);

	$output = array(
		'.header_compare .badge'=> $total_compare_products
	);

	echo json_encode($output);
	die();
}

add_action("wp_ajax_get_compare_count", 'get_compare_count');
add_action("wp_ajax_nopriv_get_compare_count", 'get_compare_count');
