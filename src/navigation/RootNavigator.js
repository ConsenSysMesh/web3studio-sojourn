import { createSwitchNavigator } from 'react-navigation';
import LoadingScreen from '../screens/Loading';
import SignInScreen from '../modules/signIn/SignInScreen';
import AppNavigator from './AppNavigator';

export default createSwitchNavigator(
  {
    Loading: LoadingScreen,
    App: AppNavigator,
    Auth: SignInScreen
  },
  {
    initialRouteName: 'Loading',
    navigationOptions: () => ({
      header: null
    })
  }
);
