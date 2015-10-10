'use strict';

/**
 * Lazily required module dependencies
 */

var utils = require('lazy-cache')(require);

/**
 * Trick browserify into recognizing lazy-cached modules
 */

var fn = require;
require = utils;
require('is-regex');
require('mixin-deep', 'merge');
require('emitter-only', 'only');
require = fn;

/**
 * Expose utils
 */

module.exports = utils;
