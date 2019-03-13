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
<div data-htmlapp="secondary"></div>
```

```js
new HTMLApp({
  appName: 'main'
});

new HTMLApp({
  appName: 'secondary'
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

```js
new HTMLApp();
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

## App Instance API

When `HTMLApp` is initialised, it creates an app **instance**.
This instance is accessible through one of the following ways:

- In `eventHandlers` callbacks in the third argument
- In the `onLoadApp` lifecycle method in the third argument
- Returned from: `new HTMLApp`

The app instance exposes some useful methods, as listed below.

### `getEl(elementName: string)`

A function that returns a single element wrapper of the passed
child element name. The passed name must match an element's
`data-ha` attribute value.

If no element is found, `undefined` is returned instead.

```js
var app = new HTMLApp({
  onLoadApp: function(rootEl, els, app) {
    app.getEl('email').addClass('loaded');
  },
  eventHandlers: [
    {
      id: 'password',
      onChange: function(e, el, app) {
        app.getEl('email').addClass('password-updated');
      }
    }
  ]
});

// Potentially returns undefined if window.load has not yet been called
app.getEl('email');
```

### `getRootEl()`

A function that returns an element wrapper of the app root
element.

```js
var app = new HTMLApp({
  onLoadApp: function(rootEl, els, app) {
    app.getRootEl().addClass('loaded');
  },
  eventHandlers: [
    {
      id: 'password',
      onChange: function(e, el, app) {
        app.getRootEl().addClass('password-updated');
      }
    }
  ]
});

// Potentially returns undefined if window.load has not yet been called
app.getRootEl('email');
```

