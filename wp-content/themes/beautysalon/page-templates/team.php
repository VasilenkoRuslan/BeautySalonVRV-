<?php
/* Template Name: Team page */

include_once THEME_DIR . '/inc/classes/ThemeTeam.class.php';
$team = new ThemeTeam();

get_header();

echo get_theme_page_title(get_the_title()); ?>

<div class="container team_page">
	<?= $team->display_team_page(); ?>
</div>

<?php
get_footer();
