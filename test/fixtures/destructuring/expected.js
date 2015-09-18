'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _bar = require('bar');

var _derp = require('derp');

var _derp2 = _interopRequireDefault(_derp);

console.assert(typeof _bar.baz !== 'undefined', '[IMPORT]:', 'baz', 'from', 'bar', 'is undefined.');
console.assert(typeof _bar.foo !== 'undefined', '[IMPORT]:', 'foo', 'from', 'bar', 'is undefined.');
console.assert(typeof _derp.herpette !== 'undefined', '[IMPORT]:', 'herpette', 'from', 'derp', 'is undefined.');
console.assert(typeof _derp2['default'] !== 'undefined', '[IMPORT]:', 'herp', 'from', 'derp', 'is undefined.');
