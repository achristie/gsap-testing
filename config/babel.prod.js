var path = require('path');

module.exports = {
  // Don't try to find .babelrc because we want to force this configuration.
  babelrc: false,
  presets: [
    // Latest stable ECMAScript features
    'babel-preset-latest',
    // JSX, Flow
    'babel-preset-react'
  ],
  plugins: [
    // class { handleClick = () => { } }
    'babel-plugin-transform-class-properties',
    // { ...todo, completed: true }
    'babel-plugin-transform-object-rest-spread',
    // function* () { yield 42; yield 43; }
    ['babel-plugin-transform-regenerator', {
      // Async functions are converted to generators by babel-preset-latest
      async: false
    }],
    // Polyfills the runtime needed for async/await and generators
    ['babel-plugin-transform-runtime', {
      helpers: false,
      polyfill: false,
      regenerator: true,
      // Resolve the Babel runtime relative to the config.
      // You can safely remove this after ejecting:
      moduleName: path.dirname('babel-runtime/package')
    }],
    // Optimization: hoist JSX that never changes out of render()
    // Disabled because of issues:
    // * https://github.com/facebookincubator/create-react-app/issues/525
    // * https://phabricator.babeljs.io/search/query/pCNlnC2xzwzx/
    // TODO: Enable again when these issues are resolved.
    // require.resolve('babel-plugin-transform-react-constant-elements')
  ]
};
