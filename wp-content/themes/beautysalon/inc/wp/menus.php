<?php
function beauty_register_nav_menu() {
	register_nav_menu( 'main-menu', 'Main Menu' );
	register_nav_menu( 'lang-menu', 'Language Menu' );
}
add_action( 'after_setup_theme', 'beauty_register_nav_menu' );
