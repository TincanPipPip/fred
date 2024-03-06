<?php

/**
 * ----------------------
 * Un.titled
 * Timber setup & config
 * ----------------------
 */

$composer_autoload = dirname( __DIR__ ) . '/vendor/autoload.php';

if ( file_exists( $composer_autoload ) ) {
	require_once $composer_autoload;
	$timber = new Timber\Timber();
}


/**
 * Sets the directories (inside your theme) to find .twig files
 */

Timber::$dirname = array( 'templates', 'dist' );


/**
 * By default, Timber does NOT autoescape values. Want to enable Twig's autoescape?
 * No prob! Just set this value to true
 */

Timber::$autoescape = false;


/**
 * We're going to configure our theme inside of a subclass of Timber\Site
 * You can move this to its own file and include here via php's include("MySite.php")
 */

class fredTimber extends Timber\Site {
	/** Add timber support. */
	public function __construct() {
		add_action( 'after_setup_theme', array( $this, 'theme_supports' ) );
		add_filter( 'timber/context', array( $this, 'add_to_context' ) );
		add_action( 'init', array( $this, 'register_post_types' ) );
		add_action( 'init', array( $this, 'register_taxonomies' ) );
		parent::__construct();
	}

	/** 
	 * Setup context
	 * @param string $context context['this'] Being the Twig's {{ this }}.
	 */
	public function add_to_context( $context ) {
    $context['mainnav']  = new Timber\Menu(21);
    $context['footerprimarynav']  = new Timber\Menu(22);
		$context['footersecondarynav']  = new Timber\Menu(23);
		$context['site']  = $this;
    $context['options'] = get_fields('option');

    /**
     * Events context
     */
    $today = date('Ymd');
  
    // Current events
    $currentEventsArgs = array(
      'post_type' => 'events',
      'posts_per_page' => -1,
      'meta_key' => 'date',
      'orderby' => 'meta_value',
      'meta_query' => array(
        array(
          'key' => 'date',
          'value' => $today,
          'compare' => '>',
        ),
      ),
      'order' => 'DESC',  
    );    
    $context['currentEvents'] = Timber::get_posts( $currentEventsArgs );
  
    // Past events
    global $paged;
    if (!isset($paged) || !$paged){
      $paged = 1;
    }

    $pastEventArgs = array(
      'post_type' => 'events',
      'posts_per_page' => 12,
      'meta_key' => 'date',
      'orderby' => 'meta_value',
      'meta_query' => array(
        array(
          'key' => 'date',
          'value' => $today,
          'compare' => '<',
        ),
      ),
      'order' => 'DESC',
      'paged' => $paged,  
    );
    $pastEvents = new Timber\PostQuery($pastEventArgs);
    $context['pastEvents'] = $pastEvents;
    $context['pastEventsPagination'] = $pastEvents->pagination();

		return $context;
	}

	public function theme_supports() {
		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'gallery',
				'caption',
			)
		);

		add_theme_support( 'menus' );
  }
  
}

new fredTimber();
