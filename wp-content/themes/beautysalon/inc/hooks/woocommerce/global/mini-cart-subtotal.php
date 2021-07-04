<?php
function beauty_subtotal_mini_cart () {
	$txt_subtotal = __('Subtotal', 'beautysalon');
	$total_price = WC()->cart->get_cart_subtotal();
	$html_subtotal = <<<HTML
		<div class='minicart--subtotal'>
			<p class='minicart--subtotal-title'>{$txt_subtotal}:</p>
			<p class='minicart--subtotal-amount'>{$total_price}</p>
		</div>
HTML;
	echo $html_subtotal;
}

remove_action('woocommerce_widget_shopping_cart_total', 'woocommerce_widget_shopping_cart_subtotal', 10);
add_action('woocommerce_widget_shopping_cart_total', 'beauty_subtotal_mini_cart', 10);

