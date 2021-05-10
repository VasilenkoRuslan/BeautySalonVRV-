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
		<div class="col-lg-12 centered">
			<p ><?= $content ?></p>
		</div>
	</div>
</div>
<!-- container -->
<?php get_footer(); ?>

