---
id: api-reference-htmlapp
title: HTMLApp
---

## `HTMLApp`

Constructor class for the core HTMLApp component.

### Options

Options are passed as an object to the constructor.

#### `appName` *optional*

*Type:* `string`

The value used in the root element attribute. This controls which element is
treated as the root of the application.

If this is omitted, the first found element with a `data-htmlapp` attribute
gets used.

#### `eventHandlers` *optional*

*Type:* `{ id: string, root: boolean, document: boolean }[]`

An array of objects used to bind event handlers to child elements within the
root element.

- `id` - the value that appears in a `data-ha` element attribute; not required
  if `root` or `document` is true
- `root` - whether events for this handler object should be bound to the root
  element
- `document` - whether events for this handler object should be bound to the
  document

### Returns

The created app instance.

### Usage

```js
new HTMLApp({
  appName: 'specialApp',
  eventHandlers: [
    {
      id: 'userName',
      onChance: (e) => {}
    }
  ]
});
```
