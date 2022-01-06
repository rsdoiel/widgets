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
