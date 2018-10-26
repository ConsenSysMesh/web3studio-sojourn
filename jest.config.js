module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  globals: {
    window: true
  },
  transformIgnorePatterns: ['node_modules/(?!react-|drizzle).+\\.js$'],
  setupFiles: ['./src/setupJest.js'],
  testPathIgnorePatterns: ['/node_modules', '/e2e/', '/test/']
};
