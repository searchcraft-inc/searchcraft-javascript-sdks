# Javascript Configuration

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