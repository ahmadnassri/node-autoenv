# AutoENV

automatically load dotenv files based on `NODE_ENV`

[![license][license-img]][license-url]
[![release][release-img]][release-url]
[![super linter][super-linter-img]][super-linter-url]
[![test][test-img]][test-url]
[![semantic][semantic-img]][semantic-url]

`autoenv` uses [`dotenv`][] to **automatically** load environment variables from a [compatible][] `.env` file into [`process.env`][].

## Install

``` bash
npm install --only=production --save autoenv
```

## Config

Create a default `.env` file in the root directory of your project.

``` ini
DB_HOST=localhost
DB_USER=root
DB_PASS=s1mpl3
```

Create additional `.env.xyz` files matching as many environment variants you want:

``` plain
my_project/
├── .env
├── .env.development
├── .env.staging
└── .env.production
```

The **default** `.env` will always be loaded, if a matching `.env.${NODE_ENV}` file is present, it will be loaded and overrides the values in `.env`

## Usage

As early as possible in your application, require and configure dotenv.

``` js
require('autoenv')
```

When starting your application, ensure `NODE_ENV` is set to the environment name you wish to load.

``` bash
$ NODE_ENV=staging node index.js
```

``` bash
$ export NODE_ENV=staging
$ node index.js
```

### Preload

You can use the `--require` (`-r`) command line option to preload autoenv. By doing this, you do not need to `require` in your application code.

``` bash
$ node -r autoenv index.js
```

That's it.

`process.env` now has the keys and values you defined in your `.env` file.

``` js
const db = require('db')
db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
})
```

  [`dotenv`]: https://github.com/motdotla/dotenv/
  [compatible]: #config
  [`process.env`]: https://nodejs.org/docs/latest/api/process.html#process_process_env

----
> Author: [Ahmad Nassri](https://www.ahmadnassri.com/) &bull;
> Twitter: [@AhmadNassri](https://twitter.com/AhmadNassri)

[license-url]: LICENSE
[license-img]: https://badgen.net/github/license/ahmadnassri/node-autoenv

[release-url]: https://github.com/ahmadnassri/node-autoenv/releases
[release-img]: https://badgen.net/github/release/ahmadnassri/node-autoenv

[super-linter-url]: https://github.com/ahmadnassri/node-autoenv/actions?query=workflow%3Asuper-linter
[super-linter-img]: https://github.com/ahmadnassri/node-autoenv/workflows/super-linter/badge.svg

[test-url]: https://github.com/ahmadnassri/node-autoenv/actions?query=workflow%3Atest
[test-img]: https://github.com/ahmadnassri/node-autoenv/workflows/test/badge.svg

[semantic-url]: https://github.com/ahmadnassri/node-autoenv/actions?query=workflow%3Arelease
[semantic-img]: https://badgen.net/badge/📦/semantically%20released/blue
