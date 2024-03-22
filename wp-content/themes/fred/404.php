<?php
/**
 * The template for displaying 404 pages (Not Found)
 * 
 * Template Name:404 Page
 *
 * Methods for TimberHelper can be found in the /functions sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context = Timber::context();
$post_id = get_field('fourohfour_select_404_page', 'options');
$timber_post = get_post($post_id);
setup_postdata($timber_post);
$context['post'] = $timber_post;

if ( has_blocks( $timber_post->post_content ) ) {
    $blocks = parse_blocks( $timber_post->post_content );
    $contentBlocks = [];
    foreach ($blocks as $block) {
        $contentBlocks[] = render_block($block);
    }

    // Output the rest of the content instead of using `post.content`
    $context['blocks'] = $contentBlocks;
}

Timber::render( 'pages/404.twig', $context );
