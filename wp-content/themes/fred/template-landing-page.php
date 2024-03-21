<?php
/**
* Template Name:Landing Page
*/

$context = Timber::context();

$timber_post     = new Timber\Post();
$context['post'] = $timber_post;

Timber::render( array( 'pages/page-landing.twig' ), $context );