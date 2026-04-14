// MyComponent.server.tsx
import { renderToString } from '@searchcraft/javascript-sdk/hydrate';

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export async function getSearchcraftHtml(
  tagName: string,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  props: { [key: string]: any },
) {
  const attributes = Object.entries(props)
    .map(([key, value]) => {
      if (typeof value === 'boolean') return value ? key : '';
      return `${key}="${escapeAttr(String(value))}"`;
    })
    .filter(Boolean)
    .join(' ');

  const tag = `<${tagName} ${attributes}></${tagName}>`;

  const result = await renderToString(tag, {
    fullDocument: false,
    clientHydrateAnnotations: true,
  });

  return {
    tag,
    html: result.html,
  };
}
