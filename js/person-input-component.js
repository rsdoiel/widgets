/**
 * person-input-component.js is a JavaScript module demonstrating how to use the custom element's attributes to format it's content.
 * 
 * by R. S. Doiel, copyright (c) 2022
 * This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License. 
 */
"use strict";

/* This is our templated input element. It is private to the module. */
const template = document.createElement('template');

template.innerHTML = `
<style>
.person-input-component {
    width: 80%;
}
.person-input-grid-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
label {
    grid-column: 1/2;
    padding: 0.12em;
    margins: 0.12em;
    font-size: small;
    text-valign: center;
    text-align: right;
}
input {
    grid-column: 2/2;
    padding: 0.12em;
    margins: 0.12em;
    width: auto;
}
input:required {
    background-color: lightgreen;
    border: aquamarine solid 0.024em;
}

input:invalid {
    border: red solid 3px;
}
.given-name, .family-name, .orcid-number {
    padding: 0.12em;
    margins: 0.12em;
    border: red dashed 2px; 
}
</style>
<div class="person-input-component">
  <div class="person-input-grid-2">
    <label for="given">Given Name</label>
    <input id="given" name="given" required size="60" value="" />

    <label for="family">Family Name</label>
    <input id="family" name="family" required size="60" value="" />
    <label for="orcid">ORCID</label>
    <input id="orcid" pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9xX]{4}" 
           name="orcid" value="" 
           size="19"
           title="e.g. 0000-0003-0900-6903"/>
  </div>
</div>
`;

class PersonInputComponent extends HTMLElement {
    constructor () {
        super();
        this.managed_attributes = [ 'given', 'family', 'orcid' ];

        let person = template.content.cloneNode(true);

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(person);
        let self = this;
        for (const key of this.managed_attributes) {
            let elem_name = `${key}_input`,
                fnNameOnChange = `onchange_${key}`;
            self[elem_name] = this.shadowRoot.getElementById(key);
            self[fnNameOnChange] = function() {
                let evt = document.createEvent('HTMLEvents');
                evt.initEvent("change", false, true);
                self[key] = self[elem_name].value;
                self.setAttribute(key, self[elem_name].value);
                this.shadowRoot.host.dispatchEvent(evt);
            };
            self[fnNameOnChange] = self[fnNameOnChange].bind(this);
        }
    }

    get value() {
        let obj = {}
        for (const key of this.managed_attributes) {
            obj[key] = this.getAttribute(key);
        }
        return obj;
    }

    get as_json() {
        return JSON.stringify(this.value);
    }

    set value(obj) {
        let self = this;
        for (const key of this.managed_attributes) {
            let elem_name = `${key}_input`;
            if (obj[key] !== undefined) {
                this.setAttribute(key, obj[key]);
                self[elem_name].value = obj[key];
            }
        }
    }

    setAttribute(key, val) {
        if (this.managed_attributes.indexOf(key) >= 0) {
            let self = this,
                elem_name =  `${key}_input`;
            self[elem_name].value = val;
            let evt = document.createEvent('HTMLEvents');
            evt.initEvent("change", true, true);
            this.shadowRoot.host.dispatchEvent(evt);
        }
        super.setAttribute(key, val);
    }

    connectedCallback() {
        let self = this;

        for (const key of this.managed_attributes) {
            let val = this.getAttribute(key),
                elem_name = `${key}_input`,
                fnNameOnChange = `onchange_${key}`;
            self[elem_name].value = val;
            self[elem_name].addEventListener('change', self[fnNameOnChange]);
        }
    }

    disconnectCallback() {
        let self = this;
        for (const key of this.managed_attributes) {
            let elem_name = `${key}_input`,
                fnNameOnChange = `onchange_${key}`;
            self[elem_name].removeEventListener('change', self[fnNameOnChange]);
        }
    }
}

export { PersonInputComponent };
window.customElements.define('person-input-component', PersonInputComponent);
 
