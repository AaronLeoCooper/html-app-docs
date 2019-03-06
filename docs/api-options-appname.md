---
title: appName
id: api-options-appname
---

`appName` is an optional field that can be passed when creating a new
HTMLApp instance, like so:

```js
new HTMLApp({
  appName: 'main'
});
```

The value provided has no restrictions, other than it must match an element
in HTML they has the `data-htmlapp` attribute.
