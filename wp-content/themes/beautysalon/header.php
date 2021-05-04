<?php require_once THEME_DIR . '/inc/classes/ThemeHeader.class.php'; ?>
<?php $header_theme = new ThemeHeader(); ?>
<?php global $temp_html_dir; ?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta content="width=device-width, initial-scale=1.0" name="viewport">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- Fixed navbar -->


<div class="navbar navbar-inverse">
	<div class="container">
		<?php echo $header_theme->get_icon_bar(); ?>
		<?php echo $header_theme->get_phone_block(); ?>
		<?php echo get_search_form(array(
				'echo' => false,
		));; ?>
		<?php echo $header_theme->get_header_menu(); ?>
	</div>
</div>
