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
		<div class="col-lg-12 justify-content-center text-left">
			<?= $thumbnail_url; ?>
		</div>
		<div class="col-lg-12 justify-content-center text-left">
			<h4><?= $title; ?></h4>
			<p><i class="fa fa-calendar"></i><?= $date; ?></p>
			<h5><?php echo __('product by: ', 'beautysalon').$author; ?></h5>
		</div>
		<div class="col-lg-12">
			<p><?= $content ?></p>
		</div>
	</div>
	<hr>
	<!-- row -->
	<?php comments_template(); ?>
	<br><br>
</div>
<!-- container -->
<?php
get_footer();
?>
