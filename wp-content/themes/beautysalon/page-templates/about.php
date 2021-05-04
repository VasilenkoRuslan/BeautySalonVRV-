<?php
/* Template Name: About page */

include_once THEME_DIR . '/inc/classes/ThemeAbout.class.php';

$about = new ThemeAbout();

$acf_fields = get_field('content');


get_header();

echo get_theme_page_title(get_the_title());

if (!empty($acf_fields)) {
	foreach ($acf_fields as $about_block) {
		$layout = $about_block['acf_fc_layout'];
		switch ($layout) {
			case 'our_skills':
				echo $about->get_our_skills($about_block);
				break;
			case 'img_and_text':
				echo $about->get_img_and_text($about_block);
				break;
		}
	}
}

get_footer();
