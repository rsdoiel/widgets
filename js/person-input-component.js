/**
 * person-input-component.js is a JavaScript module demonstrating how to use the custom element's attributes to format it's content.
 * 
 * by R. S. Doiel, copyright (c) 2022
 * This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License. 
 */
"use strict";
/* PersonInputComponent is an custom element performing auto-linking to an ORCID's profile. */

/* This is our templated input element. It is private to the module. */
const template = document.createElement('template');

template.innerHTML = `
<style>
.person-input-component {
    width: 80%;
}
.grid-2 {
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
  <div class="grid-2">
    <label class="one" for="given">Given Name</label>
    <input class="two" id="given" name="given" required size="60" value="" />

    <label class="one" for="family">Family Name</label>
    <input class="two" id="family" name="family" required size="60" value="" />
    <label class="one" for="orcid">ORCID</label>
    <input class="two" id="orcid" pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}" 
           name="orcid" value="" 
           size="19"
           title="e.g. 0000-0003-0900-6903"/>
  </div>
</div>
`;

class PersonInputComponent extends HTMLElement {
    constructor () {
        super();
        this.updateGiven = this.updateGiven.bind(this);
        this.updateFamily = this.updateFamily.bind(this);
        this.updateORCID = this.updateORCID.bind(this);

        let person = template.content.cloneNode(true);

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(person);

        this.given_input = this.shadowRoot.getElementById('given');
        this.family_input = this.shadowRoot.getElementById('family');
        this.orcid_input = this.shadowRoot.getElementById('orcid');
    }

    get value() {
        let obj = {}
        obj.given = this.getAttribute('given');
        obj.family = this.getAttribute('family');
        obj.orcid = this.getAttribute('orcid');
        return obj;
    }

    get as_json() {
        return JSON.stringify(this.value);
    }

    connectedCallback() {
      let given = this.getAttribute('given'),
         family = this.getAttribute('family'),
         orcid = this.getAttribute('orcid');

      this.given_input.value = given;
      this.family_input.value = family;
      this.orcid_input.value = orcid;

      this.given_input.addEventListener('change', this.updateGiven);
      this.family_input.addEventListener('change', this.updateFamily);
      this.orcid_input.addEventListener('change', this.updateORCID);
    }

    updateGiven() {
       this.setAttribute('given', this.given_input.value); 
    }

    updateFamily() {
        this.setAttribute('family', this.family_input.value);
    }

    updateORCID() {
        this.setAttribute('orcid', this.orcid_input.value);
    }

    disconnectCallback() {
        this.given_input.removeEventListener('change', this.updateGiven);
        this.family_input.removeEventListener('change', this.updateFamily);
        this.orcid_input.removeEventListener('change', this.updateORCID);
    }
}

export { PersonInputComponent };
window.customElements.define('person-input-component', PersonInputComponent);
 
