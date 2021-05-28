<?php global $temp_html_dir; ?>
<?php get_header();
include_once THEME_DIR . '/inc/classes/ThemeHome.class.php';
$home_page = new ThemeHome();
?>
<?= $home_page->get_header_board(); ?>
<?= $home_page->get_block_w_items(); ?>
<?= $home_page->block_dg_items(); ?>
<?= $home_page->get_block_info(); ?>
<?= $home_page->get_block_logo_clients(); ?>

<?php get_footer(); ?>
