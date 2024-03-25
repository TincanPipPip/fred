import BlockRestrictor from './BlockRestrictor'
import TemplateWhitelister from './TemplateWhitelister'

/*
 * Add a mapping of block names and what templates they are restricted to.
 */
/**
 * Templates:
  'default',
  'template-homepage.php',
  'template-landing-page.php',
  'template-listing-page.php',
  'template-degree-page.php',
  'template-degree-option.php',
  'template-event-series.php',
 */
const blockTemplateRestrictions = {
  'acf/homepagebanner': ['template-homepage.php'],
  'acf/quicklinks': ['template-landing-page.php'],
  'acf/listing': ['template-listing-page.php'],
  'acf/featuredcontent': ['template-listing-page.php'],
  'acf/intro': [
    'default',
    'template-degree-page.php',
    'template-degree-option.php',
  ],
  'acf/text': [
    'default',
    'template-landing-page.php',
    'template-listing-page.php',
    'template-degree-page.php',
    'template-degree-option.php',
    'template-event-series.php',
  ],
  'acf/accordion': [
    'default',
    'template-landing-page.php',
    'template-degree-page.php',
    'template-degree-option.php',
    'template-event-series.php',
  ],
  'acf/image': [
    'default',
    'template-landing-page.php',
    'template-degree-page.php',
    'template-degree-option.php',
    'template-event-series.php',
  ],
  'acf/imagezoom': ['default'],
  'acf/gallery': [
    'default',
    'template-landing-page.php',
    'template-degree-page.php',
    'template-degree-option.php',
    'template-event-series.php',
  ],
  'acf/downloads': [
    'default',
    'template-landing-page.php',
    'template-degree-page.php',
    'template-degree-option.php',
    'template-event-series.php',
  ],
  'acf/embed': [
    'default',
    'template-landing-page.php',
    'template-degree-page.php',
    'template-degree-option.php',
    'template-event-series.php',
  ],
  'acf/quote': [
    'default',
    'template-landing-page.php',
    'template-degree-page.php',
    'template-degree-option.php',
    'template-event-series.php',
  ],
  'acf/linkedlogos': [
    'default',
    'template-landing-page.php',
    'template-degree-page.php',
    'template-degree-option.php',
    'template-event-series.php',
  ],
  'acf/cta': [
    'default',
    'template-landing-page.php',
    'template-degree-page.php',
    'template-degree-option.php',
    'template-event-series.php',
  ],
  'acf/bigcta': [
    'default',
    'template-landing-page.php',
    'template-degree-page.php',
    'template-degree-option.php',
    'template-event-series.php',
    'template-homepage.php',
  ],
  'acf/imagetext': [
    'default',
    'template-landing-page.php',
    'template-degree-page.php',
    'template-degree-option.php',
    'template-event-series.php',
  ],
  'acf/video': [
    'default',
    'template-landing-page.php',
    'template-degree-page.php',
    'template-degree-option.php',
    'template-event-series.php',
  ],
  'acf/table': [
    'default',
    'template-landing-page.php',
    'template-degree-page.php',
    'template-degree-option.php',
    'template-event-series.php',
  ],
  'acf/signpost': [
    'default',
    'template-homepage.php',
    'template-landing-page.php',
    'template-listing-page.php',
    'template-degree-page.php',
    'template-degree-option.php',
    'template-event-series.php',
  ],
  'acf/peopleprofiles': [
    'default',
    'template-landing-page.php',
    'template-degree-page.php',
    'template-degree-option.php',
    'template-event-series.php',
  ],
  'acf/form': ['default', 'template-landing-page.php'],
  'acf/buynowbutton': [
    'default',
    'template-homepage.php',
    'template-landing-page.php',
    'template-degree-page.php',
    'template-degree-option.php',
    'template-event-series.php',
  ],
  'acf/ymal': [
    'default',
    'template-homepage.php',
    'template-landing-page.php',
    'template-degree-page.php',
    'template-degree-option.php',
    'template-event-series.php',
  ],
  'acf/anchor': [
    'default',
    'template-degree-page.php',
    'template-degree-option.php',
  ],
  'acf/divider': [
    'default',
    'template-landing-page.php',
    'template-degree-page.php',
    'template-degree-option.php',
    'template-event-series.php',
  ],
  'acf/minilisting': [
    'default',
    'template-homepage.php',
    'template-landing-page.php',
  ],
  'acf/enhancedeventlisting': [
    'default',
    'template-homepage.php',
    'template-landing-page.php',
    'template-listing-page.php',
    'template-degree-page.php',
    'template-degree-option.php',
    'template-event-series.php',
  ],
  'acf/signposts': [
    'template-homepage.php',
    'template-landing-page.php',
    'template-listing-page.php',
    'template-degree-page.php',
    'template-degree-option.php',
    'template-event-series.php',
  ],
  'acf/serieslisting': ['template-event-series.php'],
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
    wp.data.dispatch('core/editor').resetBlocks([])

    if (this.template === 'template-landing-page.php') {
      const quickLinksBlock = wp.blocks.createBlock('acf/quicklinks')
      const signpostsBlock = wp.blocks.createBlock('acf/signposts')

      wp.data
        .dispatch('core/editor')
        .insertBlocks([quickLinksBlock, signpostsBlock])
    }

    if (this.template === 'template-homepage.php') {
      const homepageBannerBlock = wp.blocks.createBlock('acf/homepagebanner')
      wp.data.dispatch('core/editor').insertBlocks(homepageBannerBlock)
    }

    if (this.template === 'template-listing-page.php') {
      const featuredContentBlock = wp.blocks.createBlock('acf/featuredcontent')
      const listingBlock = wp.blocks.createBlock('acf/listing')

      wp.data
        .dispatch('core/editor')
        .insertBlocks([featuredContentBlock, listingBlock])
    }

    if (this.template === 'template-event-series.php') {
      const seriesListingBlock = wp.blocks.createBlock('acf/serieslisting')

      wp.data.dispatch('core/editor').insertBlocks(seriesListingBlock)
    }

    if (
      this.template === '' ||
      this.template === 'template-degree-page.php' ||
      this.template === 'template-degree-option.php'
    ) {
      const introductionBlock = wp.blocks.createBlock('acf/intro')

      wp.data.dispatch('core/editor').insertBlocks(introductionBlock)
    }
  }
}

new PageTemplateSwitcher().init()
