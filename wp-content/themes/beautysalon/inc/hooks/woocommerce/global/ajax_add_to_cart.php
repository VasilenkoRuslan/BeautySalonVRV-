<?php

function custom_add_to_cart_handler() {
	if( isset($_POST['form_data']['product_id']) && isset($_POST['form_data']) ) {
		$product_id = $_POST['form_data']['product_id'];

		$variation = $cart_item_data = $custom_data = array(); // Initializing
		$variation_id = 0; // Initializing

		foreach( $_POST['form_data'] as $values ) {
			if ( strpos( $values['name'], 'attributes_' ) !== false ) {
				$variation[$values['name']] = $values['value'];
			} elseif ( $values['name'] === 'quantity' ) {
				$quantity = $values['value'];
			} elseif ( $values['name'] === 'variation_id' ) {
				$variation_id = $values['value'];
			} elseif ( $values['name'] !== 'add_to_cart' ) {
				$custom_data[$values['name']] = esc_attr($values['value']);
			}
		}

		$product = wc_get_product( ($variation_id) ? $variation_id : $product_id );

		// Allow product custom fields to be added as custom cart item data from $custom_data additional array variable
		$cart_item_data = (array) apply_filters( 'woocommerce_add_cart_item_data', $cart_item_data, $product_id, $variation_id, $quantity, $custom_data );

		// Add to cart
		$cart_item_key = WC()->cart->add_to_cart( $product_id, $quantity, $variation_id, $variation, $cart_item_data );

		if ( $cart_item_key) {
			// Add to cart successful notice
			wc_add_notice( sprintf(
				'<a href="%s" class="button wc-forward">%s</a> %d &times; "%s" %s' ,
				wc_get_cart_url(),
				__("View cart", "woocommerce"),
				$quantity,
				$product->get_name(),
				__("has been added to your cart", "woocommerce")
			) );
		}

		wc_print_notices(); // Return printed notices to jQuery response.
		wp_die();
	}
}

add_action( 'wc_ajax_custom_add_to_cart', 'custom_add_to_cart_handler' );
add_action( 'wc_ajax_nopriv_custom_add_to_cart', 'custom_add_to_cart_handler' );
