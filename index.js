import { AppRegistry, YellowBox } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

YellowBox.ignoreWarnings([
  'Remote debugger is in a background tab which may cause apps to perform'
]);

AppRegistry.registerComponent(appName, () => App);
