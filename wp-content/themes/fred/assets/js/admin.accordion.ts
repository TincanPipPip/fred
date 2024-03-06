import 'van11y-accessible-accordion-aria'

// Manually run accordion JS to work with GBerg previews
function initAccordion() {
  // @ts-ignore
  const accordion = van11yAccessibleAccordionAria({
    ACCORDION_JS: 'js-accordion',
  })
  accordion.attach()
}

// Initialize dynamic block preview (editor)
declare const window: any

if (window.acf) {
  document.addEventListener('DOMContentLoaded', function () {
    initAccordion()
  })
  window.acf.addAction('render_block_preview', initAccordion)
}
