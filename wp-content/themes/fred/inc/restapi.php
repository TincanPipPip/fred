<?php

/**
 * ----------------------
 * Un.titled
 * REST API customisation
 * ----------------------
 */

/**
 * Add full image url to REST API
 */
add_action('rest_api_init', 'register_rest_images' );

function register_rest_images(){
  register_rest_field( array('members'),
    'fimg',
    array(
        'get_callback'    => 'get_rest_featured_image',
        'update_callback' => null,
        'schema'          => null,
    )
  );
  register_rest_field( array('post'),
      'fimg',
      array(
          'get_callback'    => 'get_rest_featured_image',
          'update_callback' => null,
          'schema'          => null,
      )
  );
}

function get_rest_featured_image( $object, $field_name, $request ) {
  if( $object['featured_media'] ){
      $img = wp_get_attachment_image_src( $object['featured_media'], 'card' );
      $alt = get_post_meta($object['featured_media'], '_wp_attachment_image_alt', true);
      return array('url' => $img[0], 'alt' => $alt);
  }
  return false;
}
