import { uport, MNID } from '../../util/uport';

export const SIGN_IN_SUCCESSFUL = 'sojourn/sign-in/SIGN_IN_SUCCESSFUL';
export const SIGN_IN_FAILURE = 'sojourn/sign-in/SIGN_IN_FAILURE';

/**
 * Sign in success action generator
 *
 * @param {Object} payload - uPort Payload
 * @returns {Object} - redux action
 */
export const signInSuccess = payload => ({ type: SIGN_IN_SUCCESSFUL, payload });

/**
 * Sign in failure action generator
 *
 * @param {Error} error - sign in error
 * @returns {Object} - redux action
 */
export const signInFailure = error => ({ type: SIGN_IN_FAILURE, error });

/**
 * Sign in thunk. Uses uPort to Authenticate the user
 *
 * @returns {Function} - redux thunk
 */
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

/**
 * Sign in redux reducer
 *
 * @param {Object} state - Current redux state
 * @param {Object} action - redux action
 * @returns {Object} - new redux state
 */
export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESSFUL:
      return {
        ...state,
        uport: {
          ...action.payload,
          address: MNID.decode(action.payload.networkAddress).address
        }
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
