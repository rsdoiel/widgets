/**
 * digital-clock.js is a web component using an internal template
 * to create a digital clock using a "CSS" and updating the "textContent".
 */
"use strict";

class DigitalClockComponent extends HTMLElement {
    constructor() {
        super();
        let tmpl = document.createElement('template'),
            now = new Date();
        this.attachShadow({mode: 'open'});
        tmpl.innerHTML = `<style>
div {
    display: inline;
    align-items: center;
    justify-content: center;
    border: solid;
    border-radius: 90% 90% 90% 90%;
    width: 3em;
    height: 1em;
    padding: 1.24em;
    font-family: courier;
    font-size: big;
}
</style><div class="clock">${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}</div>`;
        let div = tmpl.querySelector("div");
        this.shadowRoot.append(tmpl.content.cloneNode(true));
    }

    connectedCallback() {
        this.runUpdateClock();
    }

    runUpdateClock() {
        let clock = this.shadowRoot.querySelector("div.clock");
        setInterval(function() {
            let now;
            now = new Date();
            clock.innerHTML = now.getHours().toString().padStart(2,'0') + ':' +
                            now.getMinutes().toString().padStart(2, '0') + ':' +
                            now.getSeconds().toString().padStart(2, '0');
        }, 1000);
    }
}

export { DigitalClockComponent };
window.customElements.define('digital-clock', DigitalClockComponent);
