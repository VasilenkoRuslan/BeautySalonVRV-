<?php

class ThemeHome
{

	function get_header_board()
	{
		if (empty($board_item = get_field('header_board'))) {
			return "";
		}

		$board_bg_img_url = $board_item['board_background'];
		$board_bg_img_url = (empty($board_bg_img_url)) ? THEME_DIR_URI . '/assets/images/header-bg.jpg' : $board_bg_img_url;

		$board_title = $board_item['board_title'];
		$board_subtitle = $board_item['board_subtitle'];

		$board = <<<HTML
<div id="headerwrap" style='background-image: url("{$board_bg_img_url}")'>
	<div class="container">
		<div class="row centered">
			<div class="col-lg-8 col-lg-offset-2">
				<h1>{$board_title}</h1>
				<h2>{$board_subtitle}</h2>
			</div>
		</div>
	</div>
</div>
HTML;
		return $board;
	}

	function get_block_w_items()
	{
		if (empty(get_field('block_w'))) {
			return "";
		}
		$block_w_icons = <<<HTML
  <div class="container w">
    <div class="row centered">
      <br><br>
HTML;
		foreach (get_field('block_w') as $block_w_icon) {
			$icon_class = $block_w_icon['icon'];
			$w_block_title = $block_w_icon['title'];
			$w_block_content = $block_w_icon['content'];

			$block_w_icons .= <<<HTML
<div class="col-lg-4">
	<i class="{$icon_class}"></i>
	<h4>{$w_block_title}</h4>
	<p>{$w_block_content}</p>
</div>
HTML;
		}
		$block_w_icons .= <<<HTML
    </div>
    <!-- row -->
    <br>
    <br>
</div>
HTML;
		return $block_w_icons;
	}

	function block_dg_items()
	{
		if (empty($array_block_dg = get_field('block_dg'))) {
			return "";
		}
		$title_block = __('LATEST WORKS', 'beautysalon');

		$block_dg = <<<HTML
  <div id="dg">
    <div class="container">
      <div class="row centered">
        <h4>{$title_block}</h4>
        <br>
HTML;
		foreach ($array_block_dg as $item_dg) {
			$dg_url = $item_dg['url'];
			$dg_img = $item_dg['img'];

			$block_dg .= <<<HTML
        <div class="col-lg-4">
          <div class="tilt">
            <a href="{$dg_url}"><img src="{$dg_img}" alt=""></a>
          </div>
        </div>
HTML;
		}
		$block_dg .= <<<HTML
      </div>
      <!-- row -->
    </div>
    <!-- container -->
  </div>
  <!-- DG -->
HTML;
		return $block_dg;
	}

	function get_block_info()
	{
		if (empty($array_block_info = get_field('block_info'))) {
			return "";
		}
		global $temp_html_dir;

		$title_info = $array_block_info['title'];
		$content_info = $array_block_info['content'];

		$html_info = <<<HTML
<!-- FEATURE SECTION -->
<div class="container wb">
	<div class="row centered">
		<br><br>
		<div class="col-lg-8 col-lg-offset-2">
			<h4>{$title_info}</h4>
			<p>{$content_info}</p>
			<p><br/><br/></p>
		</div>
		<div class="col-lg-2"></div>
		<div class="col-lg-10 col-lg-offset-1">
			<img class="img-responsive" src="{$temp_html_dir}img/munter.png" alt="">
		</div>
	</div>
	<!-- row -->
</div>
<!-- container -->
HTML;
		return $html_info;
	}

	function get_block_logo_clients()
	{
		if (empty($array_block = get_field('block_logo_clients'))) {
			return "";
		}

		$title_block = __('OUR AWESOME CLIENTS', 'beautysalon');

		$html_clients = <<<HTML
<div id="lg">
	<div class="container">
		<div class="row centered">
			<h4>{$title_block}</h4>
HTML;

		$counter = 1;

		foreach ($array_block as $icon_client) {

			$icon = $icon_client['icon'];

			$block_current_class = ($counter !== 1) ? '' : ' col-lg-offset-1';
			$counter++;

			$html_clients .= <<<HTML
			<div class="col-lg-2{$block_current_class}">
				<img src="{$icon}" alt = "" >
			</div>
HTML;
		}

		$html_clients .= <<<HTML
		</div >
		<!--row -->
	</div >
	<!--container -->
</div >
<!--dg -->
HTML;

		return $html_clients;
	}


}
