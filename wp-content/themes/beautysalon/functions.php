<?php
define('THEME_DIR', get_template_directory());
define('THEME_DIR_URI', get_template_directory_uri());

$temp_html_dir = THEME_DIR_URI . '/temp-spot-beauty/'; //TODO delete before production

require_once THEME_DIR . '/inc/helpers/file.php';
require_once THEME_DIR . '/inc/helpers/theme.php';
require_once THEME_DIR . '/inc/helpers/string.php';
require_once THEME_DIR . '/inc/helpers/beauty-product-gallery-template-functions.php';

require_once THEME_DIR . '/inc/wp/enqueue_scripts.php';
require_once THEME_DIR . '/inc/wp/theme_support.php';
require_once THEME_DIR . '/inc/wp/image-sizes.php';
require_once THEME_DIR . '/inc/wp/widget_arias.php';
require_once THEME_DIR . '/inc/wp/menus.php';
require_once THEME_DIR . '/inc/acf/options-pages.php';

require_once THEME_DIR . '/inc/hooks/images.php';
require_once THEME_DIR . '/inc/hooks/googlemaps.php';
require_once THEME_DIR . '/inc/hooks/woocommerce/woocommerce_init.php';

require_once THEME_DIR . '/inc/shortcodes/footer_shortcodes.php';

require_once THEME_DIR . '/inc/ajax/fbi_wanted.php';
require_once THEME_DIR . '/inc/ajax/header_icon_counters.php';




