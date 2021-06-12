<?php
/**
 * Theme CSS & JS
 */
function theme_scripts() {
	// Main CSS
	wp_enqueue_style('main-stylesheet', asset_path( 'styles/main.css' ), false, '1.0.0');

	if (is_singular('product')) {
		wp_enqueue_style('fa5', THEME_DIR_URI . '/assets/styles/product_gallery/fontawesome.min.css', [], '5.9.0');
		wp_enqueue_style('fa5-solid', THEME_DIR_URI . '/assets/styles/product_gallery/solid.min.css', [], '5.9.0');
	}

	// Deregister the jquery version bundled with WordPress
	wp_deregister_script('jquery');

	// CDN hosted jQuery
	wp_enqueue_script('jquery', 'https://code.jquery.com/jquery-1.12.4.min.js', [], '1.12.4', false);

	// Main JS
	wp_enqueue_script('main-javascript', asset_path('scripts/main.js'), [ 'jquery' ], '1.0.0', true);

	// google maps
	if(!empty($key=get_field('maps_key','options'))) {
		wp_enqueue_script('googleapis', 'https://maps.googleapis.com/maps/api/js?key='.$key, [], '1.0.0', false);
	}

	//wp comment reply
	wp_enqueue_script('comment-reply');

	// Throw variables to front-end
	$theme_vars = array(
		'home'   => get_home_url(),
		'ajaxurl' => admin_url('admin-ajax.php'),
		'is_auth' => is_user_logged_in(),
	);
	wp_localize_script('main-javascript', 'themeVars', $theme_vars);

	if (is_singular('product')) {
		wp_enqueue_script('frontend-js', THEME_DIR_URI . '/assets/scripts/plugins/slider/frontend.js', array('jquery', 'flexslider'), '1.0.0', true);
	}
}
add_action('wp_enqueue_scripts', 'theme_scripts');

//admin css
function load_admin_styles() {
	wp_enqueue_style('admin-scc', THEME_DIR_URI.'/assets/styles/admin.css');
}
add_action( 'admin_enqueue_scripts', 'load_admin_styles' );

