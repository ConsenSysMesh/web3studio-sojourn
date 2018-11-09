import { requestCredentials } from './uport';

export const SETUP_UPORT_SUCCESSFUL = 'sojourn/sign-in/SETUP_UPORT_SUCCESSFUL';
export const SETUP_UPORT_FAILURE = 'sojourn/sign-in/SETUP_UPORT_FAILURE';

/**
 * Setup uPort success action generator
 *
 * @param {Object} payload - uPort Payload
 * @returns {Object} - redux action
 */
export const uportSetupSuccess = payload => ({
  type: SETUP_UPORT_SUCCESSFUL,
  payload
});

/**
 * Setup uPort failure action generator
 *
 * @param {Error} error - sign in error
 * @returns {Object} - redux action
 */
export const uportSetupFailure = error => ({
  type: SETUP_UPORT_FAILURE,
  error
});

/**
 * Sign in thunk. Uses uPort to Authenticate the user
 *
 * @returns {Function} - redux thunk
 */
export const setupUport = () => dispatch =>
  requestCredentials()
    .then(payload => dispatch(uportSetupSuccess(payload)))
    .catch(error => dispatch(uportSetupFailure(error)));

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
    case SETUP_UPORT_SUCCESSFUL:
      return {
        ...state,
        uport: {
          ...action.payload
        }
      };

    case SETUP_UPORT_FAILURE:
      return {
        ...state,
        uport: INITIAL_STATE.uport,
        error: action.error
      };
  }
  return state;
};
