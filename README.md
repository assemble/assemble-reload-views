# assemble-reload-views [![NPM version](https://badge.fury.io/js/assemble-reload-views.svg)](http://badge.fury.io/js/assemble-reload-views)

> Assemble instance plugin that reloads views when options are updated or when another plugin is loaded.

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i assemble-reload-views --save
```

## Usage

This initializes event listeners to listen for events that indicate if something needs to be re-initialized based on user options. The result is that views are reloaded whenever settings are changed.

```js
var reloadViews = require('assemble-reload-views');
var assemble = require('assemble');

var app = assemble();
app.use(reloadViews());
```

## Related projects

* [assemble](https://www.npmjs.com/package/assemble): Static site generator for Grunt.js, Yeoman and Node.js. Used by Zurb Foundation, Zurb Ink, H5BP/Effeckt,… [more](https://www.npmjs.com/package/assemble) | [homepage](http://assemble.io)
* [assemble-loader](https://www.npmjs.com/package/assemble-loader): Assemble plugin (0.6+) for loading globs of views onto custom view collections. Also works with… [more](https://www.npmjs.com/package/assemble-loader) | [homepage](https://github.com/jonschlinkert/assemble-loader)
* [assemble-render-file](https://www.npmjs.com/package/assemble-render-file): Assemble plugin for rendering views in a vinyl pipeline. | [homepage](https://github.com/jonschlinkert/assemble-render-file)
* [assemble-streams](https://www.npmjs.com/package/assemble-streams): Assemble plugin that adds convenience methods for working with streams, like `toStream`, which pushes a… [more](https://www.npmjs.com/package/assemble-streams) | [homepage](https://github.com/jonschlinkert/assemble-streams)

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/assemble-reload-views/issues/new).

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2015 Jon Schlinkert
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on October 10, 2015._