<?php

function beauty_wc_price_html( $price, $product ){
	$regular_price = number_format(intval($product->get_regular_price()), '2', ',', '`');
	$sale_price =$product->get_sale_price();
	$main_price =number_format(intval($product->get_price()), '2', ',', '`');

	$html_old_price = null;
	$type_money = ' '.get_woocommerce_currency_symbol();
	if (!empty($sale_price)) {
		$html_old_price = '  <del><span>'.$regular_price.$type_money.'</span></del>';
	}
		$price = <<<HTML
<p class="total_price"><span>{$main_price}{$type_money}{$html_old_price}</span></p>
HTML;
		return $price;
}
add_filter( 'woocommerce_get_price_html', 'beauty_wc_price_html', 100, 2 );
