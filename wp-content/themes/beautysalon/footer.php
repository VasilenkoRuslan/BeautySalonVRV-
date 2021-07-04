<?php global $temp_html_dir; ?>
<?php echo do_shortcode('[footer-red]'); ?>


<!-- FOOTER -->
<div id="f">
	<div class="container">
		<div class="row centered">
			<?php dynamic_sidebar('footer Row 1'); ?>
		</div>
	</div>
	<div class="container">
		<div class="row justify-content-between">
			<div class="col-12 col-sm-4 col-md-3 col-lg-3 centered">
				<?php dynamic_sidebar('footer Column 1'); ?>
			</div>
			<div class="col-6 col-sm-2 col-md-2 col-lg-2 centered">
				<?php dynamic_sidebar('footer Column 2'); ?>
			</div>
			<div class="col-6 col-sm-6 col-md-7 col-lg-4 centered">
				<?php dynamic_sidebar('footer Column 3'); ?>
			</div>
			<div class="col-6 col-sm-12 col-md-12 col-lg-3 centered">
				<?php dynamic_sidebar('footer Column 4'); ?>
			</div>
		</div>
	</div>
</div>
<!-- Footer -->
<div id="copyrights">
	<div class="container">
		<p>
			&copy; <?php _e('Copyrights', 'beautysalon'); ?>
			<strong><?= $name_copyrights = get_field('footer_copyrights', 'options'); ?></strong>. <?php _e('All Rights Reserved', 'beautysalon'); ?>
		</p>
		<div class="credits">
			<!--
			  You are NOT allowed to delete the credit link to TemplateMag with free version.
			  You can delete the credit link only if you bought the pro version.
			  Buy the pro version with working PHP/AJAX contact form: https://templatemag.com/spot-bootstrap-freelance-template/
			  Licensing information: https://templatemag.com/license/
			-->
			<?= __('Created with', 'beautysalon') . ' ' . $name_copyrights . ' ' . __('template by', 'beautysalon') . '<a href="' . get_field('footer_link_by_author_url_link', 'options') . '">' . get_field('footer_link_by_author_name_link', 'options'); ?>
		</div>
	</div>
</div>
<?php wp_footer(); ?>
</body>
</html>
