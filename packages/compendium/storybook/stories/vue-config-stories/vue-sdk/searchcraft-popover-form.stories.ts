import type { PopoverResultMappings } from '@searchcraft/javascript-sdk';
import {
  Searchcraft,
  SearchcraftPopoverButton,
  SearchcraftPopoverForm,
  SearchcraftTheme,
} from '@searchcraft/vue-sdk';
import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Vue SDK/searchcraft-popover-form',
  components: { SearchcraftPopoverForm, SearchcraftPopoverButton },
  argTypes: {},
} as Meta;

const mappings: PopoverResultMappings = {
  href: {
    fieldNames: [
      {
        fieldName: 'link',
        dataType: 'text',
      },
    ],
  },
  title: {
    fieldNames: [{ fieldName: 'title', dataType: 'text' }],
  },
  subtitle: {
    fieldNames: [
      {
        fieldName: 'price',
        dataType: 'number',
        numberFormatLocale: 'en-US',
        numberFormatOptions: {
          style: 'currency',
          currency: 'USD',
        },
        numberScale: 1.0,
      },
    ],
  },
  imageSource: {
    fieldNames: [{ fieldName: 'image', dataType: 'text' }],
  },
  imageAlt: {
    fieldNames: [{ fieldName: 'price', dataType: 'text' }],
  },
};

export const Inline: StoryFn = (args) => ({
  components: { SearchcraftPopoverForm, SearchcraftTheme },
  setup() {
    new Searchcraft({
      readKey: import.meta.env.VITE_KOBOL_READ_KEY,
      endpointURL: import.meta.env.VITE_KOBOL_ENDPOINT_URL,
      index: [import.meta.env.VITE_KOBOL_INDEX],
    });
    return { args, mappings };
  },
  template: `
    <div style="padding: 10px 20px;">
      <SearchcraftTheme />
      <p>Story Note: This story uses the Bazaario env vars</p>
      <SearchcraftPopoverForm
        hotkey="k"
        hotkeyModifier="ctrl"
        :popoverResultMappings="mappings"
        type="inline"
      />
      <p style="margin-bottom: 100px;">
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
    SearchcraftTheme,
  },
  setup() {
    new Searchcraft({
      readKey: import.meta.env.VITE_KOBOL_READ_KEY,
      endpointURL: import.meta.env.VITE_KOBOL_ENDPOINT_URL,
      index: [import.meta.env.VITE_KOBOL_INDEX],
    });
    return { args, mappings };
  },
  template: `
    <div style="padding: 10px 20px;">
      <SearchcraftTheme />
      <p>Story Note: This story uses the Bazaario env vars</p>
      <SearchcraftPopoverButton>
        <span>Click me</span>
      </SearchcraftPopoverButton>
      <SearchcraftPopoverForm
        hotkey="k"
        hotkeyModifier="ctrl"
        :popoverResultMappings="mappings"
        type="modal"
      />
    </div>
  `,
});

export const Fullscreen: StoryFn = (args) => ({
  components: {
    SearchcraftPopoverForm,
    SearchcraftPopoverButton,
    SearchcraftTheme,
  },
  setup() {
    new Searchcraft({
      readKey: import.meta.env.VITE_KOBOL_READ_KEY,
      endpointURL: import.meta.env.VITE_KOBOL_ENDPOINT_URL,
      index: [import.meta.env.VITE_KOBOL_INDEX],
    });
    return { args, mappings };
  },
  template: `
    <div style="padding: 10px 20px;">
      <SearchcraftTheme />
      <p>Story Note: This story uses the Bazaario env vars</p>
      <SearchcraftPopoverButton>
        <span>Click me</span>
      </SearchcraftPopoverButton>
      <SearchcraftPopoverForm
        hotkey="k"
        hotkeyModifier="ctrl"
        :popoverResultMappings="mappings"
        type="fullscreen"
      />
    </div>
  `,
});
