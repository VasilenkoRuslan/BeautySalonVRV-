<?php global $temp_html_dir; ?>
<?php get_header(); ?>

<?= do_shortcode('[fp-header-board]'); ?>
<?= do_shortcode('[block-w-items]'); ?>
<?= do_shortcode('[block-dg-items]'); ?>
<?= do_shortcode('[block-info]'); ?>
<?= do_shortcode('[logo_clients]'); ?>

<?php get_footer(); ?>
