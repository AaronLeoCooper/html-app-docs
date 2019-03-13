---
id: api-options-lifecycle
title: Lifecycle Methods
---

If you've used React, Angular or other UI libraries,
you may be familiar with the concept of lifecycle
methods. These are callbacks that are executed at
specific times during the lifespan of a component
or the app as a whole.

In HTMLApp, there are also some lifecycle methods.
Since HTMLApp doesn't define "components" per
se, all lifecycle methods are bound to an app
instance.

Lifecycle methods are useful when certain logic
needs to be executed outside of event handlers,
for instance when the app initially loads or unloads.
They are defined as options when a new HTMLApp
instance is created.

Here's an example app initialised with some lifecycle
method callbacks:

```js
new HTMLApp({
  onLoadApp: function(els, app) {
    console.log(els.length, 'child elements found');
  },
  onUnloadApp: function() {
    console.log('Bye bye!');
  }
});
```

Below is a complete list of all available lifecycle
methods. More may be added in the future, too.

## `onLoadApp`

Method called when the app is first initialised
and when the browser window finishes loading,
so this is a safe place to use logic that relies on
elements being in the DOM.

The first argument is an element wrapper of the
root element.

The second argument is an array of child elements
found within the root element of the app. Each element
is an element wrapper instance.

See [Element Wrappers](./api-elements.md)
API page for a full element wrapper reference.

It also receives the app instance as the second
argument.

```js
new HTMLApp({
  onLoadApp: function(rootEl, els, app) {
    console.log(els.length, 'child elements found');

    var emailClasses = app
      .getEl('email')
      .getClasses();
  }
});
```

## `onUnloadApp`

Method called when the app is about to unload.
Currently, this only happens when the browser
`window` event `beforeunload` is triggered.

This method is a good place to use any logic that
should only be executed when the app is about
to be closed.

```js
new HTMLApp({
  onUnloadApp: function() {
    console.log('I am about to go...');
  }
});
```

