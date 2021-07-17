<?php
$q_obj = get_queried_object();
$q_taxonomy = (!empty($q_obj)) ? $q_obj->taxonomy : null;
$q_slug = (!empty($q_obj)) ? $q_obj->slug : null;
$q_archive = (!empty($q_obj)) ? $q_obj->has_archive : null;
$q_home = (!empty($q_obj)) ? $q_obj->post_name : null;

$product_filters = null;

$product_filters_price = do_shortcode('[br_filter_single filter_id=700]');
?>
<div class="col-sm-3">
	<div class="left-sidebar">
		<?php if ($q_home === 'home') { ?>
		<h2><?php _e('Category', 'beautysalon'); ?></h2>
		<?php } else { ?>
		<h2><?php _e('Sidebar store', 'beautysalon'); ?></h2>
		<?php } ?>
			<?php if ((($q_taxonomy === 'product_cat') && ($q_slug === 'perfumery')) ||
					($q_archive === 'catalog') ||
					(($q_taxonomy === 'product_cat') && ($q_slug === 'perfumery_for_men')) ||
					(($q_taxonomy === 'product_cat') && ($q_slug === 'perfumery_for_women'))) {
				$product_filter_was_born = do_shortcode('[yith_wcan_filters slug="draft-preset"]');
				$product_filter_country = do_shortcode('[yith_wcan_filters slug="draft-preset-3"]');
				$product_filter_classification = do_shortcode('[yith_wcan_filters slug="draft-preset-6"]');
				?>
							<?php echo $product_filter_was_born; ?>
							<?php echo $product_filter_country; ?>
							<?php echo $product_filter_classification; ?>
			<?php }
			if ((($q_taxonomy === 'product_cat') && ($q_slug === 'cosmetics')) ||
					($q_archive === 'catalog') ||
					(($q_taxonomy === 'product_cat') && ($q_slug === 'face_cosmetics')) ||
					(($q_taxonomy === 'product_cat') && ($q_slug === 'hair_cosmetics'))) {
				$product_filter_year_old = do_shortcode('[yith_wcan_filters slug="draft-preset-2"]');
				$product_filter_size = do_shortcode('[yith_wcan_filters slug="draft-preset-4"]');
				$product_filter_classification2 = do_shortcode('[yith_wcan_filters slug="draft-preset-5"]');
				?>
							<?php echo $product_filter_year_old; ?>
							<?php echo $product_filter_size ?>
							<?php echo $product_filter_classification2; ?>
			<?php } ?>

		<?php if ($q_home === 'home') {
			$product_filter_was_born = do_shortcode('[yith_wcan_filters slug="draft-preset"]');
			$product_filter_country = do_shortcode('[yith_wcan_filters slug="draft-preset-3"]');
			$product_filter_classification = do_shortcode('[yith_wcan_filters slug="draft-preset-6"]');
			$product_filter_year_old = do_shortcode('[yith_wcan_filters slug="draft-preset-2"]');
			$product_filter_size = do_shortcode('[yith_wcan_filters slug="draft-preset-4"]');
			?>
		<?php echo $product_filter_was_born; ?>
		<?php echo $product_filter_country; ?>
		<?php echo $product_filter_classification; ?>
		<?php echo $product_filter_year_old; ?>
		<?php echo $product_filter_size ?>
		<?php } ?>

			<?php //echo $product_filters_price; ?>
	</div>
</div>

