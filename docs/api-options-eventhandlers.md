---
id: api-options-eventhandlers
title: Event Handlers
---

Event handlers are the bread and butter of HTMLApp. With them, interactions
are defined as functions that are called in response to events that happen in
the UI, such as mouse clicks, typing or scrolling.

The `eventHandlers` option, passed in when a new HTMLApp instance is created,
is an array of objects. Each object can contain various properties that control
which HTML element is being watched and what should happen when various
events occur on it.

Here's an example that demonstrates using `eventHandlers` with all possible
properties being utilised:

```js
new HTMLApp({
  eventHandlers: [
    // document event handlers
    { document: true, onScroll: function(e, el, app) {} },
    
    // root element event handlers
    { root: true, onClick: function(e, el, app) {} },
    { root: true, ignoreChildren: true, onClick: function(e, el, app) {} },
    
    // child element event handlers
    { id: 'normalButton', onClick: function(e, el, app) {} },
    {
      id: 'strictButton',
      ignoreChildren: true,
      onClick: function(e, el, app) {}
    },
    { id: 'nameInput', onChange: function(e, el, app) {} },
    {
      id: 'greedyDropdown',
      onClick: function(e, el, app) {},
      onKeyDown: function(e, el, app) {},
      onKeyUp: function(e, el, app) {}
    }
  ]
});
```

Below is a comprehensive list of all available properties that an event handler
object can have.

## `onEvent` callbacks

*Type:* `function`

*Params:*

- `e` - the native event object
- `el` - an enhanced version of the element with helper methods exposed, see
  [Element Wrappers](./api-elements.md) for the full list of helper methods
  available
- `app` - the app instance object with helper methods exposed

Any valid native element event can be bound to an event handler. to name a
very scant few: `click`, `keypress`, `scroll`, `focus`, `blur`, `change`.
For a very comprehensive list of available events, check out the
[MDN Event reference](https://developer.mozilla.org/en-US/docs/Web/Events).

When adding an event handler callback, the desired event name must be defined
as a camelcase name starting with "on". For example, to define a `click` event
callback, it should be called: `onClick`, and a `keypress` event will be called
`onKeyPress`.

For brevity, several event callbacks can be added to a single event handler
object, like so:

```js
{
  id: 'greedyDropdown',
  onClick: function(e, el, app) {},
  onKeyDown: function(e, el, app) {},
  onKeyUp: function(e, el, app) {}
}
```

> Tip: only the letter immediately following **"on"** needs to be capitalised, so
> `onKeyPress` will work just as well as `onKeypress`.

## `id`

*Type:* `string`

`id` is a required property when defining a normal element event handler, and is
not required for root or document event handlers.

The value of `id` must match the value of a child HTML element, defined using
the `data-ha` attribute.

```html
<div data-htmlapp>
  <button data-ha="normalButton">Click me</button>
</div>
```

```js
{ id: 'normalButton', onClick: function(e, el, app) {} }
```

## `root`

*Type:* `boolean`

If `root` is provided and is set to `true`, this denotes that the event handler
should react to root element events. The root element is the element that has
the app attribute (`data-htmlapp`) and whose value matches the `appName` option
passed when the app instance is created.

A good example of when a root event is useful is if you were to assign the
`data-htmlapp` attribute to a form element. It then becomes trivial to react
to form submission events, as in this example:

```html
<form data-htmlapp="loginForm">
  <input name="userName" data-ha="userName">
  <input name="password" data-ha="password">
</form>
```

```js
{
  root: true,
  onSubmit: function(e, el, app) {
    e.preventDefault();
    var data = new FormData(e.target);

    for (var field of data) {
      console.log(field[0], field[1]);
    }
  }
}
```

## `document`

*Type:* `boolean`

If `document` is provided and is set to `true`, this denotes that the event
handler should react to document events.

There's various cases where a document-wide event is necessary, for example
reacting to scroll events. Here's an example event handler:

```js
{
  document: true,
  onScroll: function (e, el, app) {
    console.log(e.pageY);
  }
}
```

## Preventing event bubbling with `ignoreChildren`

By default in the majority of browsers, events *bubble*. This means if an
element has an event handler bound to it and a child of that element has an
event triggered on it, the event handler bound to the parent will be called.

```html
<button data-ha="strictButton">
  Click me!
  <span class="icon"></span>
</button>
```

As an example, imagine having a `button` in your HTML page that contains an
icon inside a `span`. If the button has a click event handler bound to it and
the icon is clicked, the button event handler will trigger.

HTMLApp gives you the choice to opt-out of having child events trigger a
parent callback by using a event handler property: `ignoreChildren`. This is
like saying: *"ignore events triggered by my children"*.

Using it is very straightforward:

```js
{
  id: 'strictButton',
  ignoreChildren: true, // child events won't trigger onClick
  onClick: function(e, el, app) {}
}
```

Now clicks made on `<button data-ha="strictButton">` *must* be made directly
on the button itself, not its children.

`ignoreChildren` can also be applied to root events, too:

```js
{
  root: true,
  ignoreChildren: true, // child events won't trigger onClick
  onClick: function(e, el, app) {}
}
```

Currently document events don't support it, however.
