import type {
  AdClientResponseItem,
  SearchcraftConfig,
  SearchcraftResponse,
  SearchClientRequestProperties,
} from '../../types';

import { AdClient } from './AdClient';

const AD_CALL_AFTER_FETCH_DELAY = 1000;

export class NativoClient extends AdClient {
  adCallTimeout?: NodeJS.Timeout;

  constructor(config: SearchcraftConfig) {
    super(config);
    this.addScriptTagToDocument();
  }

  async onQuerySubmitted(_properties: SearchClientRequestProperties) {
    this.addScriptTagToDocument();
  }

  async onQueryFetched(
    _properties: SearchClientRequestProperties,
    response: SearchcraftResponse,
  ) {
    if ((response.data.hits?.length || 0) === 0) {
      this.removeScriptTagFromDocument();
      return;
    }

    this.performAdCall(AD_CALL_AFTER_FETCH_DELAY);
  }

  async onInputCleared() {
    this.removeScriptTagFromDocument();
  }

  performAdCall(delay: number) {
    if (this.adCallTimeout) {
      clearTimeout(this.adCallTimeout);
    }

    this.adCallTimeout = setTimeout(() => {
      this.addScriptTagToDocument();
      try {
        // @ts-ignore
        PostRelease?.Start({ ptd: [this.config.nativoPlacementId] });
      } catch (error) {
        console.error(error);
      }
      // console.log('Performing ad call');
    }, delay);
  }

  async getAds(
    _properties: SearchClientRequestProperties,
  ): Promise<AdClientResponseItem[]> {
    return [];
  }

  private addScriptTagToDocument() {
    if (!document.head.querySelector('#nativo-tag')) {
      const scriptTag = document.createElement('script');
      scriptTag.type = 'text/javascript';
      scriptTag.src = 'https://s.ntv.io/serve/load.js';
      scriptTag.id = 'nativo-tag';
      scriptTag.setAttribute('data-ntv-set-no-auto-start', 'true');
      document.head.appendChild(scriptTag);
    }
  }

  private removeScriptTagFromDocument() {
    const scriptTag = document.head.querySelector('#nativo-tag');
    if (scriptTag) {
      document.head.removeChild(scriptTag);
    }
  }
}
