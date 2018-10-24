import './polyfill';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import RCTAesTests from './e2e/RCTAesTests';
AppRegistry.registerComponent(appName, () => RCTAesTests);
