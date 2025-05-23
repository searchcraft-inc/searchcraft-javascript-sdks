import type { Meta, StoryFn } from '@storybook/vue3';

import {
  Searchcraft,
  SearchcraftPopoverButton,
  SearchcraftPopoverForm,
} from '@searchcraft/vue-sdk';

import { popoverResultMappings } from '@common/index.js';

import '@common/searchcraft-popover-form/popover-form-with-content.scss';

export default {
  title: 'Vue SDK/searchcraft-popover-form',
  components: { SearchcraftPopoverForm, SearchcraftPopoverButton },
  argTypes: {},
} as Meta;

export const Inline: StoryFn = (args) => ({
  components: { SearchcraftPopoverForm },
  setup() {
    new Searchcraft({
      readKey: import.meta.env.VITE_READ_KEY_BAZAARIO,
      endpointURL: import.meta.env.VITE_ENDPOINT_URL_BAZAARIO,
      index: [import.meta.env.VITE_INDEX_BAZAARIO],
    });
    return { args, popoverResultMappings };
  },
  template: `
    <div class="searchcraft-popover-form-with-content">
      <p>Story Note: This story uses the Bazaario env vars</p>
      <SearchcraftPopoverForm
        hotkey="k"
        hotkeyModifier="ctrl"
        :popoverResultMappings="popoverResultMappings"
        type="inline"
      />
      <p>
        Here's some content that shows up underneath the popover. The popover
        should render above this content when it is active.
      </p>
    </div>
  `,
});

export const Modal: StoryFn = (args) => ({
  components: {
    SearchcraftPopoverForm,
    SearchcraftPopoverButton,
  },
  setup() {
    new Searchcraft({
      readKey: import.meta.env.VITE_READ_KEY_BAZAARIO,
      endpointURL: import.meta.env.VITE_ENDPOINT_URL_BAZAARIO,
      index: [import.meta.env.VITE_INDEX_BAZAARIO],
    });
    return { args, popoverResultMappings };
  },
  template: `
    <div class="searchcraft-popover-form-with-content">
      <p>Story Note: This story uses the Bazaario env vars</p>
      <SearchcraftPopoverButton>
        <span>Click me</span>
      </SearchcraftPopoverButton>
      <SearchcraftPopoverForm
        hotkey="k"
        hotkeyModifier="ctrl"
        :popoverResultMappings="popoverResultMappings"
        type="modal"
      />
    </div>
  `,
});

export const Fullscreen: StoryFn = (args) => ({
  components: {
    SearchcraftPopoverForm,
    SearchcraftPopoverButton,
  },
  setup() {
    new Searchcraft({
      readKey: import.meta.env.VITE_READ_KEY_BAZAARIO,
      endpointURL: import.meta.env.VITE_ENDPOINT_URL_BAZAARIO,
      index: [import.meta.env.VITE_INDEX_BAZAARIO],
    });
    return { args, popoverResultMappings };
  },
  template: `
    <div class="searchcraft-popover-form-with-content">
      <p>Story Note: This story uses the Bazaario env vars</p>
      <SearchcraftPopoverButton>
        <span>Click me</span>
      </SearchcraftPopoverButton>
      <SearchcraftPopoverForm
        hotkey="k"
        hotkeyModifier="ctrl"
        :popoverResultMappings="popoverResultMappings"
        type="fullscreen"
      />
    </div>
  `,
});
