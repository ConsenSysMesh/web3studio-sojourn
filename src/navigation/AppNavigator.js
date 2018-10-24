import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../screens/Home';

const BottomTabNavigator = createBottomTabNavigator({ Home: HomeScreen });

export default BottomTabNavigator;
