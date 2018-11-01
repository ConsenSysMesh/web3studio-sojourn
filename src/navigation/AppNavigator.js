import { createStackNavigator } from 'react-navigation';
import NotesScreen from '../screens/Notes';
import EditNoteScreen from '../modules/meatGrinder/EditNoteScreen';

const BottomTabNavigator = createStackNavigator(
  {
    Notes: NotesScreen,
    EditNote: EditNoteScreen
  },
  {
    initialRouteName: 'Notes',
    navigationOptions: () => ({
      header: null
    })
  }
);

export default BottomTabNavigator;
