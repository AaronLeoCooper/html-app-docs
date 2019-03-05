---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

After [installing the package](installation.md), the JS file can then be included in
your HTML file just before the closing `</body>` tag. Make sure any of your own JS
`script` tags are placed *after* the `html-app.js` import.

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

  <script src="https://unpkg.com/html-app/dist/html-app.browser.min.js"></script>
  <script src="app.js"></script>
</body>
```

Finally, in your own JavaScript file, create a new instance of `HTMLApp`:

```js
new HTMLApp({
  eventHandlers: [
    {
      id: 'userName',
      onChange: function(e, el, app) {
        if (!e.target.value) {
          app.getEl('userNameError').setText('This field is required!');

          el.setClass('has-error');
        } else {
          app.getEl('userNameError').setText('');

          el.removeClass('has-error');
        }
      }
    }
  ]
});
```

And that's all there is to it. A bit of HTML and a dash of JS and you've got a
simple, functional web app.
