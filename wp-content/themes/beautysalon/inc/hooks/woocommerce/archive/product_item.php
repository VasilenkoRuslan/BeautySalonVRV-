<?php
/* remove default link product  wrapper */
remove_action('woocommerce_before_shop_loop_item', 'woocommerce_template_loop_product_link_open', 10);
remove_action('woocommerce_after_shop_loop_item', 'woocommerce_template_loop_product_link_close', 5);
remove_action('woocommerce_before_shop_loop_item_title', 'woocommerce_template_loop_product_thumbnail', 10);

/* Custom product thumbnail */
function custom_product_item_loop_thumbnail () {
	get_template_part('template-parts/woocommerce/archive/product-item/image');
}
add_action('woocommerce_before_shop_loop_item_title', 'custom_product_item_loop_thumbnail', 11);

/* Custom product title */
function custom_product_item_loop_title () {
	get_template_part('template-parts/woocommerce/archive/product-item/title');
}
remove_action('woocommerce_shop_loop_item_title', 'woocommerce_template_loop_product_title', 10);
add_action('woocommerce_shop_loop_item_title', 'custom_product_item_loop_title', 12);

/* change location btn-add-to-cart */
remove_action('woocommerce_after_shop_loop_item', 'woocommerce_template_loop_add_to_cart', 10);
add_action('woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_add_to_cart', 15);

/* add element overlay */
function custom_product_item_loop_block_overlay () {
	get_template_part('template-parts/woocommerce/archive/product-item/product-overlay');
}
add_action('woocommerce_after_shop_loop_item_title', 'custom_product_item_loop_block_overlay', 20);

/* change location price */
function custom_product_item_loop_price () {
	get_template_part('template-parts/woocommerce/archive/product-item/price');
}
remove_action('woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_price', 10);
add_action('woocommerce_shop_loop_item_title', 'custom_product_item_loop_price', 10);

function custom_product_item_loop_buttons_wishlist_and_compare () {
	?>
		<div class="choose">
			<ul class="nav nav-pills nav-justified">
				<?php get_template_part('template-parts/woocommerce/archive/product-item/btn-add-to-wishlist'); ?>
				<?php get_template_part('template-parts/woocommerce/archive/product-item/btn-add-to-compare'); ?>
			</ul>
		</div>
<?php	}

add_action('woocommerce_after_shop_loop_item', 'custom_product_item_loop_buttons_wishlist_and_compare', 10);
