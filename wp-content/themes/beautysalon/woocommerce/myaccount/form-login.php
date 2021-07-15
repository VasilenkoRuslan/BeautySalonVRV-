<?php
/**
 * Login Form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/form-login.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 4.1.0
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

do_action('woocommerce_before_customer_login_form'); ?>

<?php if ('yes' === get_option('woocommerce_enable_myaccount_registration')) : ?>

<div class="u-columns col2-set" id="customer_login">

	<div class="col-sm-4 col-sm-offset-1">
		<div class="login-form">
			<?php endif; ?>

			<h2><?php esc_html_e('Login to your account', 'beautysalon'); ?></h2>

			<form class="woocommerce-form woocommerce-form-login login" method="post">

				<?php do_action('woocommerce_login_form_start'); ?>

					<input type="text" class="woocommerce-Input woocommerce-Input--text input-text" name="username"
						   id="username" autocomplete="username" placeholder="<?php esc_html_e('Name', 'woocommerce'); ?>"
						   value="<?php echo (!empty($_POST['username'])) ? esc_attr(wp_unslash($_POST['username'])) : ''; ?>"/><?php // @codingStandardsIgnoreLine ?>


					<input class="woocommerce-Input woocommerce-Input--text input-text" type="password" name="password"
						   placeholder="<?php esc_html_e('Password', 'beautysalon'); ?>" id="password" autocomplete="current-password"/>

				<?php do_action('woocommerce_login_form'); ?>

				<span class="remember_me">
						<input class="woocommerce-form__input woocommerce-form__input-checkbox" name="rememberme"
							   type="checkbox" id="rememberme" value="forever"/>
						<?php esc_html_e('Keep me signed in', 'woocommerce'); ?>
					</label>
				</span>
					<?php wp_nonce_field('woocommerce-login', 'woocommerce-login-nonce'); ?>
					<button type="submit" class="woocommerce-button button woocommerce-form-login__submit" name="login"
							value="<?php esc_attr_e('Log in', 'woocommerce'); ?>"><?php esc_html_e('Login', 'beautysalon'); ?></button>

				<?php do_action('woocommerce_login_form_end'); ?>

			</form>

			<?php if ('yes' === get_option('woocommerce_enable_myaccount_registration')) : ?>
		</div>
	</div>

	<div class="col-sm-1">
		<h2 class="or">OR</h2>
	</div>

	<div class="col-sm-4">
		<div class="signup-form">
			<h2><?php esc_html_e('New User Signup!', 'beautysalon'); ?></h2>

			<form method="post"
				  class="woocommerce-form woocommerce-form-register register" <?php do_action('woocommerce_register_form_tag'); ?> >

				<?php do_action('woocommerce_register_form_start'); ?>

				<?php if ('no' === get_option('woocommerce_registration_generate_username')) : ?>

						<input type="text" class="woocommerce-Input woocommerce-Input--text input-text" name="username"
							   id="reg_username" autocomplete="username" placeholder="<?php esc_html_e('Name', 'beautysalon'); ?>"
							   value="<?php echo (!empty($_POST['username'])) ? esc_attr(wp_unslash($_POST['username'])) : ''; ?>"/><?php // @codingStandardsIgnoreLine ?>

				<?php endif; ?>

					<input type="email" class="woocommerce-Input woocommerce-Input--text input-text" name="email"
						   id="reg_email" autocomplete="email" placeholder="<?php esc_html_e('Email Address', 'beautysalon'); ?>"
						   value="<?php echo (!empty($_POST['email'])) ? esc_attr(wp_unslash($_POST['email'])) : ''; ?>"/><?php // @codingStandardsIgnoreLine ?>

				<?php if ('no' === get_option('woocommerce_registration_generate_password')) : ?>

						<input type="password" class="woocommerce-Input woocommerce-Input--text input-text"
							   name="password" placeholder="<?php esc_html_e('Password', 'beautysalon'); ?>"
							   id="reg_password" autocomplete="new-password"/>

				<?php else : ?>

					<p><?php esc_html_e('A password will be sent to your email address.', 'woocommerce'); ?></p>

				<?php endif; ?>

<!--				--><?php //do_action('woocommerce_register_form'); ?>

					<?php wp_nonce_field('woocommerce-register', 'woocommerce-register-nonce'); ?>
					<button type="submit"
							class="woocommerce-Button woocommerce-button button woocommerce-form-register__submit"
							name="register"
							value="<?php esc_attr_e('Register', 'woocommerce'); ?>"><?php esc_html_e('Signup', 'woocommerce'); ?></button>

				<?php do_action('woocommerce_register_form_end'); ?>

			</form>
		</div>
	</div>

</div>
<?php endif; ?>

<?php do_action('woocommerce_after_customer_login_form'); ?>
