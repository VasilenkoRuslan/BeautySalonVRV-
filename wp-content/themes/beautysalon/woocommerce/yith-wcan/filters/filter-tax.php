<?php
/**
 * Filters Tax template
 *
 * @author  YITH
 * @package YITH WooCommerce Ajax Product Filter
 * @version 4.0.0
 */

/**
 * Variables available for this template:
 *
 * @var $preset YITH_WCAN_Preset
 * @var $filter YITH_WCAN_Filter_Tax
 * @var $term WP_Term
 */

if (!defined('YITH_WCAN')) {
	exit;
} // Exit if accessed directly
?>

<?php if ($filter->has_relevant_terms()) : ?>
	<div
			class="yith-wcan-filter <?php echo esc_attr($filter->get_additional_classes()); ?>"
			id="filter_<?php echo esc_attr($preset->get_id()); ?>_<?php echo esc_attr($filter->get_id()); ?>"
			data-filter-type="<?php echo esc_attr($filter->get_type()); ?>"
			data-filter-id="<?php echo esc_attr($filter->get_id()); ?>"
			data-taxonomy="<?php echo esc_attr($filter->get_formatted_taxonomy()); ?>"
			data-multiple="<?php echo esc_attr($filter->is_multiple_allowed() ? 'yes' : 'no'); ?>"
			data-relation="<?php echo esc_attr($filter->get_relation()); ?>"
	>
		<div class="panel panel-default">
			<div class="panel-heading">
				<h4 class="panel-title">
					<a data-toggle="collapse"
					   href="#preset-<?php echo esc_attr($preset->get_id()); ?>">
						<span class="badge pull-right"><i class="fa fa-plus"></i></span>
						<?php echo $filter->render_title(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
					</a>
				</h4>
			</div>
			<div id="preset-<?php echo esc_attr($preset->get_id()); ?>" class="panel-collapse collapse">
				<div class="panel-body">
					<div class="filter-content">
						<?php echo $filter->render_start(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>

						<?php
						foreach ($filter->get_formatted_terms() as $term_id => $term_options) :
							echo $filter->render_item($term_id, $term_options); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
						endforeach;
						?>

						<?php echo $filter->render_end(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
					</div>
				</div>
				<?php
				$button_class = apply_filters( 'yith_wcan_filter_reset_button_class', 'btn btn-primary yith-wcan-reset-filters reset-filters' );
				?>
				<button class="<?php echo $button_class; ?>">
					<?php echo esc_html( apply_filters( 'yith_wcan_filter_button', _x( 'Reset filters', '[FRONTEND] Reset button for preset shortcode', 'yith-woocommerce-ajax-navigation' ) ) ); ?>
				</button>
			</div>
		</div>
	</div>
<?php endif; ?>
