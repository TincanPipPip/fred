<?php

/**
 * ----------------------
 * Un.titled
 * Custom taxonomies
 * ----------------------
 */

add_action( 'init', 'fred_taxonomy', 0 );

function fred_taxonomy() {
  $eventGenres = array(
    'name' => _x( 'Genres', 'taxonomy general name' ),
    'singular_name' => _x( 'Genre', 'taxonomy singular name' ),
    'search_items' =>  __( 'Search Genres' ),
    'all_items' => __( 'All Genres' ),
    'parent_item' => __( 'Parent Genre' ),
    'parent_item_colon' => __( 'Parent Genre:' ),
    'edit_item' => __( 'Edit Genre' ), 
    'update_item' => __( 'Update Genre' ),
    'add_new_item' => __( 'Add New Genre' ),
    'new_item_name' => __( 'New Genre' ),
    'menu_name' => __( 'Genres' ),
  );    
  
  register_taxonomy(
    'genres',
    'events',
    array(
      'hierarchical' => true,
      'labels' => $eventGenres,
      'query_var' => true,
      'rewrite' => array(
        'slug' => '/whats-on/genre',
        'with_front' => false
      ),
      'show_in_rest' => true
    )
  );

  $eventSeasons = array(
    'name' => _x( 'Seasons', 'taxonomy general name' ),
    'singular_name' => _x( 'Season', 'taxonomy singular name' ),
    'search_items' =>  __( 'Search Seasons' ),
    'all_items' => __( 'All Seasons' ),
    'parent_item' => __( 'Parent Season' ),
    'parent_item_colon' => __( 'Parent Season:' ),
    'edit_item' => __( 'Edit Season' ), 
    'update_item' => __( 'Update Season' ),
    'add_new_item' => __( 'Add New Season' ),
    'new_item_name' => __( 'New Season' ),
    'menu_name' => __( 'Seasons' ),
  );    
  
  register_taxonomy(
    'seasons',
    'events',
    array(
      'hierarchical' => true,
      'labels' => $eventSeasons,
      'query_var' => true,
      'rewrite' => array(
        'slug' => '/whats-on/season',
        'with_front' => false
      ),
      'show_in_rest' => true
    )
  );
}
