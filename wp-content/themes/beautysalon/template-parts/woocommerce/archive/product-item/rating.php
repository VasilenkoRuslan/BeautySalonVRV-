<?php

global $product;

if ( ! wc_review_ratings_enabled() ) {
	return;
}

$avg_rating = intval($product->get_average_rating());

if($avg_rating > 0) {
	$html_rating_1 = $html_rating_2 = null;
	for($i = 1; $i < 6; $i++) {
		$css_active = ($i <= $avg_rating) ? 'active' : null;
		$html_rating_2 .= '<span class="ion-ios-star '. $css_active .'"><i class="fa fa-star"></i></span>';
	}
	echo '<div class="star_rating">'. $html_rating_1 .'</div>';
	echo '<div class="star_rating">'. $html_rating_2 .'</div>';
} else {
	echo '<div class="no_rating"></div>';
}
