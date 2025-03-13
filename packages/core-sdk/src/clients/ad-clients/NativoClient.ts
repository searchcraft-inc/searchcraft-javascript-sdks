import type {
  AdClientResponseItem,
  SearchcraftConfig,
  SearchcraftResponse,
  SearchParams,
} from '../../types';
import { AdClient } from './AdClient';

export class NativoClient extends AdClient {
  constructor(config: SearchcraftConfig) {
    super(config);
    this.addScriptTagToDocument();
  }

  async onQuerySubmitted(_searchParams: SearchParams) {
    this.addScriptTagToDocument();
  }

  async onQueryFetched(
    _searchParams: SearchParams,
    response: SearchcraftResponse,
  ) {
    if ((response.data.hits?.length || 0) === 0) {
      this.removeScriptTagFromDocument();
      return;
    }

    this.addScriptTagToDocument();
    try {
      // @ts-ignore
      PostRelease?.Start({ ptd: [this.config.nativoPlacementId] });
    } catch (error) {
      console.error(error);
    }
  }

  async onInputCleared() {
    this.removeScriptTagFromDocument();
  }

  async getAdsForSearchParams(
    _params: SearchParams,
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
