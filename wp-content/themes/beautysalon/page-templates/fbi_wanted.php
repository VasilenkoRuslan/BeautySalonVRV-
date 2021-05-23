<?php
/* Template Name: FBI Wanted page */

get_header();

echo get_theme_page_title(get_the_title());

echo "<div class='container centered'><h2>Most Wanted!</h2></div>";
?>
<div class="FBI_page container">
	<div class="row">
		<div class="col-lg-10 centered office-items">
			<form action="">
				<select name="" id="">
					<option value="">--- Choose the office ---</option>
					<option value="columbia">Columbia</option>
					<option value="portland">Portland</option>
					<option value="detroit">Detroit</option>
				</select>
			</form>
		</div>
	</div>
	<div class="row error-massage">
		<p></p>
	</div>
	<div class="row list_of_criminals">
		<div class="col-6">

		</div>
	</div>
</div>
<?php
get_footer();
