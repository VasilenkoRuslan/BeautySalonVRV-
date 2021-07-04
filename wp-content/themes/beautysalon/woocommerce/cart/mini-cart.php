<?php
/**
 * Mini-cart
 *
 * Contains the markup for the mini-cart, used by the cart widget.
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/cart/mini-cart.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 5.2.0
 */

defined('ABSPATH') || exit;

do_action('woocommerce_before_mini_cart'); ?>


<?php if (!WC()->cart->is_empty()) : ?>

	<div class="minicart">
		<div class="cart-close">
			<i class="fa fa-close"></i>
		</div>

		<div class="cart-toggle">
			<i class="fa fa-shopping-cart"></i>
		</div>

		<div class="minicart-title">
			<h2>
				<?php _e('Your minicart list products', 'beautysalon'); ?>
			</h2>
			<hr>
		</div>

		<ul class="woocommerce-mini-cart cart_list product_list_widget <?php echo esc_attr($args['list_class']); ?>">
			<?php
			do_action('woocommerce_before_mini_cart_contents');

			foreach (WC()->cart->get_cart() as $cart_item_key => $cart_item) {
				$_product = apply_filters('woocommerce_cart_item_product', $cart_item['data'], $cart_item, $cart_item_key);
				$product_id = apply_filters('woocommerce_cart_item_product_id', $cart_item['product_id'], $cart_item, $cart_item_key);
				if ($_product && $_product->exists() && $cart_item['quantity'] > 0 && apply_filters('woocommerce_widget_cart_item_visible', true, $cart_item, $cart_item_key)) {
					$product_name = apply_filters('woocommerce_cart_item_name', $_product->get_name(), $cart_item, $cart_item_key);
					$thumbnail = apply_filters('woocommerce_cart_item_thumbnail', $_product->get_image(), $cart_item, $cart_item_key);
					$product_price = apply_filters('woocommerce_cart_item_price', WC()->cart->get_product_price($_product), $cart_item, $cart_item_key);
					$product_permalink = apply_filters('woocommerce_cart_item_permalink', $_product->is_visible() ? $_product->get_permalink($cart_item) : '', $cart_item, $cart_item_key);
					?>
					<li class="minicart--item">

						<a href="<?php echo $product_permalink; ?>"
						   class="minicart-prod-image"><?php echo $thumbnail; ?></a>

						<div class="minicart--item-content">

							<h1 class="title"><?php echo $product_name; ?></h1>
<!---->
<!--							<p class="material">-->
<!--								<span style="font-weight: 600">Material:</span>-->
<!--								Copper-->
<!--							</p>-->
<!---->
<!--							<p class='size'>-->
<!--								<span style='font-weight: 600'>Size:</span>-->
<!--								6 1/2-->
<!--							</p>-->

							<p class='price'><?php echo apply_filters('woocommerce_widget_cart_item_quantity', '<span class="quantity">' . sprintf('%s &times; %s', $cart_item['quantity'], $product_price) . '</span>', $cart_item, $cart_item_key); ?>
							</p>
							<?php
							echo apply_filters(
									'woocommerce_cart_item_remove_link',
									sprintf(
											'<a href="%s" class="remove remove_from_cart_button" aria-label="%s" data-product_id="%s" data-cart_item_key="%s" data-product_sku="%s">&times;</a>',
											esc_url(wc_get_cart_remove_url($cart_item_key)),
											esc_attr__('Remove this item', 'woocommerce'),
											esc_attr($product_id),
											esc_attr($cart_item_key),
											esc_attr($_product->get_sku())
									),
									$cart_item_key
							);
							?>
						</div>
					</li>
					<hr>
					<?php
				}
			}

			do_action('woocommerce_mini_cart_contents');
			?>
		</ul>

		<p class="woocommerce-mini-cart__total total">
			<?php
			/**
			 * Hook: woocommerce_widget_shopping_cart_total.
			 *
			 * @hooked beauty_subtotal_mini_cart - 10
			 */
			do_action('woocommerce_widget_shopping_cart_total');
			?>
		</p>

		<?php do_action('woocommerce_widget_shopping_cart_before_buttons'); ?>

		<p class="woocommerce-mini-cart__buttons buttons"><?php do_action('woocommerce_widget_shopping_cart_buttons'); ?></p>

		<?php do_action('woocommerce_widget_shopping_cart_after_buttons'); ?>

	</div>

<?php else : ?>
	<div class="minicart">
		<div class="cart-close">
			<i class="fa fa-close"></i>
		</div>

		<div class="cart-toggle">
			<i class="fa fa-shopping-cart"></i>
		</div>
		<div class="minicart-title">

			<p class="woocommerce-mini-cart__empty-message"><?php esc_html_e('No products in the cart.', 'woocommerce'); ?></p>

			<hr>
		</div>
	</div>
<?php endif; ?>

<?php do_action('woocommerce_after_mini_cart'); ?>


