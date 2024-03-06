<?php

/**
 * Allow editors to access menu config
 */

add_action('admin_menu', 'hide_menu', 10);

function hide_menu() {
  $user = wp_get_current_user();

  if ( in_array( 'editor', (array) $user->roles ) ) {
    if ( ! current_user_can( 'edit_theme_options' ) ) {
      $role_object = get_role( 'editor' );
      $role_object->add_cap( 'edit_theme_options' );
    }

    remove_submenu_page( 'themes.php', 'themes.php' );
    remove_submenu_page( 'themes.php', 'widgets.php' );
    remove_submenu_page( 'themes.php', 'customize.php' );

    global $submenu;
    unset($submenu['themes.php'][6]);
  }
}



/**
 * Redirection Plugin Editor access
 */

add_filter( 'redirection_role', 'redirection_to_editor' );

function redirection_to_editor() {
  return 'edit_pages';
}
