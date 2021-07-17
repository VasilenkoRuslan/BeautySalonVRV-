<?php

class ThemeHome
{
	/*
	 *  board slider content
	 */
	function get_board_slider($data)
	{
		$slider_data = $data['board_slider'];

		if (empty($slider_data)) {
			return false;
		}

		$html_slider = null;
		$html_carousel_indicators = null;
		$url_price_img = THEME_DIR_URI . '/assets/images/pricing.png';
		$cur = get_woocommerce_currency_symbol();
		$display_only_price = null;
		foreach ($slider_data as $numn_slide => $slider_item) {
//			var_dump($slider_item);
			$img_right = $slider_item['img']['sizes']['1536x1536'];
			$title = (!empty($slider_item['title'])) ? '<h1>' . $slider_item['title'] . '</h1>' : null;
			$subtitle = (!empty($slider_item['subtitle'])) ? '<h2>' . $slider_item['subtitle'] . '</h2>' : null;
			$text = (!empty($slider_item['text'])) ? '<p>' . $slider_item['text'] . '</p>' : null;
			$btn_url = (!empty($slider_item['button']['url'])) ? $slider_item['button']['url'] : null;
			$btn_text = (!empty($slider_item['button']['title'])) ? $slider_item['button']['title'] : null;
			$html_button = (!empty($btn_url) && !empty($btn_text)) ? '<a href="' . $btn_url . '" class="btn btn-default get">' . $btn_text . '</a>' : null;
			$only_price = (!empty($slider_item['only_price'])) ? number_format($slider_item['only_price'], 2, '.', '') : null;
			if (!empty($slider_item['only_price'])) {
				$display_only_price = <<<HTML
			<div class="pricing">
				<div class="block_price">
				<img src="{$url_price_img}" alt="" />
				<span>{$cur}{$only_price}</span>
				</div>
			</div>
HTML;
			}


			$class_active_to_first = ($numn_slide === 0) ? 'active' : '';
			$html_carousel_indicators .= '<li data-target="#slider-carousel" data-slide-to="' . $numn_slide . '" class="' . $class_active_to_first . '"></li>';

			$html_slider .= <<<HTML
							<div class="item {$class_active_to_first}">
								<div class="col-sm-6">
									{$title}
									{$subtitle}
									{$text}
									{$html_button}
								</div>
								<div class="col-sm-6">
									<img src="{$img_right}" class="girl img-responsive" alt="" />
									{$display_only_price}
								</div>
							</div>
HTML;

		}


		$html_board_slider = <<<HTML
	<section id="slider"><!--slider-->
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<div id="slider-carousel" class="carousel slide" data-ride="carousel">
						<ol class="carousel-indicators">

							{$html_carousel_indicators}
						</ol>
						<div class="carousel-inner">
							{$html_slider}
						</div>
						<a href="#slider-carousel" class="left control-carousel hidden-xs" data-slide="prev">
							<i class="fa fa-angle-left"></i>
						</a>
						<a href="#slider-carousel" class="right control-carousel hidden-xs" data-slide="next">
							<i class="fa fa-angle-right"></i>
						</a>
					</div>

				</div>
			</div>
		</div>
	</section><!--/slider-->
HTML;

		return $html_board_slider;
	}

	/*
	 * archive products block
	 */
	function get_archive_products()
	{
		ob_start();
		get_sidebar('store');
		$sidebar = ob_get_clean();
		$args = array(
			'post_type' => 'product',
			'posts_per_page' => 8,
			'orderby' => 'rand',
		);

		$products_list_data = new WP_Query($args);

		$products_list = '';
		if ($products_list_data->have_posts()) :
			while ($products_list_data->have_posts()) :
				$products_list_data->the_post();
				ob_start();
				wc_get_template_part('content', 'product');
				$products_list .= ob_get_clean();
			endwhile;
			wp_reset_query();
		endif;

		$html_block_archive = <<<HTML
	<section>
		<div class="container">
			<div class="row">
						{$sidebar}

				<div class="col-sm-9 padding-right">
					<div class="features_items"><!--features_items-->
						<h2 class="fruit-title text-center">Features Items</h2>
							{$products_list}
					</div>
				</div>
			</div>
		</div>
	</section>
HTML;
		return $html_block_archive;

	}

	function get_category_for_tabs(): array
	{
		$categories = get_terms(['taxonomy' => 'product_cat']);
		$number_cat = 0;
		$arrayCat = [];
		foreach ($categories as $numb_cut => $category_item) {
			if ($category_item->parent !== 0) {

				$id_cat = $category_item->term_id;
				$name_cat = $category_item->name;
				$slug_cat = $category_item->slug;
				$arrayCat[$number_cat] = [$id_cat,$name_cat,$slug_cat];
				$number_cat++;
			}
		}
		return $arrayCat;
	}

	function display_cat_tabs() {
		$arr_cats = $this->get_category_for_tabs();
		if (empty($arr_cats)) {
			return null;
		}

		$html_cat_tabs = '<div class="col-sm-12"><ul class="nav nav-tabs">';

		foreach ($arr_cats as $cat_numb => $arr_cat_item) {
			$cat_class = ($cat_numb == 0) ? 'active' : null;

			$id_cat = $arr_cat_item['0'];
			$name_cat = $arr_cat_item['1'];
			$slug_cat = $arr_cat_item['2'];
			$html_cat_tabs .= '<li class="' . $cat_class . '"><a href="#cat-' . $id_cat . '" id="cat_id-' . $id_cat . '" data-toggle="tab">' . $name_cat . '</a></li>';
		}
		$html_cat_tabs .= '</ul></div>';

		return $html_cat_tabs;
	}

	function get_products_by_cats() {
		$arr_cats = $this->get_category_for_tabs();
		if (empty($arr_cats)) {
			return null;
		}
		$arr_ids_cats = [];
		foreach ($arr_cats as $cat_item) {
			$arr_ids_cats[] .= $cat_item[0];
		}

		foreach ($arr_ids_cats as $cat_id) {
			$args = array(
				'post_type'             => 'product',
				'post_status'           => 'publish',
				'ignore_sticky_posts'   => 1,
				'posts_per_page'        => '4',
				'tax_query'             => array(
					array(
						'taxonomy'      => 'product_cat',
						'field' => 'term_id', //This is optional, as it defaults to 'term_id'
						'terms'         => $cat_id,
						'operator'      => 'IN' // Possible values are 'IN', 'NOT IN', 'AND'.
					),
				)
			);

			$products = new WP_Query($args);
			$products_list = '';
			$arr_products[$cat_id] = [];
			if ( $products->have_posts() ) :
				while ( $products->have_posts() ) :
					$products->the_post();
					$id_prod = get_the_ID();
					$arr_products[$cat_id][$id_prod]['url'] = get_the_post_thumbnail_url($id_prod,'shop_catalog');
					$arr_products[$cat_id][$id_prod]['title'] = get_the_title($id_prod);
					$product = wc_get_product( $id_prod );
					$arr_products[$cat_id][$id_prod]['price'] = $product->get_price_html();
					$arr_products[$cat_id][$id_prod]['link'] = get_page_link($id_prod);
				endwhile;
				wp_reset_query();
			endif;
		}

		return $arr_products;
	}

	function display_products_after_tabs() {
		$arr_products_by_cats = $this->get_products_by_cats();

		if (empty($arr_products_by_cats)) {
			return null;
		}

		$html_products_by_tabs =<<<HTML
						<div class="tab-content">
HTML;
		$numb_tab = 0;

		foreach ($arr_products_by_cats as $key => $cat_id) {

			$class_tab_active = ($numb_tab == 0) ? 'active in' : '';
			$html_tab = '<div class="tab-pane fade '.$class_tab_active.'" id="cat-'.$key.'">';


			foreach ($cat_id as $id_prod => $prod_item) {
				$url_prod = $prod_item['url'];
				$title_prod = $prod_item['title'];
				$price_prod = $prod_item['price'];
				$link_prod = $prod_item['link'];

				$html_product = <<<HTML
								<div class="col-sm-3">
									<div class="product-image-wrapper">
										<div id="{$id_prod}" class="single-products">
											<div class="productinfo text-center">
												<img src="{$url_prod}" alt="" />
												{$price_prod}
												<p class="title"><a href="{$link_prod}">{$title_prod}</a></p>
												<a href="?add-to-cart={$id_prod}" data-quantity="1" class="btn btn-default add-to-cart add_to_cart_button ajax_add_to_cart" data-product_id="{$id_prod}"  rel="nofollow"><i class="fa fa-shopping-cart"></i>Add to cart</a>
											</div>
										</div>
									</div>
								</div>
HTML;
				$html_tab .= $html_product;
			}
			$html_tab .= '</div>';
			$html_products_by_tabs .= $html_tab;

			$numb_tab++;
		}
		$html_products_by_tabs .= '</div>';

		return $html_products_by_tabs;
	}

	function display_block_with_tabs_cats() {
		$block_tabs = $this->display_cat_tabs();
		$block_products = $this->display_products_after_tabs();

		return <<<HTML
<section>
	<div class="container">
		<div class="row">
			<div class="col-sm-3">&nbsp;</div>
			<div class="col-sm-9 padding-right">
				<div class="category-tab"><!--category-tab-->
					{$block_tabs}
					{$block_products}
				</div><!--/category-tab-->
			</div>
		</div>
	</div>
</section>
HTML;

	}



	/*
	 * display page content
	 */
	function display()
	{
		$content_data = get_field('content');

		if (empty($content_data)) {
			return false;
		}

		$html_content = null;
		foreach ($content_data as $content_item) {
			switch ($content_item['acf_fc_layout']) {
				case "board_slider";
					$html_content = $this->get_board_slider($content_item);
					break;
			}
		}
		return $html_content;
	}


	/*
	 * old theme blocks
	 */
	function get_header_board()
	{
		if (empty($board_item = get_field('header_board'))) {
			return "";
		}

		$board_bg_img_url = $board_item['board_background'];
		$board_bg_img_url = (empty($board_bg_img_url)) ? THEME_DIR_URI . '/assets/images/header_bg.jpg' : $board_bg_img_url;

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
