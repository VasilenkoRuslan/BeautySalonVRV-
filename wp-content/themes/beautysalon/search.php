<?php get_header(); ?>
<div class="container">
	<div class="row">
<?php
$s=get_search_query();
$args = array(
		's' =>$s
);
// The Query
$the_query = new WP_Query( $args );
if ( $the_query->have_posts() ) { ?>
	<h2 style='font-weight:bold;color:#000'><?php echo __("Search Results for: ","beautysalon").get_query_var('s'); ?></h2>
	<?php
	while ( $the_query->have_posts() ) {
		$the_query->the_post();
		?>
		<li>
			<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
		</li>
		<?php
	}
}else{
	?>
	<h2 style='font-weight:bold;color:#000'><?php _e('Nothing Found', 'beautysalon'); ?></h2>
	<div class="alert alert-info">
		<p><?php _e('Sorry, but nothing matched your search criteria. Please try again with some different keywords.','beautysalon'); ?></p>
	</div>
<?php } ?>

<?php get_sidebar(); ?>
	</div>
</div>
<?php get_footer(); ?>
