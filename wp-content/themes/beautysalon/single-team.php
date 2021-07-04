<?php global $temp_html_dir;
$title = get_the_title();

$thumbnail = get_the_post_thumbnail(NULL,'Medium');
$thumbnail = (empty($thumbnail)) ? '<img src="'.THEME_DIR_URI . '/assets/images/no_avatar.jpg" alt="">' : $thumbnail;

$content = get_the_content();

$term = get_the_taxonomies();

?>

<?php get_header();
echo get_theme_page_title($title); ?>

<div class="container desc">
	<div class="row centered">
		<br><br>
		<div class="col-lg-12">
			<?= $thumbnail; ?>
		</div>
		<div class="col-lg-12">
			<h4><?= $title; ?></h4>
		</div>
		<div class="col-lg-12 text-left">
			<p><?php
				foreach ($term as $taxonomy) {
					echo "<b>".$taxonomy."</b><hr>";
				}
				?></p>
		</div>
		<div class="col-lg-12 text-left">
			<p><?= $content ?></p>
		</div>
	</div>
	<br><br>
</div>
<?php
get_footer();
?>

