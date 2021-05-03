<?php
$acf_footer = get_field('footer', 'options');

/* This is Socials icons at footer */
function footer_social_shortcode()
{
	global $acf_footer;

	if (empty($acf_footer['social_networks'])) {
		return "";
	}
		$social_icons = "";
		foreach ($acf_footer['social_networks'] as $soc) {
			$social_icons .= <<<EOL
<a href="{$soc['network_url']}"><i class="{$soc['icon_class']}"></i></a>
EOL;
		}
		return $social_icons;
}

add_shortcode('footer-social', 'footer_social_shortcode');

/* This is logo at footer */
function footer_logo_shortcode()
{
	global $acf_footer;
	if (empty($acf_footer['logo'])) {
		return "";
	}
		$logo_url = home_url('/');
		$logo_src = wp_get_attachment_image($acf_footer['logo'], array(80, 80));
		$footer_logo = <<<EOL
	<a href="{$logo_url}">{$logo_src}</a>
EOL;
		return $footer_logo;
}

add_shortcode('footer-logo', 'footer_logo_shortcode');

/* This is footer`s description */
function footer_description_shortcode()
{
	global $acf_footer;
	if (empty($acf_footer['footer_description'])) {
		return "";
	}
		$footer_description = <<<EOL
<p class="text-warning text-left">
{$acf_footer['footer_description']}
</p>
EOL;
		return $footer_description;
}

add_shortcode('footer-description', 'footer_description_shortcode');

/* This is block-phone or block="Call me!!!" at footer */
function footer_phone_shortcode()
{
	global $acf_footer;
	if (empty($acf_footer['phone']['phone_title']) || empty($acf_footer['phone']['phone_number'])) {
		return "";
	}
		$tel_title = $acf_footer['phone']['phone_title'];
		$tel_numb = $acf_footer['phone']['phone_number'];
		$phone = <<<EOL
<p class="text-danger">{$tel_title}<br>
<a href="tel:{$tel_numb}"><button class="btn btn-warning">{$tel_numb}</button></a></p>
EOL;
		return $phone;
}

add_shortcode('footer-phone', 'footer_phone_shortcode');
