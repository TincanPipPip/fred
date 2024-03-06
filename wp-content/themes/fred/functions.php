<?php

/**
 * Basic setup
 */

require('inc/timber.php');
require('inc/remove-comments.php');
require('inc/cleanup.php');
require('inc/wysiwyg.php');
require('inc/users.php');

/**
 * Content setup
 */

require('inc/acf.php');
require('inc/gutenberg.php');
require('inc/images.php');
require('inc/excerpt.php');
require('inc/taxonomy.php');
require('inc/widgets.php');
require('inc/custom-post-types.php');

/**
 * CSS & JS
 */

require('inc/assets.php');
