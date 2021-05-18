`autoenv` uses [`dotenv`][dotenv] to **automatically** load environment variables from a [compatible](#config) `.env` file into [`process.env`][process-env].

## Install

```bash
npm install --only=production --save autoenv
```

## Config

Create a default `.env` file in the root directory of your project.

```ini
DB_HOST=localhost
DB_USER=root
DB_PASS=s1mpl3
```

Create additional `.env.xyz` files matching as many environment variants you want:

```plain
my_project/
├── .env
├── .env.development
├── .env.staging
└── .env.production
```

The **default** `.env` will always be loaded, if a matching `.env.${NODE_ENV}` file is present, it will be loaded and overrides the values in `.env`

## Usage

As early as possible in your application, require and configure dotenv.

```js
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

```js
const db = require('db')
db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
})
```

[dotenv]: https://github.com/motdotla/dotenv/
[process-env]: https://nodejs.org/docs/latest/api/process.html#process_process_env
