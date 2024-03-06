<?php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST'] );
//define('DISABLE_WP_CRON', true);

/**
 * This config file is yours to hack on. It will work out of the box on Pantheon
 * but you may find there are a lot of neat tricks to be used here.
 *
 * See our documentation for more details:
 *
 * https://pantheon.io/docs
 */

/**
 * Pantheon platform settings. Everything you need should already be set.
 */
define('WPCACHEHOME', '/var/www/html/wp-content/plugins/wp-super-cache/');
$ddev_settings = dirname(__FILE__) . '/wp-config-ddev.php';
if (is_readable($ddev_settings) && !defined('DB_USER')) {
    require_once($ddev_settings);
} elseif (file_exists(dirname(__FILE__) . '/wp-config-pantheon.php') && isset($_ENV['PANTHEON_ENVIRONMENT'])) {
    require_once(dirname(__FILE__) . '/wp-config-pantheon.php');

    /**
     * Local configuration information.
     *
     * If you are working in a local/desktop development environment and want to
     * keep your config separate, we recommend using a 'wp-config-local.php' file,
     * which you should also make sure you .gitignore.
     */
} elseif (file_exists(dirname(__FILE__) . '/wp-config-local.php') && !isset($_ENV['PANTHEON_ENVIRONMENT'])) {
    # IMPORTANT: ensure your local config does not include wp-settings.php
    require_once(dirname(__FILE__) . '/wp-config-local.php');

    /**
     * This block will be executed if you are NOT running on Pantheon and have NO
     * wp-config-local.php. Insert alternate config here if necessary.
     *
     * If you are only running on Pantheon, you can ignore this block.
     */
} else {
    define('DB_NAME',          'database_name');
    define('DB_USER',          'database_username');
    define('DB_PASSWORD',      'database_password');
    define('DB_HOST',          'database_host');
    define('DB_CHARSET',       'utf8');
    define('DB_COLLATE',       '');
    define('AUTH_KEY',         'put your unique phrase here');
    define('SECURE_AUTH_KEY',  'put your unique phrase here');
    define('LOGGED_IN_KEY',    'put your unique phrase here');
    define('NONCE_KEY',        'put your unique phrase here');
    define('AUTH_SALT',        'put your unique phrase here');
    define('SECURE_AUTH_SALT', 'put your unique phrase here');
    define('LOGGED_IN_SALT',   'put your unique phrase here');
    define('NONCE_SALT',       'put your unique phrase here');
}


/** Standard wp-config.php stuff from here on down. **/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * You may want to examine $_ENV['PANTHEON_ENVIRONMENT'] to set this to be
 * "true" in dev, but false in test and live.
 */
if (!defined('WP_DEBUG')) {
    define('WP_DEBUG', false);
}
if (!empty($_ENV['PANTHEON_ENVIRONMENT'])) {
    $site_name = $_ENV['PANTHEON_SITE_NAME'];
    // Override $hostname value as needed.
    switch ($_ENV['PANTHEON_ENVIRONMENT']) {
        case 'live':
            $hostname =  $_SERVER['HTTP_HOST'];
            break;
        case 'test':
            $hostname = 'test-' . $site_name . '.pantheonsite.io';
            break;
        case 'dev':
            $hostname = 'dev-' . $site_name . '.pantheonsite.io';
            break;
        case 'lando':
            $hostname = $site_name . '.lndo.site';
            break;
        default:
            $hostname = $_ENV['PANTHEON_ENVIRONMENT'] . '-' . $site_name . '.pantheonsite.io';
            break;
    }
    define('SCRIPT_DEBUG', true);
    define('MULTISITE', true);
    define('SUBDOMAIN_INSTALL', true);
    define('DOMAIN_CURRENT_SITE', $hostname);
    define('PATH_CURRENT_SITE', '/');
    define('SITE_ID_CURRENT_SITE', 1);
    define('BLOG_ID_CURRENT_SITE', 1);
} else {
    // Override with a default hostname.
    //$hostname = 'gillfishing.com';
}


// Enable WP_DEBUG mode


// Enable Debug logging to the /wp-content/debug.log file
define('WP_DEBUG_LOG', true);

// Disable display of errors and warnings
define('WP_DEBUG_DISPLAY', false);
@ini_set('display_errors', 0);

// Use dev versions of core JS and CSS files (only needed if you are modifying these core files)
/* Multisite */
define('WP_ALLOW_MULTISITE', true );
/* That's all, stop editing! Happy Pressing. */
if (isset($_ENV['PANTHEON_ENVIRONMENT']) && ($_SERVER['HTTP_HOST'] == 'gillfishing.com') && (php_sapi_name() != "cli")) {
    $newurl =  'https://www.gillfishing.com'.$_SERVER['REQUEST_URI'];
    header('HTTP/1.0 301 Moved Permanently');
    header("Location: $newurl");
    // Name transaction "redirect" in New Relic for improved reporting (optional).
    if (extension_loaded('newrelic')) {
      newrelic_name_transaction("redirect");
    }

    exit();
  }
/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH'))
    define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
