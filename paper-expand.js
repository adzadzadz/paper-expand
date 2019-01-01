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
      <paper-item on-tap="__toggle">[[title]]</paper-item>
      <iron-collapse id="collapse">
        <div>Content goes here...</div>
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
