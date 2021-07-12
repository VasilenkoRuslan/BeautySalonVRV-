<?php
?>
<div class="container archive">
	<div class="row">
		<?php get_sidebar('store'); ?>

		<div class="col-sm-9 padding-right">
			<?php if (apply_filters('woocommerce_show_page_title', true)) : ?>

				<h1 class="page-title"><?php woocommerce_page_title(); ?></h1>

			<?php endif;

			/**
			 * Hook: woocommerce_archive_description.
			 *
			 * @hooked woocommerce_taxonomy_archive_description - 10
			 * @hooked woocommerce_product_archive_description - 10
			 */
			do_action('woocommerce_archive_description');

			if (woocommerce_product_loop()) :
				/**
				 * Hook: woocommerce_before_shop_loop.
				 *
				 * @hooked woocommerce_output_all_notices - 10
				 * @hooked wc_setup_loop - 10
				 * @hooked woocommerce_result_count - 20
				 * @hooked woocommerce_catalog_ordering - 30
				 * @hooked custom_show_product_subcategories - 40
				 */
				do_action('woocommerce_before_shop_loop'); ?>

				<?php woocommerce_product_loop_start(); ?>

				<?php if (wc_get_loop_prop('total')) : ?>
				<?php while (have_posts()) : ?>
					<?php the_post(); ?>
					<?php wc_get_template_part('content', 'product'); ?>
				<?php endwhile; ?>
			<?php endif; ?>

				<?php woocommerce_product_loop_end();
				/**
				 * Hook: woocommerce_after_shop_loop.
				 *
				 * @hooked woocommerce_pagination - 10
				 * @hooked woocommerce_reset_loop - 999
				 */
				do_action('woocommerce_after_shop_loop'); ?>

			<?php
			else :

				/**
				 * Hook: woocommerce_no_products_found.
				 *
				 * @hooked wc_no_products_found - 10
				 */
				do_action('woocommerce_no_products_found');
			endif; ?>
		</div>
	</div>
</div>
