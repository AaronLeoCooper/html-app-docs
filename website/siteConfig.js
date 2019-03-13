// See https://docusaurus.io/docs/site-config for all the possible site configuration options.
const docs = require('./docs.json');
const externalLinks = require('./externalLinks.json');

const siteConfig = {
  title: 'HTMLApp',
  tagline: 'Create interactive web pages with HTML and JavaScript easily!',
  url: 'https://aaronleocooper.github.io',
  baseUrl: '/',
  projectName: 'html-app-docs',
  organizationName: 'aaronleocooper',

  headerLinks: [
    docs.docs,
    docs.apiRef,
    { page: 'about', label: 'About' }
  ],

  footerLinks: [
    {
      title: docs.docs.label,
      links: [
        docs.installation,
        docs.gettingStarted
      ]
    },
    {
      title: docs.apiRef.label,
      links: [
        docs.apiHtmlApp,
        docs.apiOptionsLifecycle,
        docs.apiEventHandlers,
        docs.apiElements
      ]
    },
    {
      title: 'More',
      links: [
        externalLinks.github,
        externalLinks.npm,
        externalLinks.download
      ]
    },
  ],

  headerIcon: 'img/logo.svg',
  footerIcon: 'img/logo.svg',
  favicon: 'img/favicon.png',

  colors: {
    primaryColor: '#192a51',
    secondaryColor: '#aaa1c8',
  },

  fonts: {
    bodyFont: ['Muli'],
    codeFont: ['IBM Plex Mono']
  },

  copyright: `Copyright © ${new Date().getFullYear()} Aaron Leo Cooper`,

  // Highlight.js settings
  highlight: {
    theme: 'default',
  },

  // Custom CSS & JS imports to include
  stylesheets: ['https://fonts.googleapis.com/css?family=IBM+Plex+Mono|Muli'],
  scripts: [],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',

  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/logo.png',
  twitterImage: 'img/logo.png',

  // Show documentation's last contributor's name.
  enableUpdateBy: false,

  // Show documentation's last update time.
  enableUpdateTime: false,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  sourceRepoUrl: externalLinks.github.link,
  npmUrl: externalLinks.npm.link,
  websiteRepoUrl: externalLinks.docsGithub.link,
  cdnUrl: externalLinks.download.link
};

module.exports = siteConfig;
