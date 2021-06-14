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
		ob_start();
		woocommerce_mini_cart();
		$mini_cart = ob_get_contents();
		ob_end_clean();

		return <<<HTML
		<div class="row cart-icons">
			<ul>
				<li><p><span><i class="fa fa-random fa-3x"></i></span></p></li>
				<li><p><span><i class="fa fa-heart fa-3x"></i></span></p></li>
				<li><p id="trigger"><span><i class="fa fa-shopping-bag fa-3x"></i></span></p></li>
			</ul>
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
