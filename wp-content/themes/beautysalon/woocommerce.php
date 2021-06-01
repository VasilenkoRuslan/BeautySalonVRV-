<?php global $temp_html_dir;
$title = get_the_title();

get_header();
echo get_theme_page_title($title);
echo '<div class="container">';
woocommerce_content();
echo '</div>';

get_footer();
