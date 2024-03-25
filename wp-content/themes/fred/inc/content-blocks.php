<?php

/**
 * ----------------------
 * Un.titled
 * Gutenberg flexible content blocks
 * ----------------------
 */

acf_register_block( array(
  'name'            => 'text',
  'title'           => __( 'Text', 'fred' ),
  'description'     => __( 'WYSIWYG text', 'fred' ),
  'render_callback' => 'acf_block',
  'category'        => 'content',
  'icon'            => 'text',
  'keywords'        => array( 'copy', 'text' ),
  'supports'        => array(
    'align' => false,
    'align_content' => false,
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'accordion',
  'title'           => __( 'Accordion', 'fred' ),
  'description'     => __( 'Frequently asked questions', 'fred' ),
  'render_callback' => 'acf_block',
  'category'        => 'content',
  'icon'            => 'list-view',
  'keywords'        => array( 'accordion' ),
  'supports'        => array(
    'align' => false,
    'align_content' => false,
  ),
  'enqueue_assets'	=> function(){
    wp_enqueue_script('accordions', get_template_directory_uri() . '/dist/js/admin.accordion.js', array(), null, true );
  },
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'image',
  'title'           => __( 'Image', 'fred' ),
  'description'     => __( 'Single image', 'fred' ),
  'render_callback' => 'acf_block',
  'category'        => 'content',
  'icon'            => 'format-image',
  'keywords'        => array( 'image' ),
  'supports'        => array(
    'align' => false,
    'align_content' => false,
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'gallery',
  'title'           => __( 'Gallery', 'fred' ),
  'description'     => __( 'Image gallery with modal window', 'fred' ),
  'render_callback' => 'acf_block',
  'category'        => 'content',
  'icon'            => 'format-gallery',
  'keywords'        => array( 'images', 'gallery' ),
  'supports'        => array(
    'align' => false,
    'align_content' => false,
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'downloads',
  'title'           => __( 'Downloads', 'fred' ),
  'description'     => __( 'Attach files for download', 'fred' ),
  'render_callback' => 'acf_block',
  'category'        => 'content',
  'icon'            => 'download',
  'keywords'        => array( 'download', 'file' ),
  'supports'        => array(
    'align' => false,
    'align_content' => false,
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'embed',
  'title'           => __( 'Embed', 'fred' ),
  'description'     => __( 'Embed content from an external site', 'fred' ),
  'render_callback' => 'acf_block',
  'category'        => 'content',
  'icon'            => 'embed-generic',
  'keywords'        => array( 'embed' ),
  'supports'        => array(
    'align' => false,
    'align_content' => false,
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'testimonial',
  'title'           => __( 'Testimonial', 'fred' ),
  'description'     => __( 'Testimonial', 'testimonial or review', 'fred' ),
  'render_callback' => 'acf_block',
  'category'        => 'content',
  'icon'            => 'format-testimonial',
  'keywords'        => array( 'testimonial', 'testimonial', 'review' ),
  'supports'        => array(
    'align' => false,
    'align_content' => false,
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'quote',
  'title'           => __( 'Quote', 'fred' ),
  'description'     => __( 'Quote, testimonial or review', 'fred' ),
  'render_callback' => 'acf_block',
  'category'        => 'content',
  'icon'            => 'format-quote',
  'keywords'        => array( 'quote', 'testimonial', 'review' ),
  'supports'        => array(
    'align' => false,
    'align_content' => false,
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'linkedlogos',
  'title'           => __( 'Linked Logos', 'fred' ),
  'description'     => __( 'List of linked logos', 'fred' ),
  'render_callback' => 'acf_block',
  'category'        => 'content',
  'icon'            => 'forms',
  'keywords'        => array( 'logos', 'linked' ),
  'supports'        => array(
    'align' => false,
    'align_content' => false,
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'cta',
  'title'           => __( 'CTA', 'fred' ),
  'description'     => __( 'Call to action button', 'fred' ),
  'render_callback' => 'acf_block',
  'category'        => 'content',
  'icon'            => 'button',
  'keywords'        => array( 'button', 'link', 'cta' ),
  'supports'        => array(
    'align' => false,
    'align_content' => false,
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'imagetext',
  'title'           => __( 'Image Text', 'fred' ),
  'description'     => __( 'Image & Text', 'fred' ),
  'render_callback' => 'acf_block',
  'category'        => 'content',
  'icon'            => 'id-alt',
  'keywords'        => array( 'image', 'text' ),
  'supports'        => array(
    'align' => false,
    'align_content' => false,
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'video',
  'title'           => __( 'Video', 'fred' ),
  'description'     => __( 'Video embed', 'fred' ),
  'render_callback' => 'acf_block',
  'category'        => 'content',
  'icon'            => 'video-alt3',
  'keywords'        => array( 'video', 'vimeo', 'youtube' ),
  'supports'        => array(
    'align' => false,
    'align_content' => false,
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'signpost',
  'title'           => __( 'Flexible signpost', 'fred' ),
  'description'     => __( 'Flexible signpost block', 'fred' ),
  'render_callback' => 'acf_block',
  'category'        => 'content',
  'icon'            => 'id',
  'keywords'        => array( 'signpost', 'flexible' ),
  'supports'        => array(
    'align' => false,
    'align_content' => false,
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'highlightedpanel',
  'title'           => __( 'Highlighted Panel', 'fred' ),
  'description'     => __( 'Highlighted Panel block', 'fred' ),
  'render_callback' => 'acf_block',
  'category'        => 'content',
  'icon'            => 'feedback',
  'keywords'        => array( 'highlightedpanel', 'flexible' ),
  'supports'        => array(
    'align' => false,
    'align_content' => false,
  ),
  'mode'            => 'auto',
) );

acf_register_block( array(
  'name'            => 'signpostsection',
  'title'           => __( 'Signpost Section', 'fred' ),
  'description'     => __( 'Signpost Section block', 'fred' ),
  'render_callback' => 'acf_block',
  'category'        => 'content',
  'icon'            => 'feedback',
  'keywords'        => array( 'signpostsection', 'flexible' ),
  'supports'        => array(
    'align' => false,
    'align_content' => false,
  ),
  'mode'            => 'auto',
) );