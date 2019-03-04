---
id: installation
title: Installation
sidebar_label: Installation
---

There's a couple of different means of obtaining the JavaScript package for HTMLApp.
Which you choose will depend on your local or server setup.

## Direct download or CDN

The most straightforward means of installing HTMLApp is by downloading the minified browser
package from the Unpkg CDN:

<a href="https://unpkg.com/html-app/dist/html-app.browser.min.js" target="_blank" download="html-app.browser.min.js">Download latest package</a>

Or more simply, include the CDN link in your HTML file `<script>` tag, before your own JS files
and just inside the closing `</body>` tag:

```html
  <!-- app HTML above -->

  <script src="https://unpkg.com/html-app/dist/html-app.browser.min.js"></script>
  <script src="app.js"></script>
</body>
```

## Via a package manager

The most popular package manager for the job will be [NPM](https://www.npmjs.com),
however [Yarn](https://yarnpkg.com) can also be used.

Installation via NPM is done by running this from the command line in your project
directory:

```bash
npm i html-app
```

Or via Yarn:

```bash
yarn add html-app
```

The package can then be imported into your JavaScript file, assuming you're using some sort
of bundler, such as [Webpack](https://webpack.js.org/) with [Babel](https://babeljs.io/), or
[Parcel](https://parceljs.org/) (which doesn't need babel, Parcel automatically grabs this for you).
