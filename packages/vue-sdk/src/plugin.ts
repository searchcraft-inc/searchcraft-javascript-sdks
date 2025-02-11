import { defineCustomElements } from '@searchcraft/javascript-sdk';
import type { Plugin } from 'vue';

export const ComponentLibrary: Plugin = {
  async install() {
    defineCustomElements();
  },
};
