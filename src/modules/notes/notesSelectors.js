import { createSelector } from 'reselect';
import moment from 'moment';
import uuid from 'uuid/v4';

/**
 * Select the top level meat grinder state
 *
 * @param {Object} state - Redux state
 * @returns {Object} - meat grinder state
 */
const selectNotes = state => state.notes.notes;

/**
 * Select the current map of vault records
 *
 * @param {Object} state - Redux state
 * @returns {Object} - vault record map
 */
const selectVaultRecords = state => state.notes.vaultRecords;

/**
 * Select the current vault record identifier
 *
 * @param {Object} state - Redux state
 * @param {Object} props - React element props
 * @returns {string} - vault record hash
 */
const selectCurrentVaultRecordHash = (state, props) => props.vaultRecord;

/**
 * Select the current vault record
 *
 * @param {Object} state - Redux state
 * @param {Object} props - React element props
 * @returns {Object} - A vault record
 */
export const selectCurrentVaultRecord = createSelector(
  selectVaultRecords,
  selectCurrentVaultRecordHash,
  (vaultRecords, vaultRecordHash) => {
    return vaultRecords[vaultRecordHash];
  }
);

/**
 * Select the noteId passed by navigation param
 *
 * @param {Object} state - Redux state object
 * @param {Object} props - props passed to component
 * @returns {string} - noteId
 */
const selectCurrentNoteId = (state, props) =>
  props.navigation.getParam('noteId') || uuid();

/**
 * Select the current note passed by navigation param `noteId`
 *
 * @param {Object} state - Redux state object
 * @param {Object} props - props passed to component
 * @returns {Object} - a note object
 */
export const selectCurrentNote = createSelector(
  selectNotes,
  selectCurrentNoteId,
  (notes, noteId) => notes[noteId] || { id: noteId, title: null, body: null }
);

/**
 * Select a sorted list of notes with computed properties for display to the
 * user.
 *
 * @param {Object} state - Redux state object
 * @returns {Array<Object>} - An array of note objects
 */
export const selectNotesDisplayList = createSelector(selectNotes, notes =>
  Object.keys(notes)
    .map(id => notes[id])
    .map(note => ({
      ...note,
      body: note.body && note.body.trim(),
      calendarLastModified: moment(note.lastModified).fromNow(true)
    }))
    .sort((noteA, noteB) => noteB.lastModified - noteA.lastModified)
);
