import hashNotary from './hashNotary';
import vault from './vault';
import { selectAddress } from '../signIn/signInSelectors';
import { web3 } from '../signIn/uport';

export const NOTE_CHANGED = 'sojourn/notes/NOTE_CHANGED';

export const HASH_NOTARY_START = 'sojourn/notes/HASH_NOTARY_START';
export const HASH_NOTARY_SUCCESSFUL = 'sojourn/notes/HASH_NOTARY_SUCCESSFUL';
export const HASH_NOTARY_FAILURE = 'sojourn/notes/HASH_NOTARY_FAILURE';

export const VAULT_SAVED_SUCCESS = 'sojourn/notes/VAULT_SAVED_SUCCESS';
export const VAULT_SAVED_FAILURE = 'sojourn/notes/VAULT_SAVED_FAILURE';

/**
 * Number of blocks to wait for confirmation of a transaction
 * @type {number}
 */
const CONFIRMATION_WAIT = 12;

export const notaryStatus = {
  pending: 'pending',
  confirmed: 'confirmed',
  error: 'error'
};

/**
 * Vault save was successful
 *
 * @param {string} id - note id
 * @param {Array<string>} ipfsHashes - Array of ipfs hash locations
 * @param {string} noteHash - hash of original note
 * @returns {Object} - Redux action
 */
const vaultSaveSuccess = (id, ipfsHashes, noteHash) => ({
  type: VAULT_SAVED_SUCCESS,
  id,
  ipfsHashes,
  noteHash
});

/**
 * Vault save erred
 *
 * @param {Error} error - the error
 * @returns {Object} - Redux action
 */
const vaultSaveFailure = error => ({
  type: VAULT_SAVED_FAILURE,
  error
});

/**
 * A note changed
 *
 * @param {Object} note - a Note object
 * @returns {Object} - Redux Action
 */
export const noteChanged = ({ id, title, body }) => ({
  type: NOTE_CHANGED,
  id,
  title,
  body
});

/**
 * HashPersistor success action generator
 *
 * @param {string} id - Note id
 * @param {string} noteHash - hash to be persisted
 * @param {number} timestamp - timestamp in seconds sense unix epoch
 * @returns {Object} - redux action
 */
export const hashNotarySuccessful = (id, noteHash, timestamp) => ({
  type: HASH_NOTARY_SUCCESSFUL,
  id,
  noteHash,
  timestamp
});

/**
 * HashPersistor start action generator
 *
 * @param {string} id - Note id
 * @param {string} noteHash - hash to be persisted
 * @param {string} txHash - transaction hash
 * @returns {Object} - redux action
 */
export const hashNotaryStart = (id, noteHash, txHash) => ({
  type: HASH_NOTARY_START,
  id,
  noteHash,
  txHash
});

/**
 * HashPersistor failure action generator
 *
 * @param {string} id - Note id
 * @param {string} noteHash - hash to be persisted
 * @param {Error} error - sign in error
 * @returns {Object} - redux action
 */
export const hashNotaryFailure = (id, noteHash, error) => ({
  type: HASH_NOTARY_FAILURE,
  id,
  noteHash,
  error
});

/**
 * Thunk to notarize and save a note. This does three things:
 * 1. Save a hash of the note param to a connected blockchain
 * 2. Use the `meatGrinder` to encrypt and break apart the notes and store on ipfs
 * 3. Persist the IPFS hash locations in the redux store
 *
 * Note: Step 3 is a good place to add a bit of centralization for syncing notes
 * across multiple devices.
 *
 * @param {Object} note - to be saved, { title, body }
 * @returns {Function} - Redux thunk action
 */
export const notarizeAndSaveNoteToVault = note => async (
  dispatch,
  getState
) => {
  const id = note.id;
  const noteString = JSON.stringify(note);
  const hash = web3.utils.sha3(noteString);
  const address = selectAddress(getState());
  const txOptions = { from: address };

  await hashNotary.methods
    .save(hash)
    .send(txOptions)
    // Called when uport TX approved by user
    .on('transactionHash', txHash => {
      dispatch(saveNoteToVault(id, noteString, hash));
      dispatch(hashNotaryStart(id, hash, txHash));
    })
    .on('confirmation', async confirmationNumber => {
      if (confirmationNumber === CONFIRMATION_WAIT) {
        const timestamp = await hashNotary.methods
          .getTimestamp(hash)
          .call(txOptions);

        dispatch(hashNotarySuccessful(id, hash, timestamp));
      }
    })
    .on('error', err => dispatch(hashNotaryFailure(id, hash, err)));
};

/**
 * Saves a note to the "vault", sets the ipfs locations to the state
 *
 * @param {string} id - note id
 * @param {string} noteString - note to be saved as a string
 * @param {string} noteHash - hash of the note string
 * @returns {Function} - Redux action generator
 */
const saveNoteToVault = (id, noteString, noteHash) => async dispatch => {
  const secret = 'TODO: get a stored secret';

  try {
    const ipfsHashes = await vault.save(noteString, secret);
    dispatch(vaultSaveSuccess(id, ipfsHashes, noteHash));
  } catch (err) {
    dispatch(vaultSaveFailure(id, noteHash, err));
  }
};

export const INITIAL_STATE = {
  notes: {},
  vaultRecords: {}
};

/**
 * Note redux reducer
 *
 * @param {Object} state - Current redux state
 * @param {Object} action - redux action
 * @returns {Object} - new redux state
 */
export const reducer = (state = INITIAL_STATE, action) => {
  const {
    type,
    id,
    title,
    body,
    ipfsHashes,
    noteHash,
    error,
    txHash,
    timestamp
  } = action;
  const vaultRecord = noteHash && (state.vaultRecords[noteHash] || {});

  switch (type) {
    case NOTE_CHANGED: {
      return {
        ...state,
        notes: {
          ...state.notes,
          [id]: {
            id,
            title,
            body,
            lastModified: Date.now()
          }
        }
      };
    }

    case HASH_NOTARY_START: {
      return {
        ...state,
        vaultRecords: {
          ...state.vaultRecords,
          [noteHash]: {
            ...vaultRecord,
            noteId: id,
            noteHash,
            notary: {
              ...vaultRecord.notary,
              txHash,
              status: notaryStatus.pending
            }
          }
        }
      };
    }

    case HASH_NOTARY_SUCCESSFUL: {
      return {
        ...state,
        vaultRecords: {
          ...state.vaultRecords,
          [noteHash]: {
            ...vaultRecord,
            noteId: id,
            noteHash,
            notary: {
              ...vaultRecord.notary,
              status: notaryStatus.confirmed,
              timestamp
            }
          }
        }
      };
    }

    case HASH_NOTARY_FAILURE: {
      return {
        ...state,
        vaultRecords: {
          ...state.vaultRecords,
          [noteHash]: {
            ...vaultRecord,
            noteId: id,
            noteHash,
            notary: {
              ...vaultRecord.notary,
              status: notaryStatus.error,
              error
            }
          }
        }
      };
    }

    case VAULT_SAVED_SUCCESS: {
      return {
        ...state,
        vaultRecords: {
          ...state.vaultRecords,
          [noteHash]: {
            ...vaultRecord,
            noteId: id,
            noteHash,
            ipfs: {
              hashes: ipfsHashes
            }
          }
        }
      };
    }

    case VAULT_SAVED_FAILURE: {
      return {
        ...state,
        vaultRecords: {
          ...state.vaultRecords,
          [noteHash]: {
            ...vaultRecord,
            noteId: id,
            noteHash,
            ipfs: {
              error
            }
          }
        }
      };
    }
  }

  return state;
};
