import 'focus-visible'
import FocusWithin from 'focus-within'
import zenscroll from 'zenscroll'
import LazyLoad from 'vanilla-lazyload'
import baguetteBox from 'baguettebox.js'

/**
 * Focus within polyfill
 */
FocusWithin(document, {
  attr: false,
  className: 'focus-within',
})

/*
  Image galleries
  url: https://www.npmjs.com/package/flickity
  -----------------------------------------------

  Usage:
  <div class="gallery">
      <a href="path-to-large-image" data-caption="">
          <img src="path-to-thumbnail" alt="" />
      </a>
  </div>

  Note: If not using, remove @import "../../node_modules/baguettebox.js/src/baguetteBox"; from `assets/sass/global.scss`
*/

if (document.querySelectorAll('.gallery')) {
  baguetteBox.run('.gallery')
}

/*
  Automatically set external links to have nofollow/noopener attrs
*/
const links = document.querySelectorAll('a')

links.forEach(link => {
  if (link.hostname != window.location.hostname) {
    link.setAttribute('rel', 'nofollow noopener')
  }
})

// LazyLoad
const lazyLoadImages = new LazyLoad()

/*
  Zenscroll
  - Set edge offset to 0 to prevnet breaking tab order
*/
zenscroll.setup(null, 0)
