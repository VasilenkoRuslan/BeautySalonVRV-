<?php
global $product;

$id = $product->get_id();

?>
<li>
	<a href="#" class="compare btn-compare" data-product_id="<?php echo $id; ?>" rel="nofollow" style="zoom: 1;">
	<?php echo get_option( 'yith_woocompare_button_text', __( 'Compare', 'yith-woocommerce-compare' ) ); ?>
	</a>
</li>
