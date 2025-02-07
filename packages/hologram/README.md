# Hologram

## Introduction

### What is Hologram?

Hologram is a generative CSS styling framework that leverages CSS variables for easy, yet flexible, design customization.

## Configuration

### Base Variables

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
}
```

### All Variables

These additional variables enable further customization of the styles within the Searchcraft theme.

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
}
```

## Inline Configuration

In addition to configuring CSS, variables can be defined through the `customTheme` property on the `searchcraft-theme` / `SearchcraftTheme` element.

```html
<script>
  const customTheme = {
    scSuccessColor: '#008000',
    scCautionColor: '#cc6600',
    scDangerColor: '#cc0000'
  };
  const element = document.querySelector('searchcraft-theme');
  element.customTheme = JSON.stringify(customTheme)
</script>

<searchcraft-theme />
```