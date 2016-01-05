'use strict';

var _bar = require('bar');

var _bar2 = _interopRequireDefault(_bar);

var _derp = require('derp');

var _derp2 = _interopRequireDefault(_derp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

setTimeout(function () {
  console.assert(typeof _bar2.default !== 'undefined', '[IMPORT]:', 'foo', 'from', 'bar', 'is undefined.');
}, 0);
setTimeout(function () {
  console.assert(typeof _derp2.default !== 'undefined', '[IMPORT]:', 'herp', 'from', 'derp', 'is undefined.');
}, 0);