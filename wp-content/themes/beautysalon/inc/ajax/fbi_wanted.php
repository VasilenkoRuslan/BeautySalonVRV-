<?php
function ajax_get_fbi_data()
{
	$api_url = "https://api.fbi.gov/wanted";
	$api_row_data = file_get_contents($api_url);

	if(empty($api_row_data)) {
		$output = array(
			'status' => 'error',
			'error' => __('wrong data','beautysalon'),
		);
		echo json_encode($output);
		die();
	}
	$api_data = json_decode($api_row_data);
	echo $api_data;

	wp_die();
}

add_action("wp_ajax_get_fbi_data", 'ajax_get_fbi_data');
add_action("wp_ajax_nopriv_get_fbi_data", 'ajax_get_fbi_data');

