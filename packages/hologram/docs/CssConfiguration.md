# CSS Configuration

## Generative Variables

By utilizing this base set of variables, Hologram can dynamically generate all the required styles for the Searchcraft theme.

```css
:root {
  /* colors */
  --sc-color-foreground: #292929;
  --sc-color-background: #ffffff;
  --sc-color-brand: #000000;
  --sc-color-success: #008000;
  --sc-color-caution: #cc6600;
  --sc-color-danger: #cc0000;

  /* typography */
  --sc-text-base-size: 1em;
  --sc-font-family: sans-serif;
  --sc-font-bold: 700;
  --sc-font-normal: 400;

  /* appearance */
  --sc-border-radius: 8px;
}
```

## All Available Variables

These additional variables enable further customization of the styles within the Searchcraft theme. These are dynamically generated based on the base variables, but can be independently customized.

```css
:root {
  /* colors */
  --sc-color-foreground: #292929;
  --sc-color-background: #ffffff;
  --sc-color-brand: #000000;
  --sc-color-success: #008000;
  --sc-color-caution: #cc6600;
  --sc-color-danger: #cc0000;

  --sc-color-foreground: #292929;
  --sc-color-foreground-secondary: #404040;

  --sc-color-background-hover: #ededed;
  --sc-color-background-active: #e6e6e6;
  --sc-color-background-secondary: #f3f3f3;
  --sc-color-background-secondary-hover: #e6e6e6;
  --sc-color-background-secondary-active: #e0e0e0;

  --sc-color-brand-hover: #2e2e2e;
  --sc-color-brand-active: #292929;
  --sc-color-brand-secondary: #e6e6e6;
  --sc-color-brand-secondary-hover: #ebebeb;
  --sc-color-brand-secondary-active: #e0e0e0;

  --sc-color-success-primary-hover: #009900;
  --sc-color-success-primary-active: #006600;
  --sc-color-success-secondary: #ccffcc;
  --sc-color-success-secondary-hover: #e6ffe6;
  --sc-color-success-secondary-active: #b2ffb2;

  --sc-color-caution-primary-hover: #e57300;
  --sc-color-caution-primary-active: #b25a00;
  --sc-color-caution-secondary: #ffd9b3;
  --sc-color-caution-secondary-hover: #ffe5cc;
  --sc-color-caution-secondary-active: #ffcc99;

  --sc-color-danger-primary-hover: #e50000;
  --sc-color-danger-primary-active: #b30000;
  --sc-color-danger-secondary: #ffcccc;
  --sc-color-danger-secondary-hover: #ffe7e7;
  --sc-color-danger-secondary-active: #ffb3b3;

  --sc-color-disabled: #d9d9d9;

  /* text colors */
  --sc-color-brand-text: #000000;
  --sc-color-success-text: #008000;
  --sc-color-caution-text: #994d00;
  --sc-color-danger-text: #990000;
  --sc-color-disabled-text: #737373;

  /* typography */
  --sc-text-base-size: 1em;
  --sc-text-scale-ratio: 1.1;
  --sc-font-family: sans-serif;
  --sc-font-bold: 700;
  --sc-font-normal: 400;

  /* appearance */
  --sc-border-radius: 8px;
}
```

## Variable Mapping

This table demonstrates the mapping of all base variables to their corresponding generated variables.

| Variable | Generated Variables |
|----------|---------------------|
| --sc-color-foreground | --sc-color-foreground-secondary |
| --sc-color-background | --sc-color-background-primary-hover<br> --sc-color-background-primary-active<br> --sc-color-background-secondary<br> --sc-color-background-secondary-hover<br> --sc-color-background-secondary-active |
| --sc-color-brand | --sc-color-brand-primary-hover<br> --sc-color-brand-primary-active<br> --sc-color-brand-secondary<br> --sc-color-brand-secondary-hover<br> --sc-color-brand-secondary-active |
| --sc-color-success | --sc-color-success-primary-hover<br> --sc-color-success-primary-active<br> --sc-color-success-secondary<br> --sc-color-success-secondary-hover<br> --sc-color-success-secondary-active |
| --sc-color-caution | --sc-color-caution-primary-hover<br> --sc-color-caution-primary-active<br> --sc-color-caution-secondary<br> --sc-color-caution-secondary-hover<br> --sc-color-caution-secondary-active |
| --sc-color-danger | --sc-color-danger-primary-hover<br> --sc-color-danger-primary-active<br> --sc-color-danger-secondary<br> --sc-color-danger-secondary-hover<br> --sc-color-danger-secondary-active |
| --sc-text-base-size | --sc-heading-1-font-size<br> --sc-heading-2-font-size<br> --sc-heading-3-font-size<br> --sc-heading-4-font-size<br> --sc-heading-5-font-size<br> --sc-heading-6-font-size<br> --sc-body-font-size<br> --sc-body-small-font-size |
| --sc-border-radius | --sc-border-radius-sm<br> --sc-border-radius-lg |