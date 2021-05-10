<?php

class ThemeAbout
{

	function get_img_and_text($data)
	{
		//image
		$image_id = $data['image']['id'];
		$image = wp_get_attachment_image($image_id, 'med-large');
		$html_image = '<div class="flex_image col-10 col-sm-10 col-md-10 col-lg-6 centered">' . $image . '</div>';

		//text
		$text = $data['text'];
		$html_text = '<div class="flex_text col-10 col-sm-10 col-md-10 col-lg-6">' . $text . '</div>';

		//select
		$layout = $data['layout'];

		//display
		$display = ($layout == 'txt_img') ? $html_text . $html_image : $html_image . $html_text;

		$html_block = <<<HTML
<section class="flex_text_and_image container">
	<div class="row justify-content-center">
		{$display}
	</div>
</section>
HTML;
		return $html_block;
	}

	function get_our_skills($data)
	{
		$data_skills = $data['skills'];
		if (empty($data_skills)) {
			return "";
		}

		$html_block_center = "";
		$number_canvas=1;
		foreach ($data_skills as $skill) {
			//canvas number
			$title = $skill['title'];
			$description = $skill['description'];

			if($number_canvas !== 1) {
				$html_block_center .= <<<HTML
		<div class="col-lg-3">
          <canvas id="canvas{$number_canvas}" height="130" width="130"></canvas>
          <br>
          <p><b>{$title}</b></p>
          <p><small>{$description}</small></p>
        </div>
HTML;
			} else {
				$html_block_center .= <<<HTML
		<div class="col-lg-3">
          <canvas id="canvas" height="130" width="130"></canvas>
          <br>
          <p><b>{$title}</b></p>
          <p><small>{$description}</small></p>
        </div>
HTML;
			}
			$number_canvas++;
		}
		$name_block = __('OUR SKILLS','beautysalon');

		$html_block =<<<HTML
<div id="dg">
    <div class="container">
      <div class="row centered">
        <h4>{$name_block}</h4>
        <br>
        {$html_block_center}
      </div>
    </div>
</div>
HTML;
		return $html_block;
	}
}
