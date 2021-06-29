<?php
global $product;
$pr_id = $product->get_id();
$pr_link = get_permalink($pr_id);
$pr_img_id = $product->get_image_id();
if(!empty($pr_img_id)) {
	$pr_img = wp_get_attachment_image_url($pr_img_id, 'shop_catalog');
} else {
	$pr_img = wc_placeholder_img_src('shop_catalog');
}
?>
<a href="<?php echo $pr_link; ?>"><img src="<?php echo $pr_img; ?>" alt="thumbnail"></a>

