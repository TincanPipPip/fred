<?php

/**
 * ----------------------
 * Un.titled
 * Include global CSS & JS files
 * ----------------------
 */

add_action( 'wp_enqueue_scripts', 'fred_assets' );

function fred_assets() {
  wp_enqueue_style( 'global', get_template_directory_uri() . '/dist/css/global.css');
  wp_enqueue_style( 'tailwind', get_template_directory_uri() . '/dist/css/tailwind.css');
  wp_enqueue_script( 'defaults', get_template_directory_uri() . '/dist/js/defaults.js', array(), false, true );
  wp_enqueue_script( 'gutenberg-blocks', get_template_directory_uri() . '/dist/js/gutenbergBlocks.js', array(), false, true );  
  wp_enqueue_script( 'global', get_template_directory_uri() . '/dist/js/global.js', array(), false, true );
  wp_enqueue_script( 'emmsg', get_template_directory_uri() . '/dist/js/emmsg.js', array(), false, true );
}

// Remove GBerg assets when not logged in
add_action( 'wp_print_styles', 'wps_deregister_styles', 100 );

function wps_deregister_styles() {
  if (!is_user_logged_in()) {
    wp_dequeue_style( 'wp-block-library' );
  }
}