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
        t.binaryExpression('!==', t.unaryExpression('typeof', t.identifier(thing)), t.stringLiteral('undefined')),
        t.stringLiteral('[IMPORT]:'),
        t.stringLiteral(thing),
        t.stringLiteral('from'),
        t.stringLiteral(fromValue),
        t.stringLiteral('is undefined.'),
      ]
    );
  }

  return {
    visitor: {
      ImportDeclaration (path, state) {
        path.node.specifiers.map((specifier, idx) => {
          path.insertAfter(consoleTest(specifier.local.name, path.node.source.value));
        });
      },
    },
  };
}

