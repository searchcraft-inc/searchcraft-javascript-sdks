import type { Meta, StoryObj } from '@storybook/react';

import './searchcraft-typography.scss';

const componentMeta: Meta = {
  title: 'Hologram/searchcraft-theme',
  argTypes: {
    textBaseSize: {
      control: {
        type: 'number',
        min: 1,
      },
      description: 'Base text size used to generate other values.',
    },
  },
};

const defaultProps = {
  textBaseSize: 16,
};

export const Typography: StoryObj<{
  textBaseSize: number;
}> = {
  render: (args) => {
    return (
      <>
        <searchcraft-theme />
        <style
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --sc-text-base-size: ${args.textBaseSize || defaultProps.textBaseSize}px;
              }
            `,
          }}
        />
        <div className='typography-samples'>
          <div className='typography-sample'>
            <p className='typography-sample-heading'>Body small</p>
            <p className='typography-sample-text body-small'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </p>
          </div>
          <div className='typography-sample'>
            <p className='typography-sample-heading'>Body</p>
            <p className='typography-sample-text body'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </p>
          </div>

          <div className='typography-sample'>
            <p className='typography-sample-heading'>Heading 6</p>
            <p className='typography-sample-text heading-6'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </p>
          </div>

          <div className='typography-sample'>
            <p className='typography-sample-heading'>Heading 5</p>
            <p className='typography-sample-text heading-5'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </p>
          </div>

          <div className='typography-sample'>
            <p className='typography-sample-heading'>Heading 4</p>
            <p className='typography-sample-text heading-4'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </p>
          </div>

          <div className='typography-sample'>
            <p className='typography-sample-heading'>Heading 3</p>
            <p className='typography-sample-text heading-3'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </p>
          </div>

          <div className='typography-sample'>
            <p className='typography-sample-heading'>Heading 2</p>
            <p className='typography-sample-text heading-2'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </p>
          </div>

          <div className='typography-sample'>
            <p className='typography-sample-heading'>Heading 1</p>
            <p className='typography-sample-text heading-1'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </>
    );
  },
  args: defaultProps,
};

export default componentMeta;
