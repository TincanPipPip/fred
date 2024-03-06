<?php
/**
* Template Name: Homepage
*/

$context = Timber::context();

$timber_post     = new Timber\Post();
$context['post'] = $timber_post;

Timber::render( array( 'pages/page-homepage.twig' ), $context );
