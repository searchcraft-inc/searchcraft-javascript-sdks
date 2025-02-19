import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { configAlternate } from '@utils/AlternateSearchcraftConfig';

import './searchcraft-colors.scss';
import type { PopoverResultMappings } from '@searchcraft/javascript-sdk';

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

const componentMeta: Meta = {
  title: 'Hologram/searchcraft-theme',
  argTypes: {
    foregroundColor: {
      control: {
        type: 'color',
      },
      description:
        'Base color used to generate other page primary color values.',
    },
    backgroundColor: {
      control: {
        type: 'color',
      },
    },
    brandColor: {
      control: {
        type: 'color',
      },
    },
    successColor: {
      control: {
        type: 'color',
      },
    },
    cautionColor: {
      control: {
        type: 'color',
      },
    },
    dangerColor: {
      control: {
        type: 'color',
      },
    },
    customTheme: {
      control: {
        type: 'object',
      },
      description:
        'Stringified JSON object that can be used to define starting values.',
    },
  },
};

const defaultProps = {
  foregroundColor: '',
  backgroundColor: '',
  brandColor: '',
  successColor: '',
  cautionColor: '',
  dangerColor: '',
  customTheme: {},
};

export const Colors: StoryObj<{
  foregroundColor: string;
  backgroundColor: string;
  brandColor: string;
  successColor: string;
  cautionColor: string;
  dangerColor: string;
  customTheme: Record<string, string>;
}> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        const searchForm = document.querySelector('searchcraft-popover-form');

        if (searchForm) {
          searchForm.config = configAlternate;
          searchForm.popoverResultMappings = mappings;
        }
      }, []);

      return <Story />;
    },
  ],
  render: (args) => {
    return (
      <>
        <searchcraft-theme customTheme={JSON.stringify(args.customTheme)} />
        <style
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                ${args.foregroundColor ? `--sc-color-foreground: ${args.foregroundColor};` : ''}
                ${args.backgroundColor ? `--sc-color-background: ${args.backgroundColor};` : ''}
                ${args.brandColor ? `--sc-color-brand: ${args.brandColor};` : ''}
                ${args.successColor ? `--sc-color-success: ${args.successColor};` : ''}
                ${args.cautionColor ? `--sc-color-caution: ${args.cautionColor};` : ''}
                ${args.dangerColor ? `--sc-color-danger: ${args.dangerColor};` : ''}
              }
            `,
          }}
        />
        <p className='color-groups-heading'>Colors</p>
        <table className='color-groups'>
          <tr>
            <td>Background</td>
            <td>
              <div className='color-group'>
                <div className='color background' />
              </div>
            </td>
          </tr>
          <tr>
            <td>Brand</td>
            <td>
              <div className='color-group'>
                <div className='color brand' />
              </div>
            </td>
          </tr>
          <tr>
            <td>Success</td>
            <td>
              <div className='color-group'>
                <div className='color success' />
                <div className='color success-secondary' />
              </div>
            </td>
          </tr>
          <tr>
            <td>Caution</td>
            <td>
              <div className='color-group'>
                <div className='color caution' />
                <div className='color caution-secondary' />
              </div>
            </td>
          </tr>
          <tr>
            <td>Danger</td>
            <td>
              <div className='color-group'>
                <div className='color danger' />
                <div className='color danger-secondary' />
              </div>
            </td>
          </tr>
        </table>
        <p className='components-heading'>Components</p>
        <div className='components'>
          <div className='component'>
            <p className='components-subheading'>searchcraft-popover-form</p>
            <searchcraft-popover-form
              type='inline'
              hotkey='k'
              hotkey-modifier='ctrl'
            />
          </div>
        </div>
      </>
    );
  },
  args: defaultProps,
};

export default componentMeta;
