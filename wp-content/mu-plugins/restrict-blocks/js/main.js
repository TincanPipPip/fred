import BlockRestrictor from './BlockRestrictor'
import TemplateWhitelister from './TemplateWhitelister'

/*
 * Add a mapping of block names and what templates they are
 * restricted to.
 */
const blockTemplateRestrictions = {
  'acf/intro': [
    'default',
    'template-landing-page.php'
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
  'acf/signpostsection': [
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

/**
 * Automatically add blocks based on page template
 */
const { select, subscribe } = wp.data

class PageTemplateSwitcher {
  constructor() {
    this.template = null
  }

  init() {
    subscribe(() => {
      const newTemplate = select('core/editor').getEditedPostAttribute(
        'template'
      )
      if (newTemplate !== undefined && this.template === null) {
        this.template = newTemplate
        this.defaultTemplate()

        if (
          this.template === '' ||
          this.template === 'default' ||
          this.template === 'template-landing-page.php'
        ) {
          const introductionBlock = wp.blocks.createBlock('acf/intro')
          wp.data.dispatch('core/block-editor').insertBlocks(introductionBlock)
        }
      }

      if (newTemplate !== undefined && newTemplate !== this.template) {
        this.template = newTemplate
        this.changeTemplate()
      }
    })
  }

  defaultTemplate() {
    // Set Intro block to be shown by default (prevents hiding of template select)

    wp.domReady(() => {
      wp.blocks.setDefaultBlockName('acf/intro')
    })
  }

  changeTemplate() {
    wp.data.dispatch('core/block-editor').resetBlocks([])

    if (
      this.template === '' ||
      this.template === 'default' ||
      this.template === 'template-landing-page.php'
    ) {
      const introductionBlock = wp.blocks.createBlock('acf/intro')
      wp.data.dispatch('core/block-editor').insertBlocks(introductionBlock)
    }
  }
}

new PageTemplateSwitcher().init()
