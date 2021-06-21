<?php

class ThemeHeader
{
	public $acf_fields;

	function __construct()
	{
		$this->acf_fields = get_field("header", "options");
	}

	function get_icon_bar()
	{
		$logo_url = home_url('/');
		$logo_src = $this->acf_fields['logo']['url'];
		return <<<HTML
<div class="navbar-header">
	<a class="navbar-brand" href="{$logo_url}"><img src="{$logo_src}" alt="new logo"></a>
</div>
HTML;
	}

	function get_phone_block()
	{
		$phone_title = $this->acf_fields['phone']['phone_title'];
		$phone_numb = $this->acf_fields['phone']['phone_number'];
		$word_tel = __('tel', 'beautysalon');
		return <<<HTML
<div class="navbar navbar-header">
	<h4>{$phone_title}</h4>
	<h4>{$word_tel}: <a href="tel: {$phone_numb}">{$phone_numb}</a></h4>
</div>
HTML;
	}

	function get_cart_icons()
	{
		$txt_total_price = __('Total price on cart','beautysalon');

		return <<<HTML
<div class="container">
	<div class="row">
		<div class="col-3 col-sm-6 col-md-4 col-lg-3 cart-icons">
			<ul>
				<li class="header_compare"><p><span class="position_relative"><i class="fa fa-random fa-2x"></i><span class="badge"></span></span></p></li>
				<li class="header_heart_count"><p><span class="position_relative"><i class="fa fa-heart fa-2x"></i><span class="badge"></span></span></p></li>
				<li><p id="trigger"><span class="position_relative"><i class="fa fa-shopping-bag fa-2x"></i><span class="badge atc"></span></span></p></li>
			</ul>
		</div>
		<div class="col-3 col-sm-6 col-md-4 col-lg-3 cart-total-price">
			<p>{$txt_total_price}: <span class="cart_total"></span></p>
		</div>
	</div>
</div>
HTML;
	}

	function get_header_menu()
	{
		$main_menu = wp_nav_menu(array(
			'theme_location' => 'main-menu',
			'container' => 'div',
			'container_class' => 'navbar-collapse collapse',
			'menu_class' => 'nav navbar-nav navbar-right',
			'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>',
			"echo" => false,
		));
		return $main_menu;
	}

	function get_languages_menu()
	{
		$lang_menu = wp_nav_menu(array(
			'theme_location' => 'lang-menu',
			'container' => '',
			'container_class' => '',
			'menu_class' => 'nav navbar-nav navbar-right',
			'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>',
			"echo" => false,
		));
		return $lang_menu;
	}
}
