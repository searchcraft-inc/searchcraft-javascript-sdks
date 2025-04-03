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
    fieldNames: [{ fieldName: 'price', dataType: 'text' }],
  },
  imageSource: {
    fieldNames: [{ fieldName: 'image', dataType: 'text' }],
  },
  imageAlt: {
    fieldNames: [{ fieldName: 'title', dataType: 'text' }],
  },
};

export const popoverResultMappingsRunegard: PopoverResultMappings = {
  href: {
    fieldNames: [
      {
        fieldName: 'canonical_link',
        dataType: 'text',
      },
    ],
  },
  title: {
    fieldNames: [{ fieldName: 'headline', dataType: 'text' }],
  },
  subtitle: {
    fieldNames: [{ fieldName: 'date_modified', dataType: 'date' }],
  },
  imageSource: {
    fieldNames: [{ fieldName: 'medium_image', dataType: 'text' }],
  },
  imageAlt: {
    fieldNames: [{ fieldName: 'headline', dataType: 'text' }],
  },
};
