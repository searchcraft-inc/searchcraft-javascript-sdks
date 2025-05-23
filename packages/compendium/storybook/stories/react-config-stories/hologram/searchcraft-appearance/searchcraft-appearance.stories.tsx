import type { Meta, StoryObj } from '@storybook/react';
import './searchcraft-appearance.scss';
import { useEffect } from 'react';
import { Searchcraft } from '@searchcraft/javascript-sdk';

const componentMeta: Meta = {
  title: 'Hologram/searchcraft-theme',
  argTypes: {
    borderRadius: {
      control: {
        type: 'number',
        min: 0,
      },
      description: 'Base border radius used to generate other values.',
    },
  },
};

const defaultProps = {
  borderRadius: 8,
};

export const Appearance: StoryObj<{
  borderRadius: number;
}> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        new Searchcraft({
          readKey: import.meta.env.VITE_READ_KEY_ECHOSTREAM,
          endpointURL: import.meta.env.VITE_ENDPOINT_URL_ECHOSTREAM,
          index: [import.meta.env.VITE_INDEX_ECHOSTREAM],
        });
      }, []);
      return <Story />;
    },
  ],
  render: (args) => {
    return (
      <>
        <style
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --sc-border-radius: ${args.borderRadius || defaultProps.borderRadius}px;
              }
            `,
          }}
        />
        <div className='border-radii'>
          <div className='border-radius border-radius-sm'>
            <p>SM</p>
          </div>
          <div className='border-radius'>
            <p>BASE</p>
          </div>
          <div className='border-radius border-radius-lg'>
            <p>LG</p>
          </div>
        </div>
      </>
    );
  },
  args: defaultProps,
};

export default componentMeta;
