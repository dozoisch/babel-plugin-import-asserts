# babel-plugin-import-asserts
Babel plugin that does the following:

For every `import baz, {foo, bar} from './baz';` it adds 
```
console.assert(foo, 'foo from ./abz is undefined'); 
console.assert(bar, 'bar from ./abz is undefined');
console.assert(baz, 'baz from ./abz is undefined');
```
below the import statement.

Motivation: 

1. Catching typos in import can be hard and sometimes lead to cryptic errors.
2. Using destructuring with files containing constant can lead to weird behaviors if a constant is undefined without you knowing it.

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

---

Inspired by: https://github.com/jonathanewerner/babel-plugin-import-asserts
