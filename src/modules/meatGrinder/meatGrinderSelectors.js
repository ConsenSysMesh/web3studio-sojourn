import { createSelector } from 'reselect';

/**
 * Select the top level meat grinder state
 *
 * @param {Object} state - Redux state
 * @returns {Object} - meat grinder state
 */
const selectMeatGrinder = state => state.meatGrinder;

export const selectHashes = createSelector(
  selectMeatGrinder,
  meatGrinder => meatGrinder.hashes
);
