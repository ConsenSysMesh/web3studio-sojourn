import { uport } from '../../util/uport';

export const SIGN_IN_SUCCESSFUL = 'sojourn/sign-in/SIGN_IN_SUCCESSFUL';
export const SIGN_IN_FAILURE = 'sojourn/sign-in/SIGN_IN_FAILURE';

export const signInSuccess = payload => ({ type: SIGN_IN_SUCCESSFUL, payload });
export const signInFailure = error => ({ type: SIGN_IN_FAILURE, error });
export const signInWithUPort = () => async dispatch =>
  uport
    .requestCredentials({
      requested: ['address']
    })
    .then(payload => dispatch(signInSuccess(payload)))
    .catch(error => dispatch(signInFailure(error)));

export const INITIAL_STATE = {
  uport: {}
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESSFUL:
      return {
        ...state,
        uport: action.payload
      };

    case SIGN_IN_FAILURE:
      return {
        ...state,
        uport: INITIAL_STATE.uport,
        error: action.error
      };
  }
  return state;
};
