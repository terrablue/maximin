import babelParser from "@babel/eslint-parser";
import js from "@eslint/js";
import globals from "globals";

const error = (...params) => ["error", ...params];

const indentation = 2;

const rules = Object.fromEntries([
  /* clarity: properly document and express intent {{{ */
  ["func-names", error("always")],
  "no-eq-null",
  "no-floating-decimal",
  "no-implicit-coercion",
  "no-inline-comments",
  ["no-magic-numbers", error({
    enforceConst: true,
    ignore: [0, 1],
    ignoreArrayIndexes: true,
    ignoreDefaultValues: true,
  })],
  "no-multi-assign",
  "no-negated-condition",
  "no-return-assign",
  "no-self-compare",
  "no-shadow",
  "no-throw-literal",
  ["no-warning-comments", error({location: "anywhere"})],
  "prefer-named-capture-group",
  "prefer-promise-reject-errors",
  "prefer-template",
  ["semi", error("always")],
  "symbol-description",
  "wrap-iife",
  "yoda",
  /* }}} */
  /* consistency: stick to one style {{{ */
  ["array-bracket-spacing", error("never")],
  "arrow-spacing",
  "block-spacing",
  "brace-style",
  ["comma-dangle", error({
    arrays: "always-multiline",
    exports: "always-multiline",
    functions: "never",
    imports: "always-multiline",
    objects: "always-multiline",
  })],
  ["comma-style", error("last")],
  "curly",
  ["dot-location", error("property")],
  "dot-notation",
  "func-style",
  ["indent", error(indentation, {ignoredNodes: ["ObjectExpression"]})],
  ["linebreak-style", error("unix")],
  ["max-len", error({code: 80})],
  "new-cap",
  "no-duplicate-imports",
  "no-implicit-globals",
  ["no-multiple-empty-lines", error({max: 1})],
  "no-multi-spaces",
  "no-template-curly-in-string",
  "no-trailing-spaces",
  "no-whitespace-before-property",
  ["object-curly-spacing", error("never")],
  "spaced-comment",
  "space-infix-ops",
  ["quotes", error("double")],
  ["quote-props", error("as-needed")],
  /* }}} */
  /* {{{ maximin: no useless features */
  "accessor-pairs",
  "class-methods-use-this",
  "default-param-last",
  "eqeqeq",
  "no-empty-function",
  "no-unused-private-class-members",
  "no-extra-bind",
  "no-extra-parens",
  "no-lone-blocks",
  "no-return-await",
  "no-new-object",
  "no-array-constructor",
  "no-unneeded-ternary",
  "no-invalid-this",
  "no-lonely-if",
  "no-new-wrappers",
  "no-useless-call",
  "no-useless-concat",
  "no-useless-constructor",
  "no-useless-computed-key",
  "no-useless-rename",
  "no-useless-return",
  ["no-restricted-properties", error(...[
    {
      message: "Use slice instead of substring",
      property: "substring",
    },
    {
      message: "Use slice instead of substr",
      property: "substr",
    },
  ])],
  ["no-restricted-syntax", error(...[
    "BinaryExpression[operator='in']",
    "DoWhileStatement",
    "ForInStatement",
    "ForOfStatement",
    "ForStatement",
    "SwitchStatement",
  ])],
  ["no-unused-expressions", error({allowShortCircuit: true})],
  "object-shorthand",
  /* }}} */
  /* modernity: no non-standard, deprecated or obscure features {{{ */
  "no-bitwise",
  "no-caller",
  "no-iterator",
  "no-loop-func",
  "no-multi-str",
  "no-octal-escape",
  "no-proto",
  "no-var",
  "no-void",
  "prefer-arrow-callback",
  ["prefer-const", error({destructuring: "all"})],
  "prefer-destructuring",
  "prefer-exponentiation-operator",
  "prefer-numeric-literals",
  "prefer-object-has-own",
  "prefer-object-spread",
  "prefer-regex-literals",
  "prefer-rest-params",
  "prefer-spread",
  "require-unicode-regexp",
  "strict",
  /* }}} */
  /* side effects: prefer a functional paradigm {{{ */
  "no-param-reassign",
  "no-console",
  "no-alert",
  "no-eval",
  "no-implied-eval",
  "no-extend-native",
  "no-new",
  "no-new-func",
  "no-script-url",
  "no-sequences",
  "operator-assignment",
  /* }}} */
  /* simplicity: reduce complexity {{{ */
  "array-callback-return",
  "consistent-return",
  ["complexity", error({max: 2})],
  "max-classes-per-file",
  ["max-depth", error({max: 2})],
  ["max-lines", error({max: 200, skipBlankLines: true, skipComments: true})],
  ["max-nested-callbacks", error({max: 3})],
  ["max-params", error({max: 3})],
  ["max-statements", error({max: 10})],
  "no-await-in-loop",
  "no-continue",
  "no-else-return",
  "no-labels",
  "no-promise-executor-return",
  "no-unmodified-loop-condition",
  "require-atomic-updates",
  /* }}} */
].map(rule => typeof rule === "string" ? [rule, ["error"]] : rule));

const languageOptions = {
  ecmaVersion: "latest",
  globals: {
    ...globals.node,
    ...globals.browser,
  },
  parser: babelParser,
  parserOptions: {
    babelOptions: {
      plugins: [
        "@babel/plugin-syntax-import-assertions",
      ],
    },
    requireConfigFile: false,
  },
  sourceType: "module",
};

export default [js.configs.recommended, {languageOptions, rules}];
