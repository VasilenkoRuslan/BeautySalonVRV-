<?php
function beauty_widget_arias(){

	register_sidebar( array(
		'name'          => __('Sidebar'),
		'id'            => "sidebar",
		'description'   => '',
		'class'         => '',
		'before_widget' => '',
		'after_widget'  => "",
		'before_title'  => '',
		'after_title'   => "",
		'before_sidebar' => '',
		'after_sidebar'  => '',
	) );
	register_sidebar( array(
		'name'          => __('Store Sidebar'),
		'id'            => "store_sidebar",
		'description'   => '',
		'class'         => '',
		'before_widget' => '',
		'after_widget'  => "",
		'before_title'  => '',
		'after_title'   => "",
		'before_sidebar' => '',
		'after_sidebar'  => '',
	) );
	register_sidebar( array(
		'name'          => __('footer Row 1'),
		'id'            => "footer Row 1",
		'description'   => '',
		'class'         => '',
		'before_widget' => '',
		'after_widget'  => "",
		'before_title'  => '',
		'after_title'   => "",
		'before_sidebar' => '',
		'after_sidebar'  => '',
	) );
	register_sidebar( array(
		'name'          => __('footer Column 1'),
		'id'            => "footer Column 1",
		'description'   => '',
		'class'         => '',
		'before_widget' => '<div class=" centered text-left">',
		'after_widget'  => "</div>",
		'before_title'  => '<div class="display-3 text-uppercase">',
		'after_title'   => "</div>",
		'before_sidebar' => '<nav class="navbar navbar-expand-sm bg-light text-left"><ul class="navbar-nav">',
		'after_sidebar'  => '</ul></nav>',
	) );
	register_sidebar( array(
		'name'          => __('footer Column 2'),
		'id'            => "footer Column 2",
		'description'   => '',
		'class'         => '',
		'before_widget' => '',
		'after_widget'  => "",
		'before_title'  => '',
		'after_title'   => "",
		'before_sidebar' => '',
		'after_sidebar'  => '',
	) );
	register_sidebar( array(
		'name'          => __('footer Column 3'),
		'id'            => "footer Column 3",
		'description'   => '',
		'class'         => '',
		'before_widget' => '',
		'after_widget'  => "",
		'before_title'  => '',
		'after_title'   => "",
		'before_sidebar' => '',
		'after_sidebar'  => '',
	) );
	register_sidebar( array(
		'name'          => __('footer Column 4'),
		'id'            => "footer Column 4",
		'description'   => '',
		'class'         => '',
		'before_widget' => '',
		'after_widget'  => "",
		'before_title'  => '',
		'after_title'   => "",
		'before_sidebar' => '',
		'after_sidebar'  => '',
	) );
}
add_action( 'widgets_init', 'beauty_widget_arias' );
