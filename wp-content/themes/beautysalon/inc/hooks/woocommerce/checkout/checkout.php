<?php
// delete section with coupon on checkout page
remove_action('woocommerce_before_checkout_form', 'woocommerce_checkout_coupon_form',10);
