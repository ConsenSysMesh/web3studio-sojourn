import { createSelector } from 'reselect';

/**
 * Selects sign in state
 *
 * @param {Object} state - redux state
 * @returns {Object} Sign in redux state
 */
const selectSetup = state => state.setup;
const selectUPort = createSelector(
  selectSetup,
  setup => setup.uport
);

export const selectAddress = createSelector(
  selectUPort,
  uport => uport.address
);

export const hasSetupUport = createSelector(
  selectAddress,
  address => !!address
);
