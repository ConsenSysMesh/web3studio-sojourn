module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  globals: {
    window: true
  },
  transformIgnorePatterns: [
    'node_modules/(?!react-|drizzle|native-base).+\\.js$'
  ],
  setupFiles: ['./src/setupJest.js'],
  testPathIgnorePatterns: ['/node_modules', '/e2e/', '/test/'],
  collectCoverageFrom: ['src/**/*.js', '!src/setupJest.js'],
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 65,
      functions: 65,
      lines: 70
    }
  }
};
