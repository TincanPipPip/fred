import BlockRestrictor from './BlockRestrictor'
import TemplateWhitelister from './TemplateWhitelister'

/*
 * Add a mapping of block names and what templates they are
 * restricted to.
 */
const blockTemplateRestrictions = {
  'acf/text': ['template-default.php'],
  'acf/accordion': ['template-default.php'],
  'acf/image': ['template-default.php'],
  'acf/gallery': ['template-default.php'],
  'acf/downloads': ['template-default.php'],
  'acf/embed': ['template-default.php'],
  'acf/quote': ['template-default.php'],
  'acf/linkedlogos': ['template-default.php'],
  'acf/cta': ['template-default.php'],
  'acf/imagetext': ['template-default.php'],
  'acf/video': ['template-default.php'],
  'acf/table': ['template-default.php'],
}

wp.domReady(() => {
  const restrictor = new BlockRestrictor(blockTemplateRestrictions)
  const templateWhitelister = new TemplateWhitelister(blockTemplateRestrictions)

  restrictor.run()
  templateWhitelister.run()
})
