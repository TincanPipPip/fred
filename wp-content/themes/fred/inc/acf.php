<?php

/**
 * ----------------------
 * Un.titled
 * ACF customisation
 * ----------------------
 */

/**
 * Enable & setup ACF theme options page
 */

if( function_exists('acf_add_options_page') ) {
  acf_add_options_page(array(
		'page_title' 	=> 'Global content',
		'menu_title'	=> 'Global content',
		'menu_slug' 	=> 'theme-settings',
		'capability'	=> 'edit_posts',
		'redirect'		=> false
	));
}

/**
 * ACF Gutenberg custom blocks setup
 */

add_action( 'acf/init', 'fred_acf' );

function fred_acf() {
  if (!function_exists( 'acf_register_block' ) ) {
    return;
  }
  require 'content-blocks.php';
}

/**
 * ACF Post Object field order results by relevance
 */

add_filter('acf/fields/post_object/query', 'acf_post_object_orderby', 10, 3);

function acf_post_object_orderby( $args, $field, $post_id ) {
  $args['orderby'] = 'relevance';
  return $args;
}

/**
 *  Callback for generating block twig template files
 *
 * @param   array  $block      The block settings and attributes.
 * @param   string $content    The block content (emtpy string).
 * @param   bool   $is_preview True during AJAX preview.
 */

function acf_block( $block, $content = '', $is_preview = false, $post_id ) {
  $context = Timber::context();
  
  // Add post context to access page data
  $context['post'] = new Timber\Post();
  
  // Store block values.
  $context['block'] = $block;
  
  // Store field values.
  $context['fields'] = get_fields();
  
  // Store $is_preview value.
  $context['is_preview'] = $is_preview;
  
  // Add current post to context.
  $context['post'] = Timber::get_post($post_id);

  // Render the block.
  Timber::render( 'templates/blocks/block.twig', $context );
}
