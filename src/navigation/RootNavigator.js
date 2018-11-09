import { createSwitchNavigator } from 'react-navigation';
import LoadingScreen from '../screens/Loading';
import SetupScreen from '../modules/setup/SetupScreen';
import AppNavigator from './AppNavigator';

export default createSwitchNavigator(
  {
    Loading: LoadingScreen,
    App: AppNavigator,
    Setup: SetupScreen
  },
  {
    initialRouteName: 'Loading',
    navigationOptions: () => ({
      header: null
    })
  }
);
