"use strict";
/* BasicComponent has content pre-set to "I am a basic component.". */
class BasicComponent extends HTMLElement {
    constructor () {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = ' I am a basic component. ';
    }
}
export { BasicComponent };
window.customElements.define('basic-component', BasicComponent);
