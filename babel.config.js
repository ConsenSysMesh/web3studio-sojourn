module.exports = api => {
  api.cache(true);

  return {
    presets: [
      'module:metro-react-native-babel-preset',
      'module:react-native-dotenv',
      'react-native-uport-connect/babel-preset.js'
    ],
    plugins: [
      '@babel/plugin-transform-flow-strip-types',
      '@babel/plugin-transform-runtime',
      '@babel/plugin-proposal-class-properties'
    ].map(require.resolve)
  };
};
