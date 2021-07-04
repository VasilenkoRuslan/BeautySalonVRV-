<?php
global $product;

$id = $product->get_id();
$url=get_permalink($id);

$title = $product->get_title();

?>

<h2 class="title"><a href="<?php echo $url; ?>"><?php echo $title; ?></a></h2>
