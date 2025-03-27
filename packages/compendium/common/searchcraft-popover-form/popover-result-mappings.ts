import type { PopoverResultMappings } from '@searchcraft/javascript-sdk';

export const popoverResultMappings: PopoverResultMappings = {
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
