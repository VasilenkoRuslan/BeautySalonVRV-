<?php

class ThemeTeam
{
	//get departments in array
	function get_departments()
	{
		$departments = get_terms(array(
			'taxonomy' => 'departments',
		));

		if (empty($departments)) {
			return '';
		}
		// get array with key = department id, value = department name
		$arrayDep = array();
		foreach ($departments as $dep) {
			$arrayDep[$dep->term_id] = $dep->name;
		}
		return $arrayDep;
	}

	//get html departments for the echo at page
	function display_departments()
	{
		$arr_deps = $this->get_departments();
		if (empty($arr_deps)) {
			return '';
		}

		$dep_count = 0;

		//start html block
		$block = '<div class="row team_departments"><ul>';

		//add html departments to array
		foreach ($arr_deps as $dep_id => $dep_name) {

			$dep_class = ($dep_count == 0) ? 'active' : null;
			$dep_count++;

			$block .= '<li><a href="#" class="dep-btn ' . $dep_class . '" data-department="' . $dep_id . '">' . $dep_name . '</a></li>';
		}

		// add button "all team members"
		$words_all_t_m=__('all team members','beautysalon');
		$block .= '<li><a href="#" class="dep-btn" data-department="all">'.$words_all_t_m.'</a></li>';

		//end html block
		$block .= '</ul></div>';
		return $block;
	}

	//get team members array
	function get_team()
	{
		$all_team_members = get_posts(array(
			'numberposts' => -1,
			'post_type' => 'team',
			'suppress_filters' => false,
		));

		$array_all_team = array();
		$number_team_member = 0;

		foreach ($all_team_members as $obj_team) {
			$number_team_member++;

			$team_member_id = $obj_team->ID;
			$team_member_name = $obj_team->post_title;
			$team_link = get_page_link($team_member_id);

			$team_member_avatar = get_the_post_thumbnail_url($team_member_id);
			$team_member_avatar = (empty($team_member_avatar)) ? THEME_DIR_URI . '/assets/images/no_avatar.jpg' : $team_member_avatar;

			$team_member_position = get_field('work_position', $team_member_id);

			$team_member_location = get_the_terms($team_member_id, 'locations');
			$team_member_location_name = (isset($team_member_location[0])) ? $team_member_location[0]->name : null;

			$team_member_dep_id = get_field('department', $team_member_id);

			$array_all_team[$team_member_dep_id][$number_team_member] = array(
				'avatar' => $team_member_avatar,
				'name' => $team_member_name,
				'work_position' => $team_member_position,
				'location' => $team_member_location_name,
				'link' => $team_link,
			);
		}
		return $array_all_team;
	}

	//get html team members for the echo at page
	function display_team_members()
	{
		$arr_team_members = $this->get_team();

		//Create word 'from' before name location to display
		$pre_loc = __('from', 'beautysalon');

		//start Team members block
		$block = <<<HTML
<div class="container w">
    <hr>
    <div class="row centered">
HTML;
		//select to first department`s members
		$dep_count = 0;

		//add Team members to block
		foreach ($arr_team_members as $dep_id => $dep_list) {

			//select to first department`s members
			$dep_class = ($dep_count == 0) ? 'active' : null;
			$dep_count++;

			$block .= "<div class='dep-block {$dep_class}' data-department='{$dep_id}'>";
			foreach ($dep_list as $team_member) {
				$block .= <<<HTML
<div class="col-sm-12 col-md-6 col-lg-4">
	<a href="{$team_member['link']}">
		<img class="img-circle" src="{$team_member['avatar']}" width="110" height="110" alt="">
        <h4>{$team_member['name']}</h4>
	<p class="text-info">{$team_member['work_position']}<br>{$pre_loc} {$team_member['location']}
	</p>
		</a>
</div>
HTML;
			}
			$block .= "</div>";
		}

		//end Team members block
		$block .= <<<HTML
    </div>
	<hr><br>
</div>
HTML;

		return $block;
	}

	//get all result html of this class
	function display_team_page()
	{
		return $this->display_departments() . $this->display_team_members();
	}
}
