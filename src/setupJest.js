/**
 * Mock XMLHttpRequest.
 */
class XMLHttpRequest {}
global.XMLHttpRequest = XMLHttpRequest;

global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
};

jest.mock('react-native', () => require('react-native-mock-render'), {
  virtual: true
});
