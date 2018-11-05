import { combineReducers } from 'redux';
import { reducer as signInReducer } from '../modules/signIn/signInReducer';
import { reducer as notesReducer } from '../modules/notes/notesReducer';

export default combineReducers({
  signIn: signInReducer,
  notes: notesReducer
});
