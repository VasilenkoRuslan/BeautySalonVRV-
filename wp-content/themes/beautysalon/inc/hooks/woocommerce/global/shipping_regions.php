<?php
/*
 * Country's regions
 */
function countries_regions($regions) {
	$regions['UA'] = array(
	'AK' => 'Autonomous Republic of Crimea',
	'CA' => 'Cherkasy',
	'CB' => 'Chernihiv',
	'CE' => 'Chernivtsi',
	'AE' => 'Dnipropetrovsk',
	'AH' => 'Donetsk',
	'AT' => 'Ivano-Frankivsk',
	'AX' => 'Kharkiv',
	'BT' => 'Kherson',
	'BX' => 'Khmelnytsky',
	'BA' => 'Kirovograd',
	'AA' => 'Kyiv',
	'BB' => 'Luhansk',
	'BC' => 'Lviv',
	'BE' => 'Mykolayiv',
	'BH' => 'Odessa',
	'BI' => 'Poltava',
	'BK' => 'Rivne',
	'BM' => 'Sumy',
	'BO' => 'Ternopil',
	'AB' => 'Vinnytsya',
	'AC' => 'Volyn',
	'AO' => 'Zakarpattya',
	'AP' => 'Zaporizhzhya',
	'AM' => 'Zhytomyr',
);
	return $regions;
}
add_filter( 'woocommerce_states', 'countries_regions' );

/*
 * Rename states to regions
 */
function rename_states_to_regions( $fields ){
$fields['state']['label'] = __('Regions','beautysalon');
	return $fields;
}
add_filter( 'woocommerce_default_address_fields', 'rename_states_to_regions' );
