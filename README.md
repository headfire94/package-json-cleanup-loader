[![NPM Package](https://img.shields.io/npm/v/package-json-cleanup-loader.svg?style=flat-square)](https://www.npmjs.org/package/package-json-cleanup-loader)
[![Build Status](https://travis-ci.org/headfire94/package-json-cleanup-loader.svg?branch=master)](https://travis-ci.org/headfire94/package-json-cleanup-loader)
## Description

Did you know that when [webpack][1] includes `package.json` file in bundle this bundle can contain private information like installed module path?
For example, lets install [browserify][1]:
```
$ npm install browserify
...
$ cat ./node_modules/browserify/package.json  | grep _
  {
    "_from": "browserify",
    "_id": "browserify@16.1.1",
    "_inBundle": false,
    "_integrity": "sha512-iSH21jK0+IApV8YHOfmGt1qsGd74oflQ1Ko/28JOkWLFNBngAQfKb6WYIJ9CufH8vycqKX1sYU3y7ZrVhwevAg==",
    "_location": "/browserify",
    "_phantomChildren": {},
    "_requested": {
      "type": "tag",
      "registry": true,
      "raw": "browserify",
      "name": "browserify",
      "escapedName": "browserify",
      "rawSpec": "",
      "saveSpec": null,
      "fetchSpec": "latest"
    },
    "_requiredBy": [
      "#USER",
      "/"
    ],
    "_resolved": "https://registry.npmjs.org/browserify/-/browserify-16.1.1.tgz",
    "_shasum": "7905ec07e0147c4d90f92001944050a6e1c2844e",
    "_spec": "browserify",
    "_where": "C:\\work\\json-cleanup-loader",
  }
```

This package remove all values for which keys starts with `_`  and with specific character that you can pass in options.

## How I can use this package?
#### CLI
webpack --module-bind 'path/to/package.json=package-json-cleanup-loader'
#### Change webpack config

```
module.exports = {
  module: {
    rules: [
      { test: /package\.json$/,
        loader: 'package-json-cleanup-loader',
        options: {
          only: ["version", "name", "otherParam"]
        }
      }
    ]
  }
}
```

## License

MIT

[1]: https://github.com/webpack/webpack
[2]: https://github.com/substack/node-browserify
