<?php
/**
 * The Template for displaying all single posts
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context         = Timber::context();
$timber_post     = Timber::get_post();
$context['post'] = $timber_post;

if ( has_blocks( $timber_post->post_content ) ) {
  $blocks = parse_blocks( $post->post_content );
  $contentBlocks = [];

  foreach ($blocks as $block) {
    $contentBlocks[] = render_block($block);
  }
  
  // Output the rest of the content instead of using `post.content`
  $context['blocks'] = $contentBlocks;
}

if ( post_password_required( $timber_post->ID ) ) {
	Timber::render( 'pages/single-password.twig', $context );
} else {
	Timber::render( array( 'pages/single-' . $timber_post->post_type . '.twig', 'pages/single-' . $timber_post->slug . '.twig', 'pages/single.twig' ), $context );
}
