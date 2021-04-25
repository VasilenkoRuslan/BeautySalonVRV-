<?php global $temp_html_dir; ?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta content="width=device-width, initial-scale=1.0" name="viewport">
	<meta content="" name="keywords">
	<link href="<?= $temp_html_dir; ?>img/apple-touch-icon.png" rel="apple-touch-icon">

	<!-- Google Fonts -->
	<link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900|Raleway:400,300,700,900" rel="stylesheet">

	<!-- Bootstrap CSS File -->
	<link href="<?= $temp_html_dir; ?>lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">

	<!-- Libraries CSS Files -->
	<link href="<?= $temp_html_dir; ?>lib/font-awesome/css/font-awesome.min.css" rel="stylesheet">

	<!-- Main Stylesheet File -->
	<link href="<?= $temp_html_dir; ?>css/style.css" rel="stylesheet">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- Fixed navbar -->
<div class="navbar navbar-inverse navbar-fixed-top">
	<div class="container">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="#">SP<i class="fa fa-circle"></i>T</a>
		</div>
		<div class="navbar-collapse collapse">
			<ul class="nav navbar-nav navbar-right">
				<li class="active"><a href="<?= $temp_html_dir; ?>index.html">HOME</a></li>
				<li><a href="<?= $temp_html_dir; ?>about.html">ABOUT</a></li>
				<li><a href="<?= $temp_html_dir; ?>services.html">SERVICES</a></li>
				<li><a href="<?= $temp_html_dir; ?>works.html">WORKS</a></li>
				<li><a data-toggle="modal" data-target="#myModal" href="#myModal"><i class="fa fa-envelope-o"></i></a>
				</li>
			</ul>
		</div>
		<!--/.nav-collapse -->
	</div>
</div>
