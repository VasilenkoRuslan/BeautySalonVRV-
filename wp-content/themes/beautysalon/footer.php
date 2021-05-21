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

<!-- MODAL FOR CONTACT -->
<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				<h4 class="modal-title" id="myModalLabel">contact us</h4>
			</div>
			<div class="modal-body">
				<div class="row centered">
					<p>We are available 24/7, so don't hesitate to contact us.</p>
					<p>
						Somestreet Ave, 987<br/> London, UK.<br/> +44 8948-4343<br/> contact@example.com
					</p>

					<form class="contact-form php-mail-form" role="form" action="<?= $temp_html_dir; ?>contactform/contactform.php" method="POST">
						<div class="form-group">
							<label for="contact-name">Your Name</label>
							<input type="name" name="name" class="form-control" id="contact-name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" >
							<div class="validate"></div>
						</div>
						<div class="form-group">
							<label for="contact-email">Your Email</label>
							<input type="email" name="email" class="form-control" id="contact-email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email">
							<div class="validate"></div>
						</div>
						<div class="form-group">
							<label for="contact-subject">Subject</label>
							<input type="text" name="subject" class="form-control" id="contact-subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject">
							<div class="validate"></div>
						</div>

						<div class="form-group">
							<label for="contact-message">Your Message</label>
							<textarea class="form-control" name="message" id="contact-message" placeholder="Your Message" rows="5" data-rule="required" data-msg="Please write something for us"></textarea>
							<div class="validate"></div>
						</div>

						<div class="loading"></div>
						<div class="error-message"></div>
						<div class="sent-message">Your message has been sent. Thank you!</div>

						<div class="form-send">
							<button type="submit" class="btn btn-large">Send Message</button>
						</div>

					</form>
				</div>
			</div>
		</div>
		<!-- /.modal-content -->
	</div>
	<!-- /.modal-dialog -->
</div>
<!-- /.modal -->

<div id="copyrights">
	<div class="container">
		<p>
			&copy; <?php _e('Copyrights','beautysalon'); ?> <strong><?= $name_copyrights = get_field('footer_copyrights','options'); ?></strong>. <?php _e('All Rights Reserved', 'beautysalon'); ?>
		</p>
		<div class="credits">
			<!--
			  You are NOT allowed to delete the credit link to TemplateMag with free version.
			  You can delete the credit link only if you bought the pro version.
			  Buy the pro version with working PHP/AJAX contact form: https://templatemag.com/spot-bootstrap-freelance-template/
			  Licensing information: https://templatemag.com/license/
			-->
			<?= __('Created with', 'beautysalon').' '.$name_copyrights.' '.__('template by','beautysalon').'<a href="'.get_field('footer_link_by_author_url_link','options').'">'.get_field('footer_link_by_author_name_link','options'); ?>
		</div>
	</div>
</div>
<?php wp_footer(); ?>
</body>
</html>
