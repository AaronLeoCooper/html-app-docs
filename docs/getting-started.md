---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

## Installation

The recommended way of installing HTMLApp is via a CDN link or by downloading the JS file and
including it in your HTML pages:

```html
<body>
  <!-- include the data-htmlapp attribute -->
  <div data-htmlapp>
    <input data-ha="userName" />
    <span data-ha="userNameError"></span>
  </div>
  
  <!-- include your JS files: -->
  <script src="html-app.browser.min.js"></script>
  <script src="app.js"></script>
</body>
``` 

Then in your own JavaScript source file, instantiate `HTMLApp`:

```js
new HTMLApp({
  listeners: [
    {
      el: 'userName',
      onChange: function(e, el) {
        if (!e.target.value) {
          this.getEl('userNameError').setText('This field is required!');

          el.setClass('has-error');
        } else {
          this.getEl('userNameError').setText('');

          el.removeClass('has-error');
        }
      }
    }
  ]
});
```
