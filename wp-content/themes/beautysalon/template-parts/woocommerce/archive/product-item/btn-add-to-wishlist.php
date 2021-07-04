<?php
global $product;

$id = $product->get_id();

?>
<li class="add-to-wishlist-<?php echo $id; ?>">
	<a href="#" rel="nofollow" class='add_to_wishlist' data-product-id="<?php echo $id; ?>"><i class="fa fa-plus-square"></i> Add to wishlist</a>
</li>

