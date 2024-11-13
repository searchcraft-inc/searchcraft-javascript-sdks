class BaseSearchResults extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.searchResults = [];
    this.query = '';
    this.render = this.render.bind(this);
    this.handleButtonCallback = this.handleButtonCallback.bind(this);
    this.handleInteractiveCallback = this.handleInteractiveCallback.bind(this);
  }

  static get observedAttributes() {
    return ['query', 'searchresults'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      if (name === 'query') this.query = newValue;
      if (name === 'searchresults') this.searchResults = JSON.parse(newValue);
      this.render();
    }
  }

  connectedCallback() {
    this.render();
  }

  handleInteractiveCallback() {
    console.log('interactive element');
  }

  handleButtonCallback() {
    console.log('button callback');
  }

  render() {
    const hasResults = this.searchResults && this.searchResults.length > 0;

    this.shadowRoot.innerHTML = `
      <style>
        /* Add styles here or link to an external stylesheet */
        .results-container {
          /* Styles for the results container */
        }
        .result-item {
          /* Styles for each result item */
        }
        .error-message {
          color: red;
          font-weight: bold;
        }
      </style>
      <div class="results-container">
        ${
          hasResults
            ? this.searchResults
                .map(
                  (result, index) => `
          <div class="result-item" key="${result.id}-${index}">
            <h2>${result.title}</h2>
            <h3>${result.release_date}</h3>
            <img src="${result.poster}" alt="${result.title}" />
            <p>${result.overview}</p>
            <button class="interactive-button">View More</button>
          </div>
        `,
                )
                .join('')
            : `<div class="error-message">No search results found for "${this.query}"</div>`
        }
      </div>
    `;

    this.shadowRoot
      .querySelectorAll('.interactive-button')
      .forEach((button) => {
        button.addEventListener('click', this.handleButtonCallback);
      });
  }
}

customElements.define('base-search-results', BaseSearchResults);
