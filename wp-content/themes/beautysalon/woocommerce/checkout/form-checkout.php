<?php
/**
 * Checkout Form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/checkout/form-checkout.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.5.0
 */

if (!defined('ABSPATH')) {
	exit;
}

/*
 * hooked: woocommerce_checkout_login_form - 10
 * hooked: woocommerce_output_all_notices - 10
 */
do_action('woocommerce_before_checkout_form', $checkout);

// If checkout registration is disabled and not logged in, the user cannot checkout.
if (!$checkout->is_registration_enabled() && $checkout->is_registration_required() && !is_user_logged_in()) {
	echo esc_html(apply_filters('woocommerce_checkout_must_be_logged_in_message', __('You must be logged in to checkout.', 'woocommerce')));
	return;
}

?>
<div class="shopper-informations">
	<div class="row">
		<form name="checkout" method="post" class="checkout woocommerce-checkout"
			  action="<?php echo esc_url(wc_get_checkout_url()); ?>" enctype="multipart/form-data">

			<?php if ($checkout->get_checkout_fields()) : ?>

				<?php do_action('woocommerce_checkout_before_customer_details'); ?>

				<div class="col2-set" id="customer_details">
					<div class="col-1">
						<?php do_action('woocommerce_checkout_billing'); ?>
					</div>

					<div class="col-2">
						<?php do_action('woocommerce_checkout_shipping'); ?>
					</div>
				</div>

				<?php do_action('woocommerce_checkout_after_customer_details'); ?>

			<?php endif; ?>

			<?php do_action('woocommerce_checkout_before_order_review_heading'); ?>
		</form>
			<h2 id="order_review_heading"><?php esc_html_e('Review & Payment', 'woocommerce'); ?></h2>

		<form class="woocommerce-cart-form" action="<?php echo esc_url(wc_get_checkout_url()); ?>" method="post"
			  id="data">
			<div class="table-responsive cart_info">
				<?php do_action('woocommerce_checkout_before_order_review'); ?>
				<table class="table table-condensed shop_table shop_table_responsive cart woocommerce-cart-form__contents"
					   cellspacing="0">
					<thead>
					<tr class="cart_menu">
						<th class="image product-thumbnail"><?php esc_html_e('Item', 'beautysalon'); ?></th>
						<th class="description product-name">&nbsp</th>
						<th class="price product-price"><?php esc_html_e('Price', 'woocommerce'); ?></th>
						<th class="quantity product-quantity"><?php esc_html_e('Quantity', 'woocommerce'); ?></th>
						<th class="total product-subtotal"><?php esc_html_e('Total', 'beautysalon'); ?></th>
						<th class="product-remove">&nbsp</th>
					</tr>
					</thead>
					<tbody>
					<?php do_action('woocommerce_before_cart_contents'); ?>

					<?php
					foreach (WC()->cart->get_cart() as $cart_item_key => $cart_item) {
						$_product = apply_filters('woocommerce_cart_item_product', $cart_item['data'], $cart_item, $cart_item_key);
						$product_id = apply_filters('woocommerce_cart_item_product_id', $cart_item['product_id'], $cart_item, $cart_item_key);

						if ($_product && $_product->exists() && $cart_item['quantity'] > 0 && apply_filters('woocommerce_cart_item_visible', true, $cart_item, $cart_item_key)) {
							$product_permalink = apply_filters('woocommerce_cart_item_permalink', $_product->is_visible() ? $_product->get_permalink($cart_item) : '', $cart_item, $cart_item_key);
							?>
							<tr class="woocommerce-cart-form__cart-item <?php echo esc_attr(apply_filters('woocommerce_cart_item_class', 'cart_item', $cart_item, $cart_item_key)); ?>">


								<td class="cart_product product-thumbnail">
									<?php
									$thumbnail = apply_filters('woocommerce_cart_item_thumbnail', $_product->get_image(), $cart_item, $cart_item_key);

									if (!$product_permalink) {
										echo $thumbnail; // PHPCS: XSS ok.
									} else {
										printf('<a href="%s">%s</a>', esc_url($product_permalink), $thumbnail); // PHPCS: XSS ok.
									}
									?>
								</td>

								<td class="cart_description product-name"
									data-title="<?php esc_attr_e('Product', 'woocommerce'); ?>">
									<h4>
										<?php
										if (!$product_permalink) {
											echo wp_kses_post(apply_filters('woocommerce_cart_item_name', $_product->get_name(), $cart_item, $cart_item_key) . '&nbsp;');
										} else {
											echo wp_kses_post(apply_filters('woocommerce_cart_item_name', sprintf('<a href="%s">%s</a>', esc_url($product_permalink), $_product->get_name()), $cart_item, $cart_item_key));
										}

										do_action('woocommerce_after_cart_item_name', $cart_item, $cart_item_key);

										// Meta data.
										echo wc_get_formatted_cart_item_data($cart_item); // PHPCS: XSS ok.

										// Backorder notification.
										if ($_product->backorders_require_notification() && $_product->is_on_backorder($cart_item['quantity'])) {
											echo wp_kses_post(apply_filters('woocommerce_cart_item_backorder_notification', '<p class="backorder_notification">' . esc_html__('Available on backorder', 'woocommerce') . '</p>', $product_id));
										}
										?>
									</h4>
									<p><?php _e('Web ID:', 'beautysalon'); ?><?php echo $_product->get_sku(); ?></p>
								</td>

								<td class="cart_price product-price"
									data-title="<?php esc_attr_e('Price', 'woocommerce'); ?>">
									<p>
										<?php
										echo apply_filters('woocommerce_cart_item_price', WC()->cart->get_product_price($_product), $cart_item, $cart_item_key); // PHPCS: XSS ok.
										?>
									</p>
								</td>

								<td class="cart_quantity product-quantity"
									data-title="<?php esc_attr_e('Quantity', 'woocommerce'); ?>">
									<?php
									if ($_product->is_sold_individually()) {
										$product_quantity = sprintf('1 <input type="hidden" name="cart[%s][qty]" value="1" />', $cart_item_key);
									} else {
										$product_quantity = woocommerce_quantity_input(
												array(
														'input_name' => "cart[{$cart_item_key}][qty]",
														'input_value' => $cart_item['quantity'],
														'max_value' => $_product->get_max_purchase_quantity(),
														'min_value' => '0',
														'product_name' => $_product->get_name(),
												),
												$_product,
												false
										);
									}

									echo apply_filters('woocommerce_cart_item_quantity', $product_quantity, $cart_item_key, $cart_item); // PHPCS: XSS ok.
									?>
								</td>

								<td class="cart_total product-subtotal"
									data-title="<?php esc_attr_e('Subtotal', 'woocommerce'); ?>">
									<p class="cart_total_price">
										<?php
										echo apply_filters('woocommerce_cart_item_subtotal', WC()->cart->get_product_subtotal($_product, $cart_item['quantity']), $cart_item, $cart_item_key); // PHPCS: XSS ok.
										?>
									</p>
								</td>

								<td class="cart_delete product-remove">
									<?php
									echo apply_filters( // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
											'woocommerce_cart_item_remove_link',
											sprintf(
													'<a href="%s" class="cart_quantity_delete" aria-label="%s" data-product_id="%s" data-product_sku="%s"><i class="fa fa-times"></i></a>',
													esc_url(wc_get_cart_remove_url($cart_item_key)),
													esc_html__('Remove this item', 'woocommerce'),
													esc_attr($product_id),
													esc_attr($_product->get_sku())
											),
											$cart_item_key
									);
									?>
								</td>
							</tr>
							<?php
						}
					}
					?>

					<?php do_action('woocommerce_cart_contents'); ?>
					<tr>
						<td colspan="6" class="actions">
							<button type="submit" class="button" name="update_cart"
									value="<?php esc_attr_e('Update cart', 'woocommerce'); ?>"><?php esc_html_e('Update cart', 'woocommerce'); ?></button>
						</td>
					</tr>
					<tr>
						<td colspan="4">&nbsp;</td>
						<td colspan="2">
							<?php
							/*
							* hooked: woocommerce_order_review - 10
							* hooked: woocommerce_checkout_payment - 20
							*/;
							do_action('woocommerce_checkout_order_review');
							?>
						</td>
					</tr>
					</tbody>
				</table>
			</div>
		</form>
		<?php do_action('woocommerce_checkout_after_order_review'); ?>
	</div>
</div>

<?php do_action('woocommerce_after_checkout_form', $checkout); ?>
