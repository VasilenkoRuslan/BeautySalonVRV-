<?php
$acf_footer = get_field('footer', 'options');

/* This is Socials icons at footer */
function footer_social_shortcode()
{
	if (empty(get_field('footer_social_networks', 'options'))) {
		return "";
	}
		$social_icons = "";
		foreach (get_field('footer_social_networks', 'options') as $soc) {
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
	if (empty($get_logo = get_field('footer_logo', 'options'))) {
		return "";
	}
		$logo_url = home_url('/');
		$footer_logo = <<<EOL
	<a class="logo" href="{$logo_url}"><img src="{$get_logo}" style="max-width: 100px;" alt=""></a>
EOL;
		return $footer_logo;
}

add_shortcode('footer-logo', 'footer_logo_shortcode');

/* This is footer`s description */
function footer_description_shortcode()
{
	if (empty( $description = get_field('footer_footer_description', 'options'))) {
		return "";
	}
		$footer_description = <<<HTML
<p class="text-warning text-left">
{$description}
</p>
HTML;
		return $footer_description;
}

add_shortcode('footer-description', 'footer_description_shortcode');

/* This is block-phone or block="Call me!!!" at footer */
function footer_phone_shortcode()
{
	if (empty($tel_title = get_field('footer_phone_phone_title', 'options')) || empty($tel_numb = get_field('footer_phone_phone_number', 'options'))) {
		return "";
	}
		$phone = <<<EOL
<p class="text-danger">{$tel_title}<br>
<a href="tel:{$tel_numb}"><button class="btn btn-warning">{$tel_numb}</button></a></p>
EOL;
		return $phone;
}

add_shortcode('footer-phone', 'footer_phone_shortcode');

/* This is red block description at footer */
function footer_red_shortcode()
{
	if (empty($description_red_title = get_field('footer_description_red_red_title', 'options')) || empty($description_red_text = get_field('footer_description_red_red_text', 'options'))) {
		return "";
	}
	$footer_description_red = <<<HTML
<div id="r">
	<div class="container">
		<div class="row centered">
			<div class="col-lg-12">
				<h4>{$description_red_title}</h4>
				<p>{$description_red_text}</p>
			</div>
		</div>
		<!-- row -->
	</div>
	<!-- container -->
</div>
HTML;
	return $footer_description_red;
}

add_shortcode('footer-red', 'footer_red_shortcode');
