<?php

$context = Timber::get_context();
$site = new TimberSite();

Timber::render( 'search/search-form.twig', $context );
