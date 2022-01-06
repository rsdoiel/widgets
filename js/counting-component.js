/**
 * counting-component.js is a JavaScript module demonstrating a
 * counting web component. 
 *
 * by R. S. Doiel, copyright (c) 2022
 * This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License. 
 */
"use strict";
/* CountingComponent had a button and a msg sub element. Counts by 3. */
class CountingComponent extends HTMLElement {
    constructor () {
        super();
        this.attachShadow({mode: 'open'});
        let div = document.createElement("div"),
            button = document.createElement("button"),
            msg = document.createElement("span");
        msg.style = 'padding:0.24em';
        msg.title = 'This is where I keep track of the count';
        msg.innerHTML = `0`;
        button.title = 'Increment count by 3';
        button.textContent = `Count`;
        button.onclick = function (evt) {
            let cnt = new Number(msg.innerHTML);
            cnt += 3;
            msg.textContent = `${cnt}`;
        };
        div.appendChild(button)
        div.appendChild(msg);
        this.shadowRoot.append(div);
    }
}
export { CountingComponent };
window.customElements.define('counting-component', CountingComponent);
