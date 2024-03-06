<?php

/**
 * ----------------------
 * Un.titled
 * Custom widgets
 * ----------------------
 */

add_action( 'widgets_init', 'fred_sidebar' );

function fred_sidebar() {
  register_sidebar( array(
      'name' => 'Subnav',
      'id' => 'subnav',
      'before_widget' => '<div class="o-sidebar o-sidebar--subnav">',
      'after_widget' => '</div>',
  ) );
}
