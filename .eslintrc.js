module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true,
    mocha: true
  },
  globals: {
    __DEV__: false,
    web3: false,
    contract: false,
    artifacts: false
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['react', 'react-native'],
  settings: {
    react: {
      pragma: 'React',
      version: '16.5.0'
    }
  },
  rules: {
    'react/display-name': 'off'
  }
};
