<?php

class ThemeTeam
{
	public $sorted_team_members;

	function get_departments()
	{

		$departments = get_terms(array(
			'taxonomy' => 'departments',
		));

		if (empty($departments)) {
			return false;
		}

			$html_departments = "";
		foreach ($departments as $dep) {
			$dep_id = $dep->term_id;
			$dep_name = $dep->name;

			if (!isset($this->sorted_team_members[$dep_id])) {
				$this->sorted_team_members[$dep_id] = array();
			}

			$html_departments .= "<li><a href='#'>" . $dep_name . "</a></li>";
		}

		$html_block = '<ul>' . $html_departments . '</ul>';
		return $html_block;
	}

	function get_all_team()
	{
		$all_team_members = get_posts(array(
			'numberposts' => -1,
			'post_type' => 'team',
		));

		foreach ($all_team_members as $team_member) {
			$member_id = $team_member->ID;
			$member_url = get_permalink($member_id);
			$member_name = $team_member->post_title;
			$member_image = get_the_post_thumbnail_url($member_id);
			$member_position = get_field('work_position', $member_id);

			$member_department_data = get_the_terms($member_id, "departments");
			$member_department_id = $member_department_data[0]->term_id;
			$member_department_name = $member_department_data[0]->name;
			$member_location_data = get_the_terms($member_id, "locations");
			$member_location_name = $member_location_data[0]->name;

			$this->sorted_team_members[$member_department_id][] = array(
				'id' => $member_id,
				'url' => $member_url,
				'name' => $member_name,
				'image' => $member_image,
				'position' => $member_position,
				'department' => $member_department_name,
				'location' => $member_location_name,
			);

		}

		$html_member = '';
		foreach ($this->sorted_team_members as $member) {
			$html_member .= <<<HTML

<div class="member_item">
	<a href="#"><div class="member_image"></div></a>
	<div class="member_name"></div>
	<div class="member_position"></div>
</div>
HTML;
		}
		return "";
	}
}
