/**
 * list-input-component.js is a JavaScript module demonstrating how you could compose a component from other components.
 * 
 * by R. S. Doiel, copyright (c) 2022
 * This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License. 
 */
"use strict";
/*
 * PersonInputListComponent creates a list from another component (e.g. PersonInputComponent) with an 
 */

class ListInputComponent extends HTMLULElement {
    constructor () {
        super();
        this.attachShadow({mode: 'open'});
    }

/*
    connectedCallback() {
        let component_type = this.getAttribute('type'),
            div = document.createElement('div'),
            button = document.createElement('button');
        button.innerHTML = `Remove`;
        div.classList.add('list-item');
        div.innertHTML = `<${component_type}></${component_type}>`;
        div.appendChild(button);
    }

    disconnectCallback() {
        //FIXME: for each element in list remove the listener.
    }
*/
}

export { ListInputComponent };
window.customElements.define('list-input-component', ListInputComponent);
 
