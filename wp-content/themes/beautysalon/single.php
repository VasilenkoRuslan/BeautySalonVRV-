<?php global $temp_html_dir;
$title = get_the_title();
$breadcrumbs = yoast_breadcrumb('</div><div id="breadcrumbs">', '</div><div>', FALSE);
$thumbnail_url = get_the_post_thumbnail(NULL,'Medium');
$date = get_the_date('d F Y');
$content = get_the_content(); ?>

<?php get_header(); ?>
<div id="blue">
	<div class="container">
		<div class="row centered">
			<div class="col-lg-12">
				<h2><?= $title; ?></h2>
				<div id="breadcrumbs"><?= $breadcrumbs; ?></div>
			</div>
		</div>
	</div>
</div>
<div class="container desc">
	<div class="row">
		<br><br>
		<div class="col-lg-12 justify-content-center text-left">
			<?= $thumbnail_url; ?>
		</div>
		<div class="col-lg-12 justify-content-center text-left">
			<h4><?= $title; ?></h4>
			<h5><?= $date; ?></h5>
		</div>
		<div class="col-lg-12">
			<p ><?= $content ?></p>
			<p>
				<i class="fa fa-circle-o"></i> Mobile Design<br/>
				<i class="fa fa-circle-o"></i> Web Design<br/>
				<i class="fa fa-circle-o"></i> Development<br/>
				<i class="fa fa-link"></i> <a href="#">Example.com</a>
			</p>
		</div>
	</div>
	<!-- row -->


	<br><br>
</div>
<!-- container -->

<div id="r">
	<div class="container">
		<div class="row centered">
			<div class="col-lg-12">
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
<?php
get_footer();
?>
