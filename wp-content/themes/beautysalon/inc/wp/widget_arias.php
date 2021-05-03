<?php
function beauty_widget_arias(){

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
		'id'            => "footer Row 2",
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
		'name'          => __('footer Column 2'),
		'id'            => "footer Row 3",
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
		'id'            => "footer Row 4",
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
