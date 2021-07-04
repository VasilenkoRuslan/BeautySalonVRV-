<?php
$button_text = get_option( 'yith_woocompare_button_text', __( 'Compare', 'yith-woocommerce-compare' ) );
if (stristr($button_text, '<i class="fa fa-plus-square"></i> ') === false) {
	update_option('yith_woocompare_button_text', '<i class="fa fa-plus-square"></i> '.$button_text);
	$button_text = get_option( 'yith_woocompare_button_text', __( 'Compare', 'yith-woocommerce-compare' ) );
}
