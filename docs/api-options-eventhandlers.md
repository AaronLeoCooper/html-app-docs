---
id: api-options-eventhandlers
title: Event Handlers
---


Event handlers are the bread and butter of HTMLApp. With them, interactions are
defined as functions that are called in response to events in the UI, such as mouse
clicks, typing or scrolling.

The `eventHandlers` option, passed in when a new HTMLApp instance is created, is an
array of objects. Each object can contain various properties that control which
HTML element is being watched and what should happen when various events occur on it.

Below is a comprehensive list of all available properties that an event handler object
can have.

## `id`

*Type:* `string`

The `id` is a required property when defining a normal element event handler. The value
of `id` must match the value of a child HTML element, defined using the `data-ha`
attribute.

## `root`

*Type:* `boolean`

If `root` is provided and is set to `true`, this denotes that the event handler should
react to root element events. The root element is the element that has the app
attribute (`data-htmlapp`) and whose value matches the `appName` option passed when
the app instance is created.

## `document`

*Type:* `boolean`

If `document` is provided and is set to `true`, this denotes that the event handler should
react to document events.

