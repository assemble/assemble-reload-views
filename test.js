'use strict';

require('mocha');
var path = require('path');
var assert = require('assert');
var App = require('templates');
var reloadViews = require('./');
var app;

describe('reloadViews()', function() {
  beforeEach(function () {
    app = new App();
    app.use(reloadViews());
  });

  it('should reload a collection when options are defined', function () {
    app.create('pages', {cwd: 'foo/bar'});
    app.page('a.html', {content: '...'});

    assert(app.pages);
    assert(app.pages.options);
    assert(app.pages.options.cwd === 'foo/bar');
    app.option('cwd', 'a/b/c');
    assert(app.pages.options.cwd === 'a/b/c');
  });
});
