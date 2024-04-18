<?php
/**
* Template Name:Landing Page
*/

$context = Timber::context();

$timber_post     = new Timber\Post();
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

Timber::render( array( 'pages/page-landing.twig' ), $context );