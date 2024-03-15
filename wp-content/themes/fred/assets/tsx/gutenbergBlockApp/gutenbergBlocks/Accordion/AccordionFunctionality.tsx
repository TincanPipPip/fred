/*
 *
 *  I converted this to TypeScript from the W3C example at: https://www.w3.org/TR/wai-aria-practices-1.1/examples/accordion/accordion.html - i then refactored it according to the needs of the accordion component structure.
 * 
 *  AJ - 2024-03-01
 */

class AccordionFunctionality {
    private buttonEl: HTMLButtonElement;
    private contentEl: HTMLElement;
    private open: boolean;
  
    constructor(buttonEl: HTMLElement) {
      this.buttonEl = buttonEl as HTMLButtonElement;
  
      const controlsId = this.buttonEl.getAttribute('aria-controls');
      this.contentEl = document.getElementById(controlsId!)!;
  
      this.open = this.buttonEl.getAttribute('aria-expanded') === 'true';

      this.toggle(!this.open);
    }

    private toggle(open: boolean) {
      // don't do anything if the open state doesn't change
      if (open === this.open) {
        return;
      }
  
      // update the internal state
      this.open = open;
  
      // handle DOM updates
      this.buttonEl.setAttribute('aria-expanded', `${open}`);
      if (open) {
        this.contentEl.setAttribute('aria-hidden', 'false');
      } else {
        this.contentEl.setAttribute('aria-hidden', 'true');
      }
    }
  
    // Add public open and close methods for convenience
    public openAccordion() {
      this.toggle(true);
    }
  
    public closeAccordion() {
      this.toggle(false);
    }
  }
  
  export default AccordionFunctionality;