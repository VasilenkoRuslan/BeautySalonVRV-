<?php
// remove the subcategories from the product loop
remove_filter( 'woocommerce_product_loop_start', 'woocommerce_maybe_show_product_subcategories' );

// add subcategories before the product loop (yet after catalog_ordering and result_count -> see priority 40)

function custom_show_product_subcategories() {
	$subcategories = woocommerce_maybe_show_product_subcategories();
	if ($subcategories) {
		echo '<div class="subcategories"><ul class="subcategories_list">',$subcategories,'</ul></div>';
	}
}

add_action( 'woocommerce_before_shop_loop', 'custom_show_product_subcategories', 40 );
