<?php
/* Template Name: Contact page */

get_header();

echo get_theme_page_title(get_the_title());

$map = get_field('map');
$html_map = NULL;
if (!empty($map)) {
	$lat = esc_attr($map['lat']);
	$lng = esc_attr($map['lng']);
	$html_map = <<<HTML
<div class="acf-map" data-zoom="16">
	<div class="marker" data-lat="{$lat}" data-lng="{$lng}"></div>
</div>
HTML;
}
?>

	<div class="container">
		<?= $html_map; ?>
	</div>
	<div class="modal fade in" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
		 aria-hidden="true" style="display: block; position: static;">
		<div class="container">
			<div class="row">
				<div class="map">
					<h4 class="modal-title centered" id="myModalLabel">google maps</h4>
				</div>
			</div>
			<div class="modal-body">
				<div class="row centered">
					<p>We are available 24/7, so don't hesitate to contact us.</p>
					<p>
						Somestreet Ave, 987<br/> London, UK.<br/> +44 8948-4343<br/> contact@example.com
					</p>
				</div>
			</div>
			<div class="modal-header">
				<h4 class="modal-title centered" id="myModalLabel">Send message to us!</h4>

			</div>
			<div class="modal-body">
				<div class="row centered">

					<?php echo do_shortcode('[contact-form-7 id="213"]'); ?>
				</div>
			</div>
			<div class="row">
				<?= do_shortcode('[contact-form-7 id="214" title="Subscription block(end section Contact page)"]'); ?>
			</div>
		</div>
	</div>
	<!-- /.modal -->


<?php
get_footer();
