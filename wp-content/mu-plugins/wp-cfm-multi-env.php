<?php
/*
Plugin Name: WP-CFM Multi-environment 
Description: Enables configuration management for multiple environments with WP-CFM.
*/

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @param array $environments - Default is an empty array [] meaning multi environment config is disabled.
 * @return array 
 */
function enable_multi_env( $environments ) {
    // Define an array containing the hosting environment names. 
    // Or detect these with your own code logic if all are available in `$_ENV` or `$_SERVER` super-globals. 
    // ...

    $environments = [
        'dev',
        'stage',
        'prod'
    ];

    return $environments;
}
add_filter( 'wpcfm_multi_env', 'enable_multi_env' );


/**
 * @param string $env - Default is an empty string ''.
 * @return string 
 */
function set_current_env( $env ) {
    // Detect with your own code logic the current environment the WordPress site is running.
    // Generally this will be defined in a constant inside `$_ENV` or `$_SERVER` super-globals.
    // ...

    $env = 'dev';

    return $env;
}
add_filter( 'wpcfm_current_env', 'set_current_env' );