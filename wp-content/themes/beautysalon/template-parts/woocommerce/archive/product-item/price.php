
<?php
global $product;

if ( $price_html = $product->get_price_html() ) : ?>
	<?php echo $price_html; ?>
<?php endif;
