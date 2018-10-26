import hashPersistor from './hashPersistor';
import { selectAddress } from '../signIn/signInSelectors';

export const HASH_PERSISTOR_START = 'sojourn/meatGrinder/HASH_PERSISTOR_START';
export const HASH_PERSISTOR_SUCCESSFUL =
  'sojourn/meatGrinder/HASH_PERSISTOR_SUCCESSFUL';
export const HASH_PERSISTOR_FAILURE =
  'sojourn/meatGrinder/HASH_PERSISTOR_FAILURE';

const CONFIRMATION_WAIT = 12;

export const persistStatus = {
  pending: 'pending',
  confirmed: 'confirmed',
  error: 'error'
};

/**
 * HashPersistor success action generator
 *
 * @param {string} hash - hash to be persisted
 * @param {number} timestamp - timestamp in seconds sense unix epoch
 * @returns {Object} - redux action
 */
export const hashPersistedSuccessful = (hash, timestamp) => ({
  type: HASH_PERSISTOR_SUCCESSFUL,
  hash,
  timestamp
});

/**
 * HashPersistor start action generator
 *
 * @param {string} hash - hash to be persisted
 * @param {string} txHash - transaction hash
 * @returns {Object} - redux action
 */
export const hashPersistorStart = (hash, txHash) => ({
  type: HASH_PERSISTOR_START,
  txHash,
  hash
});

/**
 * HashPersistor failure action generator
 *
 * @param {string} hash - hash to be persisted
 * @param {Error} error - sign in error
 * @returns {Object} - redux action
 */
export const hashPersistorFailure = (hash, error) => ({
  type: HASH_PERSISTOR_FAILURE,
  hash,
  error
});

/**
 * Persist a Hash thunk. Persists a hash on the blockchain
 *
 * @param {string} hash - Hash to be persisted
 * @returns {Function} - redux thunk
 */
export const persistHash = hash => async (dispatch, getState) => {
  const address = selectAddress(getState());
  const txOptions = { from: address };

  await hashPersistor.methods
    .save(hash)
    .send(txOptions)
    .on('transactionHash', txHash => dispatch(hashPersistorStart(hash, txHash)))
    .on('confirmation', async confirmationNumber => {
      if (confirmationNumber === CONFIRMATION_WAIT) {
        const timestamp = await hashPersistor.methods
          .getTimestamp(hash)
          .call(txOptions);

        dispatch(hashPersistedSuccessful(hash, timestamp));
      }
    })
    .on('error', err => dispatch(hashPersistorFailure(hash, err)));
};

export const INITIAL_STATE = {
  hashes: {}
};

/**
 * Sign in redux reducer
 *
 * @param {Object} state - Current redux state
 * @param {Object} action - redux action
 * @returns {Object} - new redux state
 */
export const reducer = (state = INITIAL_STATE, action) => {
  const { hash, timestamp, txHash, error } = action;

  switch (action.type) {
    case HASH_PERSISTOR_START:
      return {
        ...state,
        hashes: {
          ...state.hashes,
          [hash]: {
            status: persistStatus.pending,
            txHash
          }
        }
      };

    case HASH_PERSISTOR_SUCCESSFUL:
      return {
        ...state,
        hashes: {
          ...state.hashes,
          [hash]: {
            status: persistStatus.confirmed,
            timestamp: timestamp
          }
        }
      };

    case HASH_PERSISTOR_FAILURE:
      return {
        ...state,
        hashes: {
          ...state.hashes,
          [hash]: {
            status: persistStatus.error,
            error: error
          }
        }
      };
  }
  return state;
};
