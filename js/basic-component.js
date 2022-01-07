/**
 * basic-component.js is a JavaScript module demonstrating a
 * basic web component. 
 *
 * by R. S. Doiel, copyright (c) 2022
 * This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License. 
 */
"use strict";
/* BasicComponent has content pre-set to "I am a basic component.". */
class BasicComponent extends HTMLElement {
    constructor () {
        super();
        this.attachShadow({mode: 'open'});
        /* NOTE: In the MDN website there is a "thumbs down" icon suggesting it is non-standard despite showing
           all the common browsers supporting it. */
        this.shadowRoot.innerHTML = ' I am a basic component. ';
    }
}
export { BasicComponent };
window.customElements.define('basic-component', BasicComponent);
