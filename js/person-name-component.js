/**
 * person-name-component.js is a JavaScript module demonstrating how to use the custom element's attributes to format it's content.
 * 
 * by R. S. Doiel, copyright (c) 2022
 * This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License. 
 */
"use strict";
/* PersonNameComponent is an custom element performing auto-linking to an ORCID's profile. */
class PersonNameComponent extends HTMLElement {
    constructor () {
        super();
        /* NOTE: The shadowRoot's "host" attribute is the means of accessing the .textContent
            where the ORCID is expected. When we attach the element to the shadow DOM, we keep a
            handle to the shadowRoot, then .host should be available to work with. */
        let elem = document.createElement('span');
        elem.id = 'person-name';
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(elem);
    }

    connectedCallback() {
      let given = this.getAttribute('given'),
         family = this.getAttribute('family'),
         format = this.getAttribute('format');
      console.log(given, family, format);
      /* Format our textContent */
      if (format === 'sort') {
            this.shadowRoot.innerHTML = `${family.trim()}, ${given.trim()}`.trim()
      } else {
            this.shadowRoot.innerHTML = `${given.trim()} ${family.trim()}`.trim()
      }
    }
 }
 export { PersonNameComponent };
 window.customElements.define('person-name-component', PersonNameComponent);
 