import './polyfill';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import E2ETests from './e2e/E2ETests';
AppRegistry.registerComponent(appName, () => E2ETests);
