export default function (babel) {
  const t = babel.types;

  function console_ (method, args) {
    return t.expressionStatement(t.callExpression(
      t.memberExpression(
        t.identifier('console'),
        t.identifier(method)),
      args));
  }

  function consoleTest (thing, fromValue) {
    return console_('assert',
      [
        t.binaryExpression('!==', t.unaryExpression('typeof', t.identifier(thing)), t.literal('undefined')),
        t.literal('[IMPORT]:'),
        t.literal(thing),
        t.literal('from'),
        t.literal(fromValue),
        t.literal('is undefined.'),
      ]
    );
  }

  return new babel.Plugin('import-asserts', {
    visitor: {
      ImportDeclaration (node, parent) {
        node.specifiers.map((specifier, idx) => {
          this.insertAfter(consoleTest(specifier.local.name, node.source.value));
        });
      },
    },
  });
}

