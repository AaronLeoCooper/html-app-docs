/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.


const siteConfig = {
  title: 'HTMLApp', // Title for your website.
  tagline: 'Create interactive web pages with HTML and JavaScript easily!',
  url: 'https://aaronleocooper.github.io/html-app-docs', // Your website URL
  // baseUrl: '/', // Base URL for your project */

  // For github.io type URLs, you would set the url and baseUrl like:
  url: 'https://aaronleocooper.github.io',
  baseUrl: '/html-app-docs/',

  // Used for publishing and more
  projectName: 'html-app-website',
  organizationName: 'aaronleocooper',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'doc1', label: 'Docs' },
    { doc: 'doc4', label: 'API' },
    { page: 'help', label: 'Help' },
    { blog: false, label: 'Blog' },
  ],

  /* path to images for header/footer */
  headerIcon: 'img/docusaurus.svg',
  footerIcon: 'img/docusaurus.svg',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#904c77',
    secondaryColor: '#e49ab0',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Aaron Leo Cooper`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  sourceRepoUrl: 'https://github.com/AaronLeoCooper/html-app',
  npmUrl: 'https://www.npmjs.com/package/html-app',
  websiteRepoUrl: 'https://github.com/AaronLeoCooper/html-app-docs',
};

module.exports = siteConfig;
