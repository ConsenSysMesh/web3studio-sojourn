import { combineReducers } from 'redux';
import { reducer as setupReducer } from '../modules/setup/setupReducer';
import { reducer as notesReducer } from '../modules/notes/notesReducer';

export default combineReducers({
  setup: setupReducer,
  notes: notesReducer
});
