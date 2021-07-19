<?php

/**
 * Override WC woocommerce_show_product_images()
 */
if ( ! function_exists( 'woocommerce_show_product_images' ) ) {

	/**
	 * Output the product image before the single product summary.
	 */
	function woocommerce_show_product_images() {
		wc_get_template( 'single-product/product-image.php' );
	}
}

/**
 * Get HTML for a gallery thumbnail.
 *
 * Woocommerce_gallery_thumbnail_size, woocommerce_gallery_image_size and woocommerce_gallery_full_size accept name based image sizes, or an array of width/height values.
 *
 * @since 1.0.0
 * @param int  $attachment_id Attachment ID.
 * @return string
 */
function edm_get_gallery_thumbnail( $attachment_id ) {
	$gallery_thumbnail = wc_get_image_size( 'gallery_thumbnail' );
	$thumbnail_size    = apply_filters( 'beauty_gallery_thumbnail_size', array( $gallery_thumbnail['width'], $gallery_thumbnail['height'] ) );
	$full_size         = apply_filters( 'beauty_gallery_full_size', apply_filters( 'beauty_product_thumbnails_large_size', 'full' ) );
	$thumbnail_src     = wp_get_attachment_image_src( $attachment_id, 'shop_thumbnail' );
	$alt_text          = trim( wp_strip_all_tags( get_post_meta( $attachment_id, '_wp_attachment_image_alt', true ) ) );
	$full_src          = wp_get_attachment_image_src( $attachment_id, $full_size );
	$image             = wp_get_attachment_image( $attachment_id, 'shop_thumbnail' );

	return '<div data-thumb="' . esc_url( $thumbnail_src[0] ) . '" data-thumb-alt="' . esc_attr( $alt_text ) . '" class="woocommerce-product-gallery__image">' . $image . '</div>';
}

/**
 * Get HTML for a gallery image.
 *
 * Hooks: woocommerce_gallery_thumbnail_size, woocommerce_gallery_image_size and woocommerce_gallery_full_size accept name based image sizes, or an array of width/height values.
 *
 * @since 3.3.2
 * @param int  $attachment_id Attachment ID.
 * @param bool $main_image Is this the main image or a thumbnail?.
 * @return string
 */
function beauty_wc_get_gallery_image_html( $attachment_id, $main_image = false ) {
	$flexslider        = (bool) apply_filters( 'woocommerce_single_product_flexslider_enabled', get_theme_support( 'wc-product-gallery-slider' ) );
	$gallery_thumbnail = wc_get_image_size( 'gallery_thumbnail' );
	$thumbnail_size    = apply_filters( 'woocommerce_gallery_thumbnail_size', array( $gallery_thumbnail['width'], $gallery_thumbnail['height'] ) );
	$image_size        = apply_filters( 'woocommerce_gallery_image_size', $flexslider || $main_image ? 'woocommerce_single' : $thumbnail_size );
	$full_size         = apply_filters( 'woocommerce_gallery_full_size', apply_filters( 'woocommerce_product_thumbnails_large_size', 'full' ) );
	$thumbnail_src     = wp_get_attachment_image_src( $attachment_id, $thumbnail_size );
	$full_src          = wp_get_attachment_image_src( $attachment_id, $full_size );
	$alt_text          = trim( wp_strip_all_tags( get_post_meta( $attachment_id, '_wp_attachment_image_alt', true ) ) );
	$image             = wp_get_attachment_image(
		$attachment_id,
		$image_size,
		false,
		apply_filters(
			'woocommerce_gallery_image_html_attachment_image_params',
			array(
				'title'                   => _wp_specialchars( get_post_field( 'post_title', $attachment_id ), ENT_QUOTES, 'UTF-8', true ),
				'data-caption'            => _wp_specialchars( get_post_field( 'post_excerpt', $attachment_id ), ENT_QUOTES, 'UTF-8', true ),
				'data-src'                => esc_url( $full_src[0] ),
				'data-large_image'        => esc_url( $full_src[0] ),
				'data-large_image_width'  => esc_attr( $full_src[1] ),
				'data-large_image_height' => esc_attr( $full_src[2] ),
				'class'                   => esc_attr( $main_image ? 'wp-post-image' : '' ),
			),
			$attachment_id,
			$image_size,
			$main_image
		)
	);

	return '<div data-thumb="' . esc_url( $thumbnail_src[0] ) . '" data-thumb-alt="' . esc_attr( $alt_text ) . '" class="woocommerce-product-gallery__image">' . $image . '</div>';
}
