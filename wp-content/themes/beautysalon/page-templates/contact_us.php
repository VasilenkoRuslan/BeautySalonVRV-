<?php
/* Template Name: Contact page */

get_header();


//var_dump(mail('raskussilva03@gmail.com', 'My Subject', 'Message'));


echo get_theme_page_title(get_the_title());
?>

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
