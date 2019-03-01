---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

## Installation

The recommended way of installing HTMLApp is via a CDN link or by downloading the JS file and
including it in your HTML pages, along with any of your own JS includes:

```html
<body>
  <!-- include your JS files at the end of the body: -->
  <script src="html-app.browser.min.js"></script>
  <script src="app.js"></script>
</body>
```

Then add some markup somewhere above your script tags, making sure to use the special
`data-htmlapp` tag for the root element of the application:

```html
<body>
  <!-- include the data-htmlapp attribute for the root of the app: -->
  <div data-htmlapp>

    <!-- any important children should have the data-ha attribute: -->
    <input data-ha="userName" />
    <span data-ha="userNameError"></span>
    
    <p>I'm not so important, so I don't need any special tags.</p>

  </div>
```

Finally, in your own JavaScript source file, create a new instance of `HTMLApp`:

```js
new HTMLApp({
  eventHandlers: [
    {
      id: 'userName',
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

And that's all there is to it. A bit of HTML and a dash of JS and you've got a
simple, functional web app.
