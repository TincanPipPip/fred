<?php

/**
 * ----------------------
 * Un.titled
 * Custom WYSIWYG editor
 * ----------------------
 */

add_filter( 'tiny_mce_before_init', 'fred_tinymce' );
add_filter( 'acf/fields/wysiwyg/toolbars' , 'fred_acfToolbar' );

function fred_tinymce( $in ) {
	$in['apply_source_formatting'] = false;
  $in['block_formats'] = "Paragraph=p; Heading 2=h2; Heading 3=h3; Heading 4=h4";
  $in['toolbar1'] = 'formatselect,bold,italic,underline,strikethrough,underline,bullist,numlist,link,unlink,spellchecker,pastetext,removeformat,charmap,undo,redo,wp_help';
	$in['toolbar2'] = '';
	$in['toolbar3'] = '';
	$in['toolbar4'] = '';
	return $in;
}

function fred_acfToolbar( $toolbars ) {
  $toolbars['Full'] = array();
  $toolbars['Full'][1] = array('formatselect','bold', 'italic', 'underline', 'strikethrough', 'bullist', 'numlist', 'link', 'unlink', 'spellchecker','pastetext', 'removeformat', 'charmap', 'undo', 'redo', 'wp_help');
  
	// remove the 'Basic' toolbar completely
  unset( $toolbars['Basic' ] );
  
	return $toolbars;
}
