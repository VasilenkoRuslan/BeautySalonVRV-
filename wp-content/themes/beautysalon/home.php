<?php global $temp_html_dir;
global $wp_query;
$page_title = $wp_query->queried_object->post_title;

get_header();
echo get_theme_page_title($page_title); ?>
<div class="container desc">
	<div class="row">
		<div class="col-9 col-md-9 col-lg-9">
			<?php
			if (have_posts()) {
				while (have_posts()) {
					the_post();
					get_template_part('template-parts/posts/post', 'item');
				}
				echo get_the_posts_pagination(array(
						'prev_text' => '«',
						'next_text' => '»',
						'screen_reader_text' => __('&nbsp;'),
						'aria_label' => '',
				));
			} else {
				echo __('Sorry, no posts!', 'beautysalon');
			}
			?>
		</div>
		<div class="sidebar col-3 col-md-3 col-lg-3">
			<?php get_sidebar(); ?>
		</div>
	</div>
</div>
<!-- container -->

<div id="r">
	<div class="container">
		<div class="row centered">
			<div class="col-lg-8 col-lg-offset-2">
				<h4>WE ARE STORYTELLERS. BRANDS ARE OUR SUBJECTS. DESIGN IS OUR VOICE.</h4>
				<p>We believe ideas come from everyone, everywhere. At OurCompany, everyone within our agency walls is a
					designer in their own right. And there are a few principles we believe—and we believe everyone
					should believe—about our design craft. These truths
					drive us, motivate us, and ultimately help us redefine the power of design.</p>
			</div>
		</div>
		<!-- row -->
	</div>
	<!-- container -->
</div>
<?php get_footer(); ?>
