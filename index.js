/*!
 * assemble-reload-views <https://github.com/jonschlinkert/assemble-reload-views>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isRegex = require('is-regex');
var merge = require('mixin-deep');
var only = require('emitter-only');

/**
 * reload view collections when plugins are loaded
 * or options are defined by the user.
 */

module.exports = function (pattern) {
  return function (app) {
    if (!this.only) {
      this.mixin('only', only.bind(this));
    }

    this.only('reloadViews', 'option', function (key) {
      if (isMatch(pattern)(key)) {
        reloadViews(app, key);
      }
    });

    this.only('reloadViews', 'use', function () {
      reloadViews(app);
    });
  };
};

function reloadViews(app, key) {
  for (var name in app.views) {
    if (app.views.hasOwnProperty(name)) {
      var views = app.views[name];

      if (!key || typeof app[name][key] !== 'function') {
        app.create(name, merge({}, app[name].options, app.options));
        app[name].addViews(views);
      }
    }
  }
}

function isMatch(val) {
  if (Array.isArray(val)) {
    return function (key) {
      return val.indexOf(key) !== -1;
    };
  }

  if (isRegex(val)) {
    return function (key) {
      return val.test(key);
    };
  }

  return function noop() {
    return true;
  };
}
