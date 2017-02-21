# autoenv [![version][npm-version]][npm-url] [![License][license-image]][license-url]

<img src="https://raw.githubusercontent.com/motdotla/dotenv/master/dotenv.png" alt="dotenv" align="right" />

> `autoenv` uses [`dotenv`][dotenv] to **automatically** load environment variables from a [compatible](#config) `.env` file into [`process.env`][process-env].

[![Build Status][travis-image]][travis-url]
[![Downloads][npm-downloads]][npm-url]
[![Code Climate][codeclimate-quality]][codeclimate-url]
[![Coverage Status][codeclimate-coverage]][codeclimate-url]
[![Dependency Status][dependencyci-image]][dependencyci-url]
[![Dependencies][david-image]][david-url]

## Install

```bash
npm install --only=production --save autoenv
```

## Config

Create a default `.env` file in the root directory of your project.

```dosini
DB_HOST=localhost
DB_USER=root
DB_PASS=s1mpl3
```

Create additional `.env.xyz` files matching as many environment variants you want:

```
my_project/
├── .env
├── .env.development
├── .env.staging
└── .env.production
```

The **default** `.env` will always be loaded, if a matching `.env.${NODE_ENV}` file is present, it will be loaded and overrides the values in `.env`

## Usage

As early as possible in your application, require and configure dotenv.

```javascript
require('autoenv')
```

When starting your application, ensure `NODE_ENV` is set to the environment name you wish to load.

```bash
$ NODE_ENV=staging node index.js
```

```bash
$ export NODE_ENV=staging
$ node index.js
```

### Preload

You can use the `--require` (`-r`) command line option to preload autoenv. By doing this, you do not need to `require` in your application code.


```bash
$ node -r autoenv index.js
```

That's it.

`process.env` now has the keys and values you defined in your `.env` file.

```javascript
var db = require('db')
db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
})
```

---
> :copyright: [ahmadnassri.com](https://www.ahmadnassri.com/)  · 
> License: [ISC][license-url]  · 
> Github: [@ahmadnassri](https://github.com/ahmadnassri)  · 
> Twitter: [@ahmadnassri](https://twitter.com/ahmadnassri)

[license-url]: http://choosealicense.com/licenses/isc/
[license-image]: https://img.shields.io/github/license/ahmadnassri/autoenv.svg?style=flat-square

[travis-url]: https://travis-ci.org/ahmadnassri/autoenv
[travis-image]: https://img.shields.io/travis/ahmadnassri/autoenv.svg?style=flat-square

[npm-url]: https://www.npmjs.com/package/autoenv
[npm-version]: https://img.shields.io/npm/v/autoenv.svg?style=flat-square
[npm-downloads]: https://img.shields.io/npm/dm/autoenv.svg?style=flat-square

[codeclimate-url]: https://codeclimate.com/github/ahmadnassri/autoenv
[codeclimate-quality]: https://img.shields.io/codeclimate/github/ahmadnassri/autoenv.svg?style=flat-square
[codeclimate-coverage]: https://img.shields.io/codeclimate/coverage/github/ahmadnassri/autoenv.svg?style=flat-square

[david-url]: https://david-dm.org/ahmadnassri/autoenv
[david-image]: https://img.shields.io/david/ahmadnassri/autoenv.svg?style=flat-square

[dependencyci-url]: https://dependencyci.com/github/ahmadnassri/autoenv
[dependencyci-image]: https://dependencyci.com/github/ahmadnassri/autoenv/badge?style=flat-square

[dotenv]: https://github.com/motdotla/dotenv/
[process-env]: https://nodejs.org/docs/latest/api/process.html#process_process_env
