<?php
function ajax_get_fbi_data()
{
	$office = $_GET['field_offices'];
	$page = (isset($_GET['page'])) ? $_GET['page'] : 1;

	$data_for_cache = get_transient('data_cache_office' . $office . '_page_' . $page . '_language_' . ICL_LANGUAGE_CODE);
	if (empty($data_for_cache)) {

		$api_url = 'https://api.fbi.gov/@wanted?pageSize=12&page=' . $page . '&field_offices=' . $office;
		$api_row_data = file_get_contents($api_url);
		if (empty($api_row_data)) {
			$output = array(
				'status' => 'error',
				'error' => __('Wrong data or wrong api_url!', 'beautysalon'),
			);
			echo json_encode($output);
			die();
		}

		$api_data = json_decode($api_row_data);

		$result = array(
			'status' => 'success',
			'result' => ''
		);

		$total_prisoners = $api_data->total;

		$how_much_pages = ceil($total_prisoners / 12);

		$items = $api_data->items;
		$no_reward_text = _x('information is absent', 'fbi-page', 'beautysalon');
		$no_description_text = _x('information is absent', 'fbi-page', 'beautysalon');

		foreach ($items as $prisoner) {

			$name = $prisoner->title;
			$url_img = $prisoner->images['0']->original;
			$url_img = (!empty($url_img)) ? $url_img : THEME_DIR_URI . '/assets/images/no_avatar.jpg';
			$url_single_page = $prisoner->url;

			$reward = $prisoner->reward_text;
			$reward = (!empty($reward)) ? $reward : $no_reward_text;

			$description = $prisoner->description;
			$description = (!empty($description)) ? $description : $no_description_text;
			$result['result'] .= <<<HTML
<div class='col-9 col-md-6 col-lg-6 card fbi_wanted_item'>
	<a href="{$url_single_page}" target="_blank"><div class='card-img-top img_prisoner' style='background-image: url("{$url_img}");'></div></a>
	<div class='card-body'>
		<a href="{$url_single_page}" target="_blank"><div class='name_prisoner card-title'>
			<h5>{$name}</h5>
		</div></a>
		<p class='card-text reward'>{$reward}</p>
		<p class='card-text description'>{$description}</p>
	</div>
</div>

HTML;
		}

		$result['pages'] = '';
//
		if ($how_much_pages < 2) {
			$result['pages'] = null;
		} else {
			for ($i = 1; $i <= $how_much_pages; $i++) {
				$current = ($i == 1) ? 'current' : '';
				$result['pages'] .= '<li class="' . $current . '" data-page="' . $i . '"><span>' . $i . '</span></li>';
			}
		}

		set_transient('data_cache_office' . $office . '_page_' . $page . '_language_' . ICL_LANGUAGE_CODE, $result, 18000);
		wp_send_json($result);
	} else {
		wp_send_json($data_for_cache);
	}
}

add_action("wp_ajax_get_fbi_data", 'ajax_get_fbi_data');
add_action("wp_ajax_nopriv_get_fbi_data", 'ajax_get_fbi_data');
