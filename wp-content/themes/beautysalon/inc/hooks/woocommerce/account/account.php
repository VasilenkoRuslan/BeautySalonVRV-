<?php
/*
 * display account tabs
 */
function beauty_one_more_link( $menu_links )
{
	$menu_links = array_slice($menu_links, 0, 4, true)
		+ array('refund' => 'Refund')
		+ array_slice($menu_links, 4, NULL, true);

	return $menu_links;
}
add_filter ( 'woocommerce_account_menu_items', 'beauty_one_more_link' );

/*
 * register account url
 */
function beauty_add_endpoint() {

	// WP_Rewrite is my Achilles' heel, so please do not ask me for detailed explanation
	add_rewrite_endpoint( 'refund', EP_PAGES );

}
add_action( 'init', 'beauty_add_endpoint' );

/*
 * add refund content
 */
function beauty_account_refund_content () {

	// of course you can print dynamic content here, one of the most useful functions here is get_current_user_id()
	$refund_content = <<<HTML
<h1>Returns Policy</h1>
<p>
Changed your mind? Don’t worry, you can return items in store, by post or via our online portal.
We’ll be happy to exchange or refund within 14 days of purchase if you bought the items in store, or within 14 days of you receiving the items if you ordered them online. Items must be returned with the original receipt, unworn and in the condition they were purchased, including all packaging. The refund will be issued on the method of payment you used.
</p>
HTML;

	echo $refund_content;
}
add_action( 'woocommerce_account_refund_endpoint', 'beauty_account_refund_content' );
