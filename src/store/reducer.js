import { combineReducers } from 'redux';
import { reducer as signInReducer } from '../modules/signIn/signInReducer';

export default combineReducers({
  signIn: signInReducer
});
