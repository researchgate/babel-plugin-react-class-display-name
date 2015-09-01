export default function ({ Plugin, types: t }) {
  return new Plugin("react-class-display-name", {
    visitor: {
      ClassDeclaration(node, parent, scope, file) {
          if (this.get("superClass").matchesPattern("React.Component")) {
              this.insertAfter([
                  t.expressionStatement(t.assignmentExpression(
                      "=",
                      t.memberExpression(node.id, t.identifier("displayName")),
                      t.literal(node.id.name)
                  ))
              ]);
          }
      }
    }
  });
}
