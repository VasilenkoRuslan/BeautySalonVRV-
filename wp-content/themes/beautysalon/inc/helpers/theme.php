<?php
function get_theme_page_title($title, $has_breadcrumbs = true)
{
	if(is_woocommerce()) {
		ob_start();
		woocommerce_breadcrumb(array(
			'wrap_before' => '<div id="breadcrumbs">',
			'wrap_after' => '</div>',
			'delimiter' => '>>',
		));
		$breadcrumbs = ob_get_contents();
		ob_end_clean();
	} else {
		$breadcrumbs = yoast_breadcrumb('<div id="breadcrumbs">', '</div>', FALSE);
	}
	$html_breadcrumbs = ($has_breadcrumbs) ? "<div class='col-12'>{$breadcrumbs}</div>" : "";

	$block = <<<HTML
<div id="blue">
	<div class="container">
		<div class="row centered">
			<div class="col-lg-12">
				<h2>{$title}</h2>
			</div>
			{$html_breadcrumbs}
		</div>
	</div>
</div>
HTML;
	return $block;
}
