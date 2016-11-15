'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cueball = require('cueball');

Object.keys(_cueball).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _cueball[key];
    }
  });
});

var _bar = require('bar');

var _derp = require('derp');

var _derp2 = _interopRequireDefault(_derp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

setTimeout(function () {
  console.assert(typeof _bar.baz !== 'undefined', '[IMPORT]:', 'baz', 'from', 'bar', 'is undefined.');
}, 0);
setTimeout(function () {
  console.assert(typeof _bar.foo !== 'undefined', '[IMPORT]:', 'foo', 'from', 'bar', 'is undefined.');
}, 0);
setTimeout(function () {
  console.assert(typeof _derp.herpette !== 'undefined', '[IMPORT]:', 'herpette', 'from', 'derp', 'is undefined.');
}, 0);
setTimeout(function () {
  console.assert(typeof _derp2.default !== 'undefined', '[IMPORT]:', 'herp', 'from', 'derp', 'is undefined.');
}, 0);
