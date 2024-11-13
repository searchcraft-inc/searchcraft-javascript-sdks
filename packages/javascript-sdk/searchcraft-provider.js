export class SearchcraftProvider extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.query = '';
    this.isRequesting = false;
    this.searchResults = null;
    this.theme = 'light';
    this.searchcraft = null;
    this.debug = false;
    this.debuggerInstance = null;
    // this.log = this.log.bind(this);
    this.search = this.search.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  static get observedAttributes() {
    return ['debug', 'searchcraft'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      // if (name === 'debug') {
      //   this.debug = newValue === 'true';
      //   if (this.debug) {
      //     this.debuggerInstance = new SDKDebugger({ logLevel: LogLevel.DEBUG });
      //   }
      // }
      if (name === 'searchcraft') {
        this.searchcraft = newValue;
      }
      this.render();
    }
  }

  connectedCallback() {
    // this.log(LogLevel.INFO, 'SearchcraftProvider mounted.');
    this.render();
  }

  disconnectedCallback() {
    // this.log(LogLevel.INFO, 'SearchcraftProvider unmounted.');
  }

  // log(level, message) {
  //   if (this.debuggerInstance) {
  //     switch (level) {
  //       case LogLevel.DEBUG:
  //         this.debuggerInstance.debug(message);
  //         break;
  //       case LogLevel.INFO:
  //         this.debuggerInstance.info(message);
  //         break;
  //       case LogLevel.WARN:
  //         this.debuggerInstance.warn(message);
  //         break;
  //       case LogLevel.ERROR:
  //         this.debuggerInstance.error(message);
  //         break;
  //       default:
  //         break;
  //     }
  //   }
  // }

  async search() {
    // this.log(LogLevel.INFO, `Starting search with query: "${this.query}"`);
    this.isRequesting = true;
    this.render();

    try {
      const results = await this.searchcraft.search({
        query: this.query,
        mode: 'fuzzy',
      });
      this.searchResults = results;
      // this.log(LogLevel.DEBUG, `Search results: ${JSON.stringify(results)}`);
    } catch (error) {
      // this.log(LogLevel.ERROR, `Search failed with error: ${error.message}`);
    } finally {
      this.isRequesting = false;
      this.render();
    }
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        /* Add relevant styles here */
      </style>
      <div class="provider">
        <div>Theme: ${this.theme}</div>
        <button id="toggle-theme">Toggle Theme</button>
        <input type="text" id="query-input" placeholder="Enter search term" value="${this.query}" />
        <button id="search-button">Search</button>
        <div id="results">
          ${this.isRequesting ? 'Loading...' : JSON.stringify(this.searchResults)}
        </div>
      </div>
    `;
    this.shadowRoot
      .querySelector('#toggle-theme')
      .addEventListener('click', this.toggleTheme);
    this.shadowRoot
      .querySelector('#query-input')
      .addEventListener('input', (event) => {
        this.query = event.target.value;
      });
    this.shadowRoot
      .querySelector('#search-button')
      .addEventListener('click', this.search);
  }
}

customElements.define('searchcraft-provider', SearchcraftProvider);
