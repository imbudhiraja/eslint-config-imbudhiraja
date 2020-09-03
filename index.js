module.exports = {
  extends: "airbnb-base",
  env: {
    es6: true,
    node: true
  },
  parser: "@babel/eslint-parser",
  plugins: ["filenames", "immutable"],
  rules: {
    "array-bracket-spacing": "error",
    "arrow-parens": ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    "consistent-return": ["error", { treatUndefinedAsUnspecified: true }],
    "filenames/match-exported": "error",
    "import/default": "error",
    "import/export": "error",
    "import/named": "error",
    "import/namespace": "error",
    "import/no-named-as-default": "error",
    "import/no-unresolved": [
      "error",
      {
        amd: true,
        commonjs: true
      }
    ],
    indent: ["error", 2, { SwitchCase: 1 }],
    "key-spacing": ["error", { afterColon: true }],
    "line-comment-position": ["error", { position: "above" }],
    "lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true }
    ],
    "max-len": ["error", { code: 120, comments: 120, ignoreUrls: true }],
    "max-lines": [
      "error",
      { max: 500, skipBlankLines: true, skipComments: true }
    ],
    "newline-after-var": ["error", "always"],
    "newline-before-return": "error",
    "no-await-in-loop": "error",
    "no-console": "error",
    "no-debugger": "error",
    "no-delete-var": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-keys": "error",
    "no-empty": "error",
    "no-empty-function": "error",
    "no-empty-pattern": "error",
    "no-eval": "error",
    "no-extra-semi": "error",
    "no-implicit-globals": "error",
    "no-invalid-regexp": "error",
    "no-invalid-this": "error",
    "no-irregular-whitespace": [
      "error",
      { skipTemplates: true, skipRegExps: true, skipComments: true }
    ],
    "no-label-var": "error",
    "no-lonely-if": "error",
    "no-mixed-requires": "error",
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
    "no-multi-str": "error",
    "no-negated-condition": "error",
    "no-path-concat": "error",
    "no-process-exit": "error",
    "no-restricted-globals": "error",
    "no-tabs": "error",
    "no-trailing-spaces": "error",
    "no-unexpected-multiline": "error",
    "no-unneeded-ternary": "error",
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "object-curly-newline": [
      "error",
      {
        ObjectExpression: { multiline: true, minProperties: 2 },
        ObjectPattern: { multiline: true, minProperties: 2 },
        ImportDeclaration: "never"
      }
    ],
    "object-curly-spacing": "error",
    "object-property-newline": [
      "error",
      { allowAllPropertiesOnSameLine: true }
    ],
    "prefer-const": "error",
    "prefer-destructuring": "error",
    "prefer-spread": "error",
    quotes: ["error", "single"],
    "sort-keys": ["error", "asc", { caseSensitive: true }]
  }
};
