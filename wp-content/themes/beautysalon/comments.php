<?php
/**
 * The template file for displaying the comments and comment form for the
 * Beauty theme.
 *
 * @package WordPress
 * @subpackage Beauty
 * @since Beauty 1.0
 */

/*
 * If the current post is protected by a password and
 * the visitor has not yet entered the password we will
 * return early without loading the comments.
*/
if ( post_password_required() ) {
	return;
}
if ( $comments ) {
	?>

	<div class="comments" id="comments">

		<?php
		$comments_number = absint( get_comments_number() );
		?>

		<div class="comments-header section-inner small max-percentage">

			<h2 class="comment-reply-title">
				<?php
	if (have_comments()) {
		$comments_num = get_comments_number();
		$comments_text_count = decl_of_num($comments_num, array(
				__('%d comment', 'beautysalon'),
				_x('%d comments','2-4','beautysalon'),
				__("%d comments",'beautysalon'),
		)); ?>
		<h2 class="comments-title"><?= $comments_text_count; ?></h2>
	<?php } ?>
			</h2><!-- .comments-title -->

		</div><!-- .comments-header -->

		<div class="comments-inner section-inner thin max-percentage">

			<?php
			wp_list_comments(
					array(
							'avatar_size' => 50,
							'style'       => 'div',
					)
			);

			$comment_pagination = paginate_comments_links(
					array(
							'echo'      => false,
							'end_size'  => 0,
							'mid_size'  => 0,
							'next_text' => __( 'Newer Comments', 'beautysalon' ) . ' <span aria-hidden="true">&rarr;</span>',
							'prev_text' => '<span aria-hidden="true">&larr;</span> ' . __( 'Older Comments', 'beautysalon' ),
					)
			);

			if ( $comment_pagination ) {
				$pagination_classes = '';

				// If we're only showing the "Next" link, add a class indicating so.
				if ( false === strpos( $comment_pagination, 'prev page-numbers' ) ) {
					$pagination_classes = ' only-next';
				}
				?>

				<nav class="comments-pagination pagination<?php echo $pagination_classes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- static output ?>" aria-label="<?php esc_attr_e( 'Comments', 'twentytwenty' ); ?>">
					<?php echo wp_kses_post( $comment_pagination ); ?>
				</nav>

				<?php
			}
			?>

		</div><!-- .comments-inner -->

	</div><!-- comments -->

	<?php
}

if ( comments_open() || pings_open() ) {

	if ( $comments ) {
		echo '<hr class="styled-separator is-style-wide" aria-hidden="true" />';
	}

	comment_form(
			array(
					'class_form'         => 'section-inner thin max-percentage',
					'title_reply_before' => '<h2 id="reply-title" class="comment-reply-title">',
					'title_reply_after'  => '</h2>',
			)
	);

} elseif ( is_single() ) {

	if ( $comments ) {
		echo '<hr class="styled-separator is-style-wide" aria-hidden="true" />';
	}

	?>

	<div class="comment-respond" id="respond">

		<p class="comments-closed"><?php _e( 'Comments are closed.', 'beautysalon' ); ?></p>

	</div><!-- #respond -->

	<?php
}
