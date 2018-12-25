module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended-scss",
    "stylelint-config-idiomatic-order",
    "./node_modules/prettier-stylelint/config.js"
  ],
  plugins: ["stylelint-order"],
  rules: {
    "at-rule-empty-line-before": null,
    "at-rule-name-space-after": "always",
    "at-rule-no-vendor-prefix": true,
    "at-rule-semicolon-space-before": "never",
    "block-closing-brace-empty-line-before": null,
    "block-closing-brace-newline-after": null,
    "block-opening-brace-space-before": null,
    "color-hex-case": "lower",
    "color-named": "never",
    "declaration-block-semicolon-newline-after": "always-multi-line",
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-block-semicolon-space-after": "always-single-line",
    "declaration-empty-line-before": null,
    "font-family-name-quotes": "always-unless-keyword",
    "font-weight-notation": "numeric",
    "function-url-no-scheme-relative": true,
    "function-url-quotes": "always",
    indentation: 2,
    "length-zero-no-unit": true,
    "max-empty-lines": 1,
    "max-line-length": 120,
    "media-feature-name-no-unknown": [
      true,
      {
        ignoreMediaFeatureNames: ["prefers-reduced-motion"]
      }
    ],
    "media-feature-name-no-vendor-prefix": true,
    "media-feature-parentheses-space-inside": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "never",
    "no-descending-specificity": null,
    "no-duplicate-selectors": true,
    "number-leading-zero": "always",
    "property-no-vendor-prefix": true,
    "rule-empty-line-before": "always-multi-line",
    "scss/dollar-variable-default": [
      true,
      {
        ignore: "local"
      }
    ],
    "selector-attribute-quotes": "always",
    "selector-list-comma-newline-after": "always",
    "selector-list-comma-newline-before": "never-multi-line",
    "selector-list-comma-space-after": "always-single-line",
    "selector-list-comma-space-before": "never-single-line",
    "selector-max-attribute": 4,
    "selector-max-class": 6,
    "selector-max-combinators": 6,
    "selector-max-compound-selectors": 8,
    "selector-max-empty-lines": 1,
    "selector-max-id": 0,
    "selector-max-specificity": null,
    "selector-max-type": 2,
    "selector-max-universal": 4,
    "selector-no-qualifying-type": true,
    "selector-no-vendor-prefix": true,
    "string-quotes": "single",
    "value-keyword-case": [
      "lower",
      {
        ignoreProperties: ["/(F|f)ont-family/"]
      }
    ],
    "value-list-comma-newline-after": "never-multi-line",
    "value-list-comma-newline-before": "never-multi-line",
    "value-list-comma-space-after": "always",
    "value-no-vendor-prefix": true
  }
};
