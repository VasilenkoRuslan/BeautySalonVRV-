<?php global $temp_html_dir;
$title = woocommerce_page_title(false);

get_header();
echo get_theme_page_title($title); ?>



<?php if (is_archive()) {
	require_once THEME_DIR.'/template-parts/woocommerce/archive/archive.php';
} else { ?>
<div class="container">
	<?php woocommerce_content(); ?>
</div>
<?php } ?>
<?php get_footer();
