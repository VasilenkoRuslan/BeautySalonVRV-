<?php
/* Template Name: FBI Wanted page */

get_header();

echo get_theme_page_title(get_the_title());

?>
	<div class="FBI_page container">
		<div class="row">
			<div class="col-lg-12 centered office-items">
				<select id="fbi-field-offices">
					<option value="false" selected
							disabled>--- <?php _ex('Choose the office', 'fbi-page', 'beautysalon'); ?> ---</option>
					<option value="albany"><?php _ex('Albany', 'fbi-page', 'beautysalon'); ?></option>
					<option value="albuquerque"><?php _ex('Albuquerque', 'fbi-page', 'beautysalon'); ?></option>
					<option value="anchorage"><?php _ex('Anchorage', 'fbi-page', 'beautysalon'); ?></option>
					<option value="atlanta"><?php _ex('Atlanta', 'fbi-page', 'beautysalon'); ?></option>
					<option value="baltimore"><?php _ex('Baltimore', 'fbi-page', 'beautysalon'); ?></option>
					<option value="birmingham"><?php _ex('Birmingham', 'fbi-page', 'beautysalon'); ?></option>
					<option value="boston"><?php _ex('Boston', 'fbi-page', 'beautysalon'); ?></option>
					<option value="buffalo"><?php _ex('Buffalo', 'fbi-page', 'beautysalon'); ?></option>
					<option value="charlotte"><?php _ex('Charlotte', 'fbi-page', 'beautysalon'); ?></option>
					<option value="chicago"><?php _ex('Chicago', 'fbi-page', 'beautysalon'); ?></option>
					<option value="cincinnati"><?php _ex('Cincinnati', 'fbi-page', 'beautysalon'); ?></option>
					<option value="cleveland"><?php _ex('Cleveland', 'fbi-page', 'beautysalon'); ?></option>
					<option value="columbia"><?php _ex('Columbia', 'fbi-page', 'beautysalon'); ?></option>
					<option value="dallas"><?php _ex('Dallas', 'fbi-page', 'beautysalon'); ?></option>
					<option value="denver"><?php _ex('Denver', 'fbi-page', 'beautysalon'); ?></option>
					<option value="detroit"><?php _ex('Detroit', 'fbi-page', 'beautysalon'); ?></option>
					<option value="elpaso"><?php _ex('El Paso', 'fbi-page', 'beautysalon'); ?></option>
					<option value="honolulu"><?php _ex('Honolulu', 'fbi-page', 'beautysalon'); ?></option>
					<option value="houston"><?php _ex('Houston', 'fbi-page', 'beautysalon'); ?></option>
					<option value="indianapolis"><?php _ex('Indianapolis', 'fbi-page', 'beautysalon'); ?></option>
					<option value="jackson"><?php _ex('Jackson', 'fbi-page', 'beautysalon'); ?></option>
					<option value="jacksonville"><?php _ex('Jacksonville', 'fbi-page', 'beautysalon'); ?></option>
					<option value="kansas"><?php _ex('Kansas City', 'fbi-page', 'beautysalon'); ?></option>
					<option value="knoxville"><?php _ex('Knoxville', 'fbi-page', 'beautysalon'); ?></option>
					<option value="lasvegas"><?php _ex('Las Vegas', 'fbi-page', 'beautysalon'); ?></option>
					<option value="littlerock"><?php _ex('Little Rock', 'fbi-page', 'beautysalon'); ?></option>
					<option value="losangeles"><?php _ex('Los Angeles', 'fbi-page', 'beautysalon'); ?></option>
					<option value="louisville"><?php _ex('Louisville', 'fbi-page', 'beautysalon'); ?></option>
					<option value="memphis"><?php _ex('Memphis', 'fbi-page', 'beautysalon'); ?></option>
					<option value="miami"><?php _ex('Miami', 'fbi-page', 'beautysalon'); ?></option>
					<option value="milwaukee"><?php _ex('Milwaukee', 'fbi-page', 'beautysalon'); ?></option>
					<option value="minneapolis"><?php _ex('Minneapolis', 'fbi-page', 'beautysalon'); ?></option>
					<option value="mobile"><?php _ex('Mobile', 'fbi-page', 'beautysalon'); ?></option>
					<option value="newheaven"><?php _ex('New Heaven', 'fbi-page', 'beautysalon'); ?></option>
					<option value="neworleans"><?php _ex('New Orleans', 'fbi-page', 'beautysalon'); ?></option>
					<option value="newyork"><?php _ex('New York', 'fbi-page', 'beautysalon'); ?></option>
					<option value="newark"><?php _ex('Newark', 'fbi-page', 'beautysalon'); ?></option>
					<option value="norfolk"><?php _ex('Norfolk', 'fbi-page', 'beautysalon'); ?></option>
					<option value="oklahomacity"><?php _ex('Oklahoma City', 'fbi-page', 'beautysalon'); ?></option>
					<option value="omaha"><?php _ex('Omaha', 'fbi-page', 'beautysalon'); ?></option>
					<option value="philadelphia"><?php _ex('Philadelphia', 'fbi-page', 'beautysalon'); ?></option>
					<option value="phoenix"><?php _ex('Phoenix', 'fbi-page', 'beautysalon'); ?></option>
					<option value="pittsburgh"><?php _ex('Pittsburgh', 'fbi-page', 'beautysalon'); ?></option>
					<option value="portland"><?php _ex('Portland', 'fbi-page', 'beautysalon'); ?></option>
					<option value="richmond"><?php _ex('Richmond', 'fbi-page', 'beautysalon'); ?></option>
					<option value="sacramento"><?php _ex('Sacramento', 'fbi-page', 'beautysalon'); ?></option>
					<option value="saltlakecity"><?php _ex('Salt Lake City', 'fbi-page', 'beautysalon'); ?></option>
					<option value="sanantonio"><?php _ex('San Antonio', 'fbi-page', 'beautysalon'); ?></option>
					<option value="sandiego"><?php _ex('San Diego', 'fbi-page', 'beautysalon'); ?></option>
					<option value="sanfrancisco"><?php _ex('San Francisco', 'fbi-page', 'beautysalon'); ?></option>
					<option value="sanjuan"><?php _ex('San Juan', 'fbi-page', 'beautysalon'); ?></option>
					<option value="seattle"><?php _ex('Seattle', 'fbi-page', 'beautysalon'); ?></option>
					<option value="springfield"><?php _ex('Springfield', 'fbi-page', 'beautysalon'); ?></option>
					<option value="stlouis"><?php _ex('St. Louis', 'fbi-page', 'beautysalon'); ?></option>
					<option value="tampa"><?php _ex('Tampa', 'fbi-page', 'beautysalon'); ?></option>
					<option value="washingtondc"><?php _ex('Washington DC', 'fbi-page', 'beautysalon'); ?></option>
				</select>
			</div>
		</div>
		<div class="row fbi_results">
			<div class="spinner-grow spinner-grow-lg load_spin" role="status">
				<span class="sr-only">Loading...</span>
			</div>
			<div class="error_message">
			</div>
			<div class="no_data">
				<p><?= _x('This office not has wanted items!', 'fbi-page', 'beautysalon'); ?></p>
			</div>
			<div class="list_of_prisoners">
			</div>
			<div class="centered pagination-block">
				<ul class="pagination page-numbers"></ul>
			</div>
		</div>
	</div>
<?php
get_footer();
