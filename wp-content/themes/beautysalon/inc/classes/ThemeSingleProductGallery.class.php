<?
/**
 * The functionality of the gallery Single product page
 */
class ThemeSingleProductGallery
{

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string $plugin_name The string used to uniquely identify this plugin.
	 */
//	private $plugin_name;

	/**
	 * The current version of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string $version The current version of the plugin.
	 */
//	private $version;

//	public function __construct($plugin_name, $plugin_version)
//	{
//		$this->plugin_name = $plugin_name;
//		$this->version = $plugin_version;
//	}


	/**
	 * Include WC template override within plugin
	 */
	public function template_override($template, $template_name, $template_path)
	{
		var_dump($template);
		$plugin_path = plugin_dir_path(__FILE__) . $template_path . $template_name;

		return file_exists($plugin_path) ? $plugin_path : $template;
	}

	public function disable_photo_swipe()
	{
		return false;
	}

	/**
	 * Modify Product Gallery FlexSlider options
	 *
	 * @param array $options FlexSlider options
	 * @return array $options Modified options
	 */
	public function product_carousel_options($options)
	{
		$options['controlNav'] = false;
		$options['sync'] = '#carousel';

		return $options;
	}

}
//class EDM_Product_Gallery_Slider_Public
