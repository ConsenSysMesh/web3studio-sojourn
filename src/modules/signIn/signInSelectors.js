import { createSelector } from 'reselect';

/**
 * Selects sign in state
 *
 * @param {Object} state - redux state
 * @returns {Object} Sign in redux state
 */
const selectSignIn = state => state.signIn;
const selectUPort = createSelector(selectSignIn, signIn => signIn.uport);

export const selectAddress = createSelector(
  selectUPort,
  uport => uport.address
);

export const isSignedIn = createSelector(selectAddress, address => !!address);
