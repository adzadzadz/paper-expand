import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/iron-collapse/iron-collapse.js';

/**
 * `paper-expand`
 * Expansion funcionality based on material design
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class PaperExpand extends PolymerElement {
  static get template() {
    return html`
      <style>
        paper-item {
          background-color: var(--paper-expand-title-bg);
          border-radius: 8px;
          cursor: pointer;
        }
        iron-collapse {
          background-color: var(--paper-expand-bg);
          padding: 12px;
          border-radius: 8px;
        }
      </style>

      <paper-item on-tap="__toggle">
        <slot name="title"></slot>
      </paper-item>
      <iron-collapse id="collapse">
        <slot></slot>
      </iron-collapse>
    `;
  }
  static get properties() {
    return {
      title: {
        type: String,
        value: 'Title',
      },
    };
  }

  __toggle() {
    this.$.collapse.toggle();
  }
}

window.customElements.define('paper-expand', PaperExpand);
