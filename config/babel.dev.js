var path = require('path');

module.exports = {
  // Don't try to find .babelrc because we want to force this configuration.
  babelrc: false,
  // This is a feature of `babel-loader` for webpack (not Babel itself).
  // It enables caching results in OS temporary directory for faster rebuilds.
  cacheDirectory: true,
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
    }]
  ]
};
