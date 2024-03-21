<?php
/**
 * The template for displaying 404 pages (Not Found)
 *
 * Methods for TimberHelper can be found in the /functions sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context = Timber::context();
$timber_post     = new Timber\Post();

$context['post'] = $timber_post;
$context['subnav'] = Timber::get_widgets( 'subnav' );

if ( has_blocks( $timber_post->post_content ) ) {
$blocks = parse_blocks( $post->post_content );
$contentBlocks = [];

foreach ($blocks as $block) {
    $contentBlocks[] = render_block($block);
}

// Output the rest of the content instead of using `post.content`
$context['blocks'] = $contentBlocks;
}

Timber::render( 'pages/404.twig', $context );
