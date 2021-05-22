<?php
$post_url = get_permalink();
$post_title = get_the_title();

$thumbnail = get_the_post_thumbnail_url(NULL);
$html_thumbnail = (!empty($thumbnail)) ? "<a href='$post_url'><img src='$thumbnail' alt='' style='max-width: 360px;'></a>" : "";

$post_date = get_the_date('d F Y');
$post_author = get_the_author();
$post_content = wp_trim_words(get_the_content(), 30);
$txt_more = __('Read More', 'beautysalon');
?>

	<div class="row">
		<div class="col-9 col-sm-9 col-md-6 col-lg-6">
			<?= $html_thumbnail; ?>
		</div>
		<!-- col-lg-6 -->
		<div class="col-10 col-sm-10 col-md-6 col-lg-6">
			<h4><?php echo "<a href='$post_url'>$post_title</a>"; ?></h4>
			<p><?= $post_content; ?><br>
				<a class="read-more-button-wrap" href="<?= $post_url; ?>"><?= $txt_more; ?></a>
			</p>
			<p>
				<i class="fa fa-calendar"></i><?= $post_date; ?><br/>
				<i class="fa fa-user"></i><?= $post_author; ?><br/>
			</p>
		</div>
	</div>
	<hr>


