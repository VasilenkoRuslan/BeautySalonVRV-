<?php
global $product;

$id = $product->get_id();
$url=get_permalink($id);

$title = $product->get_title();

?>

<h2 class="title"><a href="<?php echo $url; ?>" style="font-family: 'Roboto', sans-serif; font-size: 18px; font-weight: 400; color: #696763;"><?php echo $title; ?></a></h2>
