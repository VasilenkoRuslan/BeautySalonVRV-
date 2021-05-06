<?php
require_once THEME_DIR.'/inc/classes/ThemeTeam.class.php';

$team = new ThemeTeam();

get_header();


echo get_theme_page_title(__('Team','beautysalon'));


?>
	<div class="container">
		<div class="row">
				<?php echo $team->get_departments(); ?>
				<?php $team->get_all_team(); ?>
		</div>
	</div>


<?php get_footer();

