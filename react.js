module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["airbnb", "./index.js"],
  plugins: ["filenames", "html", "immutable", "prettier", "react"],
  rules: {
    "no-invalid-this": "off",
    "import/no-named-as-default": "off",
    "class-methods-use-this": "off",
    "filenames/match-exported": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }]
  }
};
