<?php global $temp_html_dir;
get_header();
$title = get_the_archive_title();
echo get_theme_page_title($title); ?>
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
<?php get_footer(); ?>
