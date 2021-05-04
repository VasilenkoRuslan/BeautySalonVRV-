<?php global $temp_html_dir;
$title = get_the_title();
$thumbnail_url = get_the_post_thumbnail(NULL,'Medium');
$date = get_the_date('d F Y');
the_post();
$author = get_the_author();
$content = get_the_content(); ?>

<?php get_header();
echo get_theme_page_title($title); ?>
<div class="container desc">
	<div class="row">
		<br><br>
		<div class="col-lg-12 justify-content-center centered">
			<?= $thumbnail_url; ?>
		</div>
		<div class="col-lg-12 justify-content-center text-left">
			<?php /* <h4><?= $title; ?></h4> */?>
			<h5><?php echo __('date').": ".$date; ?> | <?php echo __('product by').": ".$author; ?></h5>
		</div>
		<div class="col-lg-12 centered">
			<p ><?= $content ?></p>
		</div>
	</div>
</div>
<!-- container -->
<div id="r">
	<div class="container">
		<div class="row centered">
			<div class="col-lg-12">
				<h4>WE ARE STORYTELLERS. BRANDS ARE OUR SUBJECTS. DESIGN IS OUR VOICE.</h4>
				<p>We believe ideas come from everyone, everywhere. At OurCompany, everyone within our agency walls is a
					designer in their own right. And there are a few principles we believe—and we believe everyone
					should believe—about our design craft. These truths
					drive us, motivate us, and ultimately help us redefine the power of design.</p>
			</div>
		</div>
		<!-- row -->
	</div>
	<!-- container -->
</div>
<?php get_footer(); ?>

