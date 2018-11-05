import PropTypes from 'prop-types';
import { notaryStatus } from './notes/notesReducer';

export const Uuid = PropTypes.string;
export const Hash = PropTypes.string;

export const Note = PropTypes.shape({
  id: Uuid.isRequired,
  title: PropTypes.string,
  body: PropTypes.string,
  calendarLastModified: PropTypes.string, // calculated in selector from timestamp
  lastModified: PropTypes.number // ms
});

export const NoteVaultRecord = PropTypes.shape({
  noteId: Uuid.isRequired,
  noteHash: Hash.isRequired,
  ipfs: PropTypes.shape({
    hashes: PropTypes.arrayOf(Hash),
    error: PropTypes.instanceOf(Error)
  }),
  notary: PropTypes.shape({
    txHash: PropTypes.string.isRequired,
    status: PropTypes.oneOf(Object.keys(notaryStatus)).isRequired,
    timestamp: PropTypes.number, // seconds
    error: PropTypes.instanceOf(Error)
  })
});
