<?php

/**
 * ----------------------
 * Un.titled
 * Gutenberg customisation
 * ----------------------
 */

/**
 * Remove patterns
 */

remove_theme_support( 'core-block-patterns' );


/**
 * Allow custom editor styling
 */
add_theme_support( 'editor-styles' );

function willie_add_editor_styles() {
  add_editor_style( 'style-editor.css' );
}

add_action( 'admin_init', 'willie_add_editor_styles' );


/**
 * Remove Gutenberg default styling
 */

// add_filter( 'block_editor_settings' , 'remove_gutenberg_wrapper_styles' );

// function remove_gutenberg_wrapper_styles( $settings ) {
//   unset($settings['styles'][0]);

//   return $settings;
// }


/**
 * Restrict available Gutenberg blocks
 */

add_filter('allowed_block_types', 'allowed_blocks', 10, 2);

function allowed_blocks( $allowed_blocks, $post ){
  $allowed_blocks = array(
    'acf/text',
    'acf/accordion',
    'acf/image',
    'acf/gallery',
    'acf/downloads',
    'acf/embed',
    'acf/testimonial',
    'acf/linkedlogos',
    'acf/cta',
    'acf/imagetext',
    'acf/video',
    'acf/table',
  );
  
  return $allowed_blocks;
}
