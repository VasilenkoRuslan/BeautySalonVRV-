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
		$logo_src=$this->acf_fields['logo']['url'];
		return <<<HTML
<div class="navbar-header">
	<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
		<span class="icon-bar"></span>
		<span class="icon-bar"></span>
		<span class="icon-bar"></span>
	</button>
<!--	<a class="navbar-brand" href="#">SP<i class="fa fa-circle"></i>T</a>-->
	<a class="navbar-brand" href="{$logo_url}"><img src="{$logo_src}" alt="new logo"></a>
</div>
HTML;
	}

	function get_phone_block()
	{
		$phone_title=$this->acf_fields['phone']['phone_title'];
		$phone_numb=$this->acf_fields['phone']['phone_number'];

		return <<<HTML
<div class="navbar-text">
	<h5 class="text-warning">{$phone_title}</h5>
	<h5 class="text-warning">tel: <a href="tel: {$phone_numb}">{$phone_numb}</a></h5>
</div>
HTML;
	}

	function get_header_menu()
	{
		global $temp_html_dir;

		return <<<HTML
<div class="navbar-collapse collapse">
			<ul class="nav navbar-nav navbar-right">
				<li class="active"><a href="{$temp_html_dir}index.html">HOME</a></li>
				<li><a href="{$temp_html_dir}about.html">ABOUT</a></li>
				<li><a href="{$temp_html_dir}services.html">SERVICES</a></li>
				<li><a href="{$temp_html_dir}works.html">WORKS</a></li>
				<li><a data-toggle="modal" data-target="#myModal" href="#myModal"><i class="fa fa-envelope-o"></i></a>
				</li>
			</ul>
		</div>
HTML;

	}
}
