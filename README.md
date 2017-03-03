# vue-webpack-boilerplate

> A full-featured Webpack setup with hot-reload, lint-on-save, unit testing & css extraction.

Starting point for NoProtocol front-end applications. A fork of the excellent [webpack template](https://github.com/vuejs-templates/webpack) and tuned to our preferences.

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli). **It is recommended to use npm 3+ for a more efficient dependency tree.**

``` bash
$ npm install -g vue-cli
$ vue init noprotocol/np-vue my-project
$ cd my-project
$ npm install
$ npm run dev
```

## What's Included

- `npm run dev`: first-in-class development experience.
  - Webpack + `vue-loader` for single file Vue components.
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps

- `npm run build`: Production ready build.
  - JavaScript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - All static assets compiled with version hashes for efficient long-term caching, and a production `index.html` is auto-generated with proper URLs to these generated assets.
  - Use `npm run build --report`to build with bundle size analytics.

- `npm run test`: Run linter, unit and end-to-end tests

- `npm run test:unit`: Run unittests with [Jest](https://facebook.github.io/jest/) with watch enabled

- `npm run test:e2e`: End-to-end tests with [Nightwatch](http://nightwatchjs.org/).
  - Run tests in multiple browsers in parallel.
  - Works with one command out of the box:
    - Selenium and chromedriver dependencies automatically handled.
    - Automatically spawns the Selenium server.

TODO:

- Meta plugin
- Documentation
- Pre-render vs SSR

https://github.com/noprotocol/np-vue/commit/8cff712d78e824dbeae0758a0c3f7e9db42d3f63