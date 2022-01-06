/**
 * minimal-component.js is a JavaScript module demonstrating a
 * minimal web component. 
 *
 * by R. S. Doiel, copyright (c) 2022
 * This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License. 
 */
"use strict";
/* MinimalComponent is an empty element. It does nothing useful but you
 * can style with with CSS! */
class MinimalComponent extends HTMLElement {
    constructor () {
        super();
    }
}
export { MinimalComponent };
window.customElements.define('minimal-component', MinimalComponent);
