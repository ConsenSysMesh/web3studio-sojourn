import { combineReducers } from 'redux';
import { reducer as signInReducer } from '../modules/signIn/signInReducer';
import { reducer as meatGrinderReducer } from '../modules/meatGrinder/meatGrinderReducer';

export default combineReducers({
  signIn: signInReducer,
  meatGrinder: meatGrinderReducer
});
