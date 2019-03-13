---
id: api-elements
title: Element wrappers
---

Element wrappers are a feature in HTMLApp that make
it easy to interact with child elements. Think of element
wrappers a bit like very lean jQuery elements that expose
methods like `addClass`, `removeClass` and so on.

Element wrappers are available in a few different places:

- In [Event Handler](./api-options-eventhandlers.md) callbacks:
  - The second argument (`el`) is an element wrapper of the element the
    event is attached to
  - Calling `app.getEl('elementName')` returns an element wrapper of
    the matched element
  - Calling `app.getRootEl()` returns an element wrapper of the app
    root element
- In the `onLoadApp` callback:
  - The first argument is an array of all child element wrappers
    in the app

## Element Wrapper API

All element wrappers expose the following properties
and methods.

### `id`

A string reference to the HTML element's `data-ha`
attribute of the element.

If the element is a root element, `id` will be
`undefined`.

### `el`

A reference to the native HTML DOM element. This is
useful in cases where the element wrapper methods below
don't provide a specific feature, for example access to
`el.querySelector`.

```js
wrapper.el.querySelector('input');
```

### `addClass(className: string)`

Adds one or many classes to the HTML element.

Multiple class names can be passed as individual
arguments.

```js
wrapper.addClass('class1', 'class2');
```

### `removeClass(className: string)`

Removes one or many classes from the HTML element.

Multiple class names can be passed as individual
arguments.

```js
wrapper.removeClass('class1', 'class2');
```

### `setText(text: string)`

Safely sets the text content of the HTML element.

```js
wrapper.setText('Hello!');
```

Element text can also be cleared by passing an empty
string.

### `setInnerHtml(innerHtml: string)`

Sets the `innerHTML` value of the HTML element to the
passed string. This is one way of dynamically adding
HTML content inside the element.

No pre-processing is done to the passed content to guard
against
[Cross-site script attacks](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting),
so using this should be as a last resort.

```js
wrapper.setInnerHtml('<p>HTML content</p>');
```

However, libraries can also be used to sanitize content
before passing it in, such as [DOMPurify](https://github.com/cure53/DOMPurify).

### `setAttribute(attrName: string, attrValue: string)`

Sets a single HTML element attribute based on the
passed key and value.

```js
wrapper.setAttribute('data-abc', '123');
```

### `removeAttribute(attrName: string)`

Removes a single HTML element attribute based on the
passed key.

```js
wrapper.removeAttribute('data-abc');
```

### `setStyle(styleName: string, styleValue: string)`

Sets a single inline style on the HTML element.

```js
wrapper.setStyle('color', 'red');
```

### `getText()`

Returns the current text content of the HTML element.

```js
var text = wrapper.getText();
```

### `getInnerHtml()`

Returns the innerHTML content of the HTML element.

```js
var html = wrapper.getInnerHtml();
```

### `getClasses()`

Returns all classes on the HTML element as an array
of string values.

```js
var classes = wrapper.getClasses();
```

### `getAttribute(attrName: string)`

Returns a single attribute value on the HTML element,
based on the passed attribute name.

```js
var value = wrapper.getAttribute('data-abc');
```

### `getAttributes()`

Returns all attributes on the HTML element as an object
of key value pairs.

```js
var attributes = wrapper.getAttributes();
// { id: 'email', class: 'input', 'data-ha': 'email' }
```

### `getStyle(styleName: string)`

Returns a single inline style value on the HTML element,
based on the passed style name.

```js
var color = wrapper.getStyle('color');
```

