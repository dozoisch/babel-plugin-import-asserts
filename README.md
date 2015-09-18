# babel-plugin-import-asserts
Babel plugin that does the following:

For every `import {foo, bar} from './baz';` it adds 
```
console.assert(foo, 'foo from ./abz is undefined'); 
console.assert(bar, 'foo from ./abz is undefined');
```
below the import statement. The same goes for `import foo from './baz';`.

Motivation: 

1. catching hard to debug errors when you 1) forget to export a thing from an `index.js` file and then 2) try to import this thing from that `index.js` file in another place

2. catch the case when you use a default import although it would have to be a regular import. (`import foo from './bar'` instead of `import {foo} from './bar'`). this happens way to often and there currently is no default safety net preventing you from doing this. 

# Usage

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

or in webpack:
`loader: 'babel?{"plugins":["import-asserts"]}'}`


---

Inspired by: https://github.com/jonathanewerner/babel-plugin-import-asserts
