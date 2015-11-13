# babel-plugin-import-asserts
Babel plugin that does the following:

[![npm version][npm.img]][npm.url]
[![Build Status](https://travis-ci.org/dozoisch/babel-plugin-import-asserts.svg)](https://travis-ci.org/dozoisch/babel-plugin-import-asserts)
[![Dependency Status](https://david-dm.org/dozoisch/babel-plugin-import-asserts.svg)](https://david-dm.org/dozoisch/babel-plugin-import-asserts)
[![devDependency Status](https://david-dm.org/dozoisch/babel-plugin-import-asserts/dev-status.svg)](https://david-dm.org/dozoisch/babel-plugin-import-asserts#info=devDependencies)
[![peerDependency Status](https://david-dm.org/dozoisch/babel-plugin-import-asserts/peer-status.svg)](https://david-dm.org/dozoisch/babel-plugin-import-asserts#info=peerDependencies)

For every `import baz, {foo, bar} from './baz';` it adds 
```
console.assert(typeof foo !== 'undefined', '[IMPORT]: foo from ./abz is undefined'); 
console.assert(typeof bar !== 'undefined', '[IMPORT]: bar from ./abz is undefined');
console.assert(typeof baz !== 'undefined', '[IMPORT]: baz from ./abz is undefined');
```
below the import statement.

Motivation: 

1. Catching typos in import can be hard and sometimes lead to cryptic errors.
2. Using destructuring with files containing constant can lead to weird behaviors if a constant is undefined without you knowing it.

# Usage

- With Babel 5.0 use version 1.X
- With Babel 6.0 use version 2.X

Make sure to use it only in development.

In `.babelrc`:
```
{
  "stage": 0,
    "env": {
      "development": {
        "plugins": [
          "import-asserts"
        ]
    }
}
```

---

Inspired by: https://github.com/jonathanewerner/babel-plugin-import-asserts


[npm.img]: https://badge.fury.io/js/babel-plugin-import-asserts.svg
[npm.url]: http://badge.fury.io/js/babel-plugin-import-asserts
