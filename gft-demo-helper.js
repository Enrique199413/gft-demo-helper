/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';
import { GftDemoHelperStyles } from "./styles";
import { AVAILABLE_SIZES, VIEWPORTS, viewportsClasses } from "./GftDemoHelperVariables";
import { classMap } from "lit-html/directives/class-map";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

export class GftDemoHelper extends LitElement {
  static get styles() {
    return [GftDemoHelperStyles()];
  }

  static get properties() {
    return {
      /**
       * The name to say "Hello" to.
       */
      src: {type: String},
      title: {type: String},
      subtitle: {type: String},
      _iframeWidth: {type: Number},
      _iframeHeight: {type: Number},
      defaultBreakPoints: {type: Object}
    };
  }

  constructor() {
    super();
    this.src = undefined;
    this.count = 0;
    this.title = '';
    this.subtitle = '';
    this._iframeWidth = 320;
    this._iframeHeight = 800;
    this.defaultBreakPoints = [
      {
        width: 1360,
        name: 'LARGE',
        isSelected: false,
        textName: 'Desktop'
      },
      {
        width: 768,
        name: 'MEDIUM',
        isSelected: false,
        textName: 'Tablet'
      },
      {
        width: 320,
        name: 'SMALL',
        isSelected: true,
        textName: 'Mobile'
      },
    ];
    this.classes = {
      small: true,
      medium: false,
      large: false
    };
  }

  get getBreakpointsTpl () {
    return html`
      ${this.defaultBreakPoints.map((breakpoint, index) => {
          return html`
            <div class="bar ${breakpoint.isSelected ? 'selected' : ''}"
                 style="width: ${breakpoint.width}px; z-index: ${index}; touch-action: none;" 
                 @click="${() => this.setViewport(breakpoint)}">
                <span class="label">${breakpoint.textName}</span>
            </div>
          `;
      })}
    `;
  }

  render() {
    return html`
        <div class="header">
            <div>
                <p>${this.title}</p>
                <p>${this.subtitle}</p>
            </div>
            <div>
                <p>GFT Learning</p>
            </div>
        </div>
        <div class="viewports">
            ${this.getBreakpointsTpl}
        </div>
        <div class="corners ${classMap(this.classes)}"
             style="width:${this._iframeWidth}px; height:${this._iframeHeight}px">
            <slot name="_iframe">
            </slot>
        </div>
    `;
  }

  _updateResolution(width, height) {
    this._iframeWidth = width;
    this._iframeHeight = height;
  }

  _generateIframe() {
    const iframe = document.createElement('iframe');
    iframe.addEventListener('load', () => {
      if (!iframe.contentDocument.head.childNodes.length) {
        return;
      }
      /**
       * Fired when iframe load event is set
       * @event iframe-loaded
       */
      this.dispatchEvent(new CustomEvent('iframe-loaded', {
        bubbles: true
      }));

    });
    return iframe;
  }

  _templateIframe(headCode, bodyCode) {
    return `
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Iframe ${window.document.title}</title>
          ${headCode}
        </head>
        <body id="iframeBody">
          ${bodyCode}
        </body>
      </html>
    `;
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    this._root = this.shadowRoot || this;
    this._iframeSlot = this._root.querySelector('[name="_iframe"]');
  }

  get _iframe() {
    return this._iframeSlot.assignedElements()[0];
  }

  _setCaseIframe(code) {
    this._cleanIframe();
    const iframe = this._generateIframe();
    iframe.setAttribute('slot', '_iframe');
    iframe.setAttribute('title', 'demo');

    this.appendChild(iframe);

    // prevent accessing to document not created yet
    /* istanbul ignore else */
    if (!iframe.contentDocument) {
      return;
    }

    this._tpl = this._templateIframe('', code);

    iframe.contentDocument.open();
    iframe.contentDocument.write(this._tpl);
    iframe.contentDocument.close();

    iframe.contentDocument.addEventListener('WebComponentsReady', () => {
      console.log('Finalizado');
    });
  }

  async _getSrcFromFile(src) {
    const response = await fetch(src);
    if (!response.ok) {
      console.error(`Unable to retrieve demo case source file ${src}: `, response.status);
    }
    const fileCode = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(fileCode, 'text/html');
    const {body} = doc;
    const scripts = body.querySelectorAll('script');
    scripts.forEach(item => {
      if (item.innerText.indexOf('dev-server') > -1) {
        body.removeChild(item);
      }
    });
    return body.innerHTML;
  }


  _cleanIframe() {
    const old = this._iframe;
    if (old) {
      this.removeChild(old);
    }
  }

  setViewport(breakpoint) {
    let viewport;

    this.defaultBreakPoints.map(breakpoint => {
      breakpoint.isSelected = false;
      return breakpoint;
    })

    if (breakpoint.name === AVAILABLE_SIZES.SMALL) {
      viewport = VIEWPORTS[AVAILABLE_SIZES.SMALL];
      this.classes = viewportsClasses(true);

    }
    if (breakpoint.name === AVAILABLE_SIZES.MEDIUM) {
      viewport = VIEWPORTS[AVAILABLE_SIZES.MEDIUM];
      this.classes = viewportsClasses(false, true);
    }
    if (breakpoint.name === AVAILABLE_SIZES.LARGE) {
      viewport = VIEWPORTS[AVAILABLE_SIZES.LARGE];
      this.classes = viewportsClasses(false, false, true);
    }

    breakpoint.isSelected = true;

    const [width, height] = viewport;
    this._updateResolution(width, height);
    this.requestUpdate();
  }

  updated(changedProps) {
    super.updated && super.updated(changedProps);
    if (changedProps.has('src')) {
      this._run();
    }
  }

  async _run() {
    const response = await this._getSrcFromFile(this.src);
    this._setCaseIframe(response);
  }

  connectedCallback() {
    super.connectedCallback && super.connectedCallback();
    document.body.style.margin = '0';
    console.log(this.querySelector('p'), this.src);
  }
}

window.customElements.define('gft-demo-helper', GftDemoHelper);
