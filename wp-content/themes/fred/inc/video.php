<?php

add_action( 'run_video_embed', 'video_embed', 10, 2 );

function video_embed( $context ) {
	if (get_field( 'banner' )) {
		$banner = get_field( 'banner' )[0];
	} else if (get_field( 'flexible_banner' )) {
		$banner = get_field( 'flexible_banner' )[0];
	} else {
		$banner = null;
	}

	foreach ($banner as $key => $video) {
		if($key == "video" || $key == "mobile_video") {
				
			if ( $video ) {
				// Add autoplay functionality to the video code
				if ( preg_match('/src="(.+?)"/', $video, $matches) ) {
					// Video source URL
					$src = $matches[1];
					
					// Add option to hide controls, enable HD, and do autoplay -- depending on provider
					$params = array(
						'background' => 1,
						'muted' => 1,
						'controls'    => 0,
						'hd'        => 1,
						'fs'        => 1,
						'rel'        => 0,
						'modestbranding' => 0,
						'autoplay' => 1,
						'loop' => 1
					);
					
					$new_src = add_query_arg($params, $src);
					
					$video = str_replace($src, $new_src, $video);
					
					// add extra attributes to iframe html
					if($key == "video") {
						$attributes = 'frameborder="0" class="' . $key . '"  data-video="true"';
					} else {
						$attributes = 'frameborder="0" class="' . $key . '"';
					}
					
					$video = str_replace('></iframe>', ' ' . $attributes . '></iframe>', $video);
				}
			
				echo $video;
			}
		}
	}

	echo "
	<script src='https://player.vimeo.com/api/player.js'></script>
	<script>
		var iframe = document.querySelector('.video');
		var player = new Vimeo.Player(iframe);

		if (player) {
			var controls = document.querySelector('.video__controls');
			var progressBar = document.querySelector('.video__progress-filled');
		  
			function handleProgress() {
			  var percent = (player.currentTime / player.duration) * 100;
			//   progressBar.style.flexBasis = percent'%';
			}

			function handlePlayback() {
				player.getPaused().then(function(paused) {
					// paused = whether or not the player is paused;
					paused ? player.play() : player.pause();
				}).catch(function(error) {
					console.log( 'an error occurred' );
				});

				controls.setAttribute('data-playstate', 
					controls.getAttribute('data-playstate') == 'paused' ? 'playing' : 'paused'
				);
			}

			controls.addEventListener('click', handlePlayback);
			iframe.addEventListener('timeupdate', handleProgress);
		  }
	</script>";
}