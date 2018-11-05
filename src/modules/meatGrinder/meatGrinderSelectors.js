import { createSelector } from 'reselect';
import moment from 'moment';

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

export const selectHashDisplayList = createSelector(selectHashes, hashes =>
  Object.keys(hashes).map(hash => {
    const hashDetails = hashes[hash];

    return {
      hash,
      timestamp: moment(hashDetails.timestamp * 1000).calendar(),
      status: hashDetails.status
    };
  })
);
