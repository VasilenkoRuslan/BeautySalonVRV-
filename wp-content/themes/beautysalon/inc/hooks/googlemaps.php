<?php
function my_acf_google_map_api( $api ){
		$key=get_field('maps_key','options');
		$api['key'] = $key;
		return $api;
}
add_filter('acf/fields/google_map/api', 'my_acf_google_map_api');
