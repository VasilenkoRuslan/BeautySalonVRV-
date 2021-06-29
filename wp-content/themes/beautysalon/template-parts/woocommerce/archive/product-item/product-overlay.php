</div> <!--</div class="productinfo text-center">-->
<div class="product-overlay">
	<div class="overlay-content text-center">
		<?php get_template_part('template-parts/woocommerce/archive/product-item/price'); ?>
		<?php get_template_part('template-parts/woocommerce/archive/product-item/title');  ?>
<!--		<a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>-->
		<?php woocommerce_template_loop_add_to_cart( $args = array(
				'class' => 'btn btn-default add-to-cart',
		)); ?>
	</div>
</div>
