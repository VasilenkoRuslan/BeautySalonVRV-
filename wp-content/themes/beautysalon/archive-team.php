<?php
require_once THEME_DIR.'/inc/classes/ThemeTeam.class.php';

$team = new ThemeTeam();

get_header();


echo get_theme_page_title(__('Team','beautysalon'));


?>
	<div class="team_page">
		<?= $team->display_team_page(); ?>
	</div>
<?php get_footer();

