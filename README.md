# HTMLApp Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/87831e58-c78a-42c1-b36a-70aa10d85eba/deploy-status)](https://app.netlify.com/sites/html-app/deploys)

This repo contains the source code for the [HTMLApp](https://github.com/AaronLeoCooper/html-app) documentation website.

It uses [Docusaurus](https://docusaurus.io/docs/en/site-preparation) and is hosted via Netlify at:
[https://html-app.netlify.com](https://html-app.netlify.com).

---

## Setup

1. Run `yarn install` inside the `website` directory.
2. The site can be ran locally from the `website` directory with `yarn start`.
3. Building the site into static assets is done via `yarn build` and produces static files inside
   `website/build/html-app-docs`.
4. Deployments are automatically triggered from Netlify on master branch changes.
