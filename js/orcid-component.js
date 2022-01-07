/**
 * orcid-component.js is a JavaScript module demonstrating auto-linking of an included ORCID.
 *
 * by R. S. Doiel, copyright (c) 2022
 * This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License. 
 */
 "use strict";
 /* ORCIDComponent is an custom element performing auto-linking to an ORCID's profile. */
 class ORCIDComponent extends HTMLElement {
     constructor () {
         super();
         /* NOTE: The shadowRoot's "host" attribute is the means of accessing the .textContent
            where the ORCID is expected. When we attach the element to the shadow DOM, we keep a
            handle to the shadowRoot, then .host should be available to work with. */
         let shadow = this.attachShadow({mode: 'open'}),
            orcid = shadow.host.textContent,
            a = document.createElement('a');
         a.classList.add('orcid');
         a.href = `https://orcid.org/${orcid}`;
         a.textContent = orcid;
         shadow.append(a);
     }
 }
 export { ORCIDComponent };
 window.customElements.define('orcid-component', ORCIDComponent);
 