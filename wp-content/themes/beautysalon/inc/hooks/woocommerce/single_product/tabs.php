<?php
/**
 * Add a custom product data tab
 */
function woo_beauty_custom_product_tab($tabs)
{
	global $product;

	$tabs['category_tab'] = array(
		'title' => __('Categories', 'woocommerce'),
		'priority' => 25,
		'callback' => 'woo_categories_by_product_tab_content'
	);

	$is_delivery = $product->get_attribute('pa_delivery');

	if (!empty($is_delivery)) {
		if (strpos($is_delivery, 'from EU') !== false) {
			$tabs['from_EU_tab'] = array(
				'title' => __('from EU', 'woocommerce'),
				'priority' => 32,
				'callback' => 'woo_from_EU_product_tab_content'
			);
		}
	}


	return $tabs;

}

add_filter('woocommerce_product_tabs', 'woo_beauty_custom_product_tab');

function woo_categories_by_product_tab_content()
{
global $product;
	echo wc_get_product_category_list( $product->get_id(), '==> ', '<span class="posted_in">' . _n( 'Category:', 'Categories:', count( $product->get_category_ids() ), 'woocommerce' ) . ' ', '</span>' );
}

function woo_from_EU_product_tab_content()
{
	if (empty($text_from_EU = get_field('single_product_page_custom_text_tub', 'option'))) {
		return "";
	}
	echo '<h2>'.__('Explanation "from EU"','beautysalon').'</h2><p>'.$text_from_EU.'</p>';
}
