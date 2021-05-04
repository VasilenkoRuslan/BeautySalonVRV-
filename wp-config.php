<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

$cred_name= ($_SERVER['HTTP_HOST'] == 'beauty.loc') ? 'dev' : 'prod';

require_once 'credentials.php';
global $cred;

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', $cred[$cred_name]['DB_NAME'] );

/** MySQL database username */
define( 'DB_USER', $cred[$cred_name]['DB_USER'] );


/** MySQL database password */
define( 'DB_PASSWORD', $cred[$cred_name]['DB_PASSWORD'] );

/** MySQL hostname */
define( 'DB_HOST', $cred[$cred_name]['DB_HOST'] );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'AW2^Q7f(xAHr;$E+)5|E%B6xv?<1cMqL_sL]=&:Pun|g<QJGgMtrTFQ;?W{1K$K]' );
define( 'SECURE_AUTH_KEY',  '#*49_oWe..PW]$ANAU;Hlj+#r&LaupFQ@`uUkzF![_!p_].aJ<i.}N5]1U1g:%eI' );
define( 'LOGGED_IN_KEY',    '4cnTN=>I]ZcYk=_ON@KVr1$4;!EW^JSN{dMBZC6&/Q6aJMJgMw.m|fdF`^V99g(q' );
define( 'NONCE_KEY',        '2,13pj%[pvuU(GWLGeFYp+vAej5Fj]w :08HRR:8Ayq*s&$}E6R:lOl<Vf JDiaG' );
define( 'AUTH_SALT',        'ps=R,#G#F-r/hny,_ AU/*un(;&{6zR2]FAemu99$gHFEhN2|:UB)k]Hk<DX&W?U' );
define( 'SECURE_AUTH_SALT', 'xZZbl&WqbR:K/:(`2?]o?StjC+{kif3?J3#&q(=Q350[R5/pm{SGm$?(H [OGZ_;' );
define( 'LOGGED_IN_SALT',   'NBG1S1Y7VV#@0rR7!!K14fP3-a7=cmCt3wb+hBB(;581E~gfM/Zsz]9J#lNSAwz:' );
define( 'NONCE_SALT',       '4Qfwctc{qe<rKTDtgLV(~Cx!0/Q>oGmd(/08V@Q6?L)P%f7EX L2<AK]mRYV/PJ>' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', true );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
define('FS_METHOD', 'direct');
