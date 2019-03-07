---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

After [installing the package](installation.md), you're now ready to create your
first web app with HTMLApp!

## Define your app HTML

HTMLApp doesn't come with a built-in renderer or templating language. This is
deliberate! The idea behind HTMLApp is not to force you into using a new view
creation method. We have a perfectly good view language already and we have had it
for quite some time: **HTML**.

So let's get you creating your first "view". Create a new directory and inside
add an `index.html` file. Then, add some markup somewhere above your script tags,
making sure to use the special `data-htmlapp` attribute for the root element of
the application. If you're not sure, just create a `div` and add it to that.

```html
<body>
  <!-- include the data-htmlapp attribute for the root of the app: -->
  <div data-htmlapp>
    <!-- This is where your app view will live -->
  </div>

  <script src="https://unpkg.com/html-app/dist/html-app.browser.min.js"></script>
  <script src="app.js"></script>
</body>
```

Next, you can add some sample elements inside your app root element. Things that
are interactive (buttons, inputs) are a good to start playing around with.
For every element inside your app that you expect to interact with in some way,
assign it a *unique* `html-ha` attribute value.

```html
<div data-htmlapp>
  <!-- any important children need unique data-ha values: -->
  <input data-ha="userName" />
  <span data-ha="userNameError"></span>
  <!-- unimportant children don't: -->
  <p>I'm not so important, so I don't need any special tags.</p>
</div>
```

> One of the keys to making sure HTMLApp works the way you expect it to is to
> use the `html-ha` attributes sparingly. There's no need to attach it to
> elements you won't interact with. 

## Initialise a new `HTMLApp` instance

Now that you have a basic view (HTML file) in place, create yourself a new
JavaScript file, too. In the above HTML we're expecting a file called `app.js`,
so let's call it that.

Inside your JavaScript file, create a new instance of `HTMLApp`:

```js
new HTMLApp({
  eventHandlers: [
    {
      id: 'userName',
      onChange: function(e, el, app) {
        if (!e.target.value) {
          app.getEl('userNameError').setText('This field is required!');

          el.addClass('has-error');
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
