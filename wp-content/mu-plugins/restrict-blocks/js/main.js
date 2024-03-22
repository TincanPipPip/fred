import BlockRestrictor from './BlockRestrictor'
import TemplateWhitelister from './TemplateWhitelister'

/*
 * Add a mapping of block names and what templates they are
 * restricted to.
 */
const blockTemplateRestrictions = {
  'acf/image': [
    'default',
    'template-landing-page.php',
    'template-homepage.php',
    '404.php',
  ],
  'acf/accordion': [
    'default',
    'template-landing-page.php',
    'template-homepage.php',
    '404.php',
  ],
  'acf/image': [
    'default',
    'template-landing-page.php',
    'template-homepage.php',
    '404.php',
  ],
  'acf/gallery': [
    'default',
    'template-landing-page.php',
    'template-homepage.php',
    '404.php',
  ],
  'acf/downloads': [
    'default',
    'template-landing-page.php',
    'template-homepage.php',
    '404.php',
  ],
  'acf/embed': [
    'default',
    'template-landing-page.php',
    'template-homepage.php',
    '404.php',
  ],
  'acf/testimonial': [
    'default',
    'template-landing-page.php',
    'template-homepage.php',
    '404.php',
  ],
  'acf/linkedlogos': [
    'default',
    'template-landing-page.php',
    'template-homepage.php',
    '404.php',
  ],
  'acf/cta': [
    'default',
    'template-landing-page.php',
    'template-homepage.php',
    '404.php',
  ],
  'acf/imagetext': [
    'default',
    'template-landing-page.php',
    'template-homepage.php',
    '404.php',
  ],
  'acf/video': [
    'default',
    'template-landing-page.php',
    'template-homepage.php',
    '404.php',
  ],
  'acf/signpost': [
    'default',
    'template-homepage.php',
    '404.php',
    'template-landing-page.php',
  ],
}

wp.domReady(() => {
  const restrictor = new BlockRestrictor(blockTemplateRestrictions)
  const templateWhitelister = new TemplateWhitelister(blockTemplateRestrictions)

  restrictor.run()
  templateWhitelister.run()
})
