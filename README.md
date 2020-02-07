# eslint-config-imbudhiraja

eslint-config-imbudhiraja is a library for eslint-rules.

## Installation

This is a [Node.js](https://nodejs.org/) module available through the [npm registry](https://docs.npmjs.com/misc/registry). It can be installed using the [`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)

```node
npm install eslint eslint-config-imbudhiraja --save-dev
```

## Usage

To use this library you need to extend

```
1. Nodejs , Meteor (Backend technologies)
  Update your .eslintrc as below

  module.exports = {
    "extends": "imbudhiraja"
  }

2. Reactjs
  Update your .eslintrc as below

  module.exports = {
    "extends": "imbudhiraja/react"
  }

3. React-Native
  Update your .eslintrc as below

  module.exports = {
    "extends": "imbudhiraja/react-native"
  }

```

## Dependencies

1.  babel-eslint
2.  eslint
3.  eslint-config-airbnb-base
4.  eslint-config-airbnb
5.  eslint-plugin-filenames
6.  eslint-plugin-import
8.  npm-run-all
9. eslint-plugin-react
10. eslint-plugin-html
11. eslint-plugin-jsx-a11y
12. stylelint-scss
13. stylelint-order
14. stylelint-config-standard

## Peer Dependencies

1. [eslint]: JavaScript linter

## License

eslint-config-imbudhiraja library is distributed under MIT license.
