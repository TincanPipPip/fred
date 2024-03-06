<?php
/**
 * Override plugin styling
 */

use Advanced_Sidebar_Menu\List_Pages;
use Advanced_Sidebar_Menu\Menus\Page;

$current_menu = Page::get_current();
$list_pages = List_Pages::factory( $current_menu );
$child_pages = $list_pages->get_child_pages( $current_menu->get_top_parent_id(), true );
$content = '';

$current_menu->title();

// Display parent page.
if ( $current_menu->include_parent() ) {
	$content .= '<ul class="m-subnav">';
	$list_args = $list_pages->get_args( Page::LEVEL_PARENT );
	$content .= wp_list_pages( $list_args );
}

if ( ! empty( $child_pages ) ) {
	$content .= '<ul class="m-subnav__child">';
	// Child and grandchild pages.
	$content .= $list_pages->list_pages();
	$content .= '</ul>';
}
if ( $current_menu->include_parent() ) {
	$content .= '</li></ul>';
}

return $content;
