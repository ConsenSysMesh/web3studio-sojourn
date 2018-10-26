module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true,
    jasmine: true,
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
  plugins: ['react', 'react-native', 'jasmine', 'detox', 'jsdoc'],
  settings: {
    react: {
      pragma: 'React',
      version: '16.5.0'
    }
  },
  rules: {
    'react/display-name': 'off',
    'jsdoc/check-param-names': 2,
    'jsdoc/check-tag-names': 2,
    'jsdoc/check-types': 2,
    'jsdoc/newline-after-description': 2,
    'jsdoc/require-hyphen-before-param-description': 2,
    'jsdoc/require-param': 2,
    'jsdoc/require-param-description': 2,
    'jsdoc/require-param-type': 2,
    'jsdoc/require-returns-description': 2,
    'jsdoc/require-returns-type': 2,
    'require-jsdoc': [
      2,
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: true
        }
      }
    ],
    'valid-jsdoc': [
      2,
      {
        requireReturn: false
      }
    ]
  }
};
