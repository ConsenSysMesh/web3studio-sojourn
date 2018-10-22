/** @format */
import './polyfill';
import { AppRegistry, YellowBox } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

YellowBox.ignoreWarnings([
  'Remote debugger is in a background tab which may cause apps to perform',
  // Drizzle Initialization https://github.com/trufflesuite/drizzle/issues/130
  'TypeError: window.addEventListener is not a function'
]);

AppRegistry.registerComponent(appName, () => App);
