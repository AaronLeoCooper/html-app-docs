---
id: api-htmlapp
title: HTMLApp
---

The core component of HTMLApp is the `HTMLApp` class.

When using the downloaded browser-compatible package, `HTMLApp` is a
globally accessible constructor function:

```js
new HTMLApp();
```

When using the installed library from NPM and importing it as an ES6 module,
it is accessed as the default import:

```js
import HTMLApp from 'html-app';

new HTMLApp();
```

## Options

Options are passed as an object to the `HTMLApp` constructor.

### `appName`

The value used in the root element attribute: `data-htmlapp`. This controls
which HTML element is treated as the root of the application.

```html
<div data-htmlapp="main"></div>
```

```js
new HTMLApp({
  appName: 'main'
});
```

If `appName` is omitted, the first found HTML element with a `data-htmlapp`
attribute with *any* value gets used.

Since `appName` is optional, if you know you will only ever have one instance
of `HTMLApp` in your page, you can simply attach a blank root attribute to
an element in your HTML:

```html
<div data-htmlapp></div>
```

### `eventHandlers`

An array of objects used to bind event handlers to child elements within the
root element.

- `id` - the value that appears in a `data-ha` element attribute; not required
  if `root` or `document` is true
- `root` - whether events for this handler object should be bound to the root
  element
- `document` - whether events for this handler object should be bound to the
  document

See [Event Handlers](./api-options-eventhandlers.md) for the full API spec.

### Lifecycle Methods

When initialising a new HTMLApp instance, there are also
some optional lifecycle methods that may be included
in the passed options object.

See the [Lifecycle Methods](./api-options-lifecycle.md) API reference for a full list. 

