export class AutoSearchForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.query = '';
    this.canSearch = false;
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.handleClearInput = this.handleClearInput.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  static get observedAttributes() {
    return [
      'inputcaption',
      'labelforinput',
      'placeholder',
      'rtl',
      'containerclass',
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[name] = newValue;
    }
  }

  connectedCallback() {
    this.render();
  }

  handleSearchInputChange(event) {
    event.preventDefault();
    const newQuery = event.target.value;
    if (this.query !== newQuery) {
      this.query = newQuery;
      this.canSearch = true;
      this.debouncedSubmit();
    }
  }

  handleClearInput() {
    this.query = '';
    this.canSearch = false;
    this.dispatchEvent(new CustomEvent('clear-input'));
    this.render();
  }

  debouncedSubmit() {
    if (this.canSearch) {
      clearTimeout(this.submitTimeout);
      this.submitTimeout = setTimeout(() => {
        this.dispatchEvent(new CustomEvent('submit', { detail: this.query }));
        this.canSearch = false;
      }, 300);
    }
  }

  render() {
    const isRTL = this.getAttribute('rtl') === 'true';

    this.shadowRoot.innerHTML = `
      <style>
        /* Include styles here or link to an external stylesheet */
        .form {
          display: flex;
          flex-direction: ${isRTL ? 'row-reverse' : 'row'};
        }
        .input-container {
          /* Additional styling for the input container */
        }
        /* Define more styling as needed */
      </style>
      <form class="form ${isRTL ? 'form-rtl' : 'form-ltr'}" onsubmit="return false;">
        <label>${this.getAttribute('labelforinput') || 'Search'}</label>
        <div class="input-container ${this.getAttribute('containerclass') || ''}">
          <input
            type="text"
            placeholder="${this.getAttribute('placeholder') || 'Search here'}"
            value="${this.query}"
            oninput="${this.handleSearchInputChange}"
          />
          <button type="button" onclick="${this.handleClearInput}">Clear</button>
        </div>
      </form>
    `;
  }
}

customElements.define('auto-search-form', AutoSearchForm);
