/**
 * minimal-template-component.js is a JavaScript module demonstrating a
 * minimal templated web component. 
 *
 * by R. S. Doiel, copyright (c) 2022
 * This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License. 
 */
"use strict";
/* MinimalTemplateComponent is an empty element. 
 * It does nothing useful but does include a div with a border style without additional CSS.*/
class MinimalTemplateComponent extends HTMLElement {
    constructor () {
        super();
        let tmpl = document.createElement('template');
        tmpl.innerHTML = `<style>
div {
    padding: 0.24em;
    margin: 0.24em;
    width: auto;
    height: auto;
    border: cyan solid;
}
</style><div></div>`;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.append(tmpl.content.cloneNode(true));
    }
}
export { MinimalTemplateComponent };
window.customElements.define('minimal-template-component', MinimalTemplateComponent);
