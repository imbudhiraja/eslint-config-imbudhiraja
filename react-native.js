module.exports = {
  env: {
    es6: true,
    "react-native/react-native": true
  },
  extends: "./react.js",
  plugins: ["filenames", "html", "immutable", "react", "react-native"],
  rules: {
    "react-native/no-unused-styles": "error",
    "react-native/split-platform-components": "error",
    "react-native/no-inline-styles": "error",
    "react-native/no-color-literals": "error",
    "react-native/no-raw-text": "error"
  }
};
