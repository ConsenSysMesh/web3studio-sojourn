import { createStackNavigator } from 'react-navigation';
import NotesScreen from '../screens/Notes';

const BottomTabNavigator = createStackNavigator(
  { Home: NotesScreen },
  {
    navigationOptions: () => ({
      header: null
    })
  }
);

export default BottomTabNavigator;
