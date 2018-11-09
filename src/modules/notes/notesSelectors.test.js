import {
  selectNotesDisplayList,
  selectCurrentVaultRecord,
  selectCurrentNote
} from './notesSelectors';
import { web3 } from '../signIn/uport';

describe('Notes selectors', () => {
  let state;
  let navigation;
  let timestamp = Date.now();
  let pinkieNote;
  let pinkieNoteHash;
  let pinkieNoteVaultRecord;

  beforeEach(() => {
    pinkieNote = {
      id: 'pinkie',
      title: "Pinkie Pie's recipes",
      body: "They're kinda the best",
      lastModified: timestamp - 100
    };

    pinkieNoteVaultRecord = {
      noteId: pinkieNote.id,
      noteHash: pinkieNoteHash,
      ipfs: {
        hashes: []
      }
    };

    pinkieNoteHash = web3.utils.sha3(JSON.stringify(pinkieNote));

    state = {
      notes: {
        notes: {
          [pinkieNote.id]: pinkieNote,
          '0x1': {
            id: 'rarity',
            title: "Rarity's dresses",
            body: 'So couture!',
            lastModified: timestamp
          }
        },
        vaultRecords: {
          [pinkieNoteHash]: pinkieNoteVaultRecord
        }
      }
    };

    navigation = {
      getParam: () => pinkieNote.id
    };
  });

  it('should select the current note with navigation', () => {
    expect(selectCurrentNote(state, { navigation })).toBe(pinkieNote);
  });

  it('should provide a default note with a new id if none provided', () => {
    const defaultNote = selectCurrentNote(state, {
      navigation: { getParam: () => null }
    });

    expect(defaultNote).toEqual(
      expect.objectContaining({
        title: null,
        body: null
      })
    );

    expect(defaultNote.id).toMatch(/(\w+-){4}\w+/);
  });

  it('should select the current vault record by param', () => {
    expect(
      selectCurrentVaultRecord(state, { vaultRecord: pinkieNoteHash })
    ).toBe(pinkieNoteVaultRecord);
  });

  it('should select a time-sorted list with display timestamps', () => {
    const noteDisplayList = selectNotesDisplayList(state);

    expect(noteDisplayList).toBeInstanceOf(Array);
    expect(noteDisplayList.length).toBeGreaterThanOrEqual(1);

    noteDisplayList.forEach((note, index) => {
      expect(note.calendarLastModified).toEqual(
        expect.stringContaining('seconds')
      );

      if (index > 0) {
        const previousNote = noteDisplayList[index - 1];

        expect(previousNote.lastModified - note.lastModified).toBeGreaterThan(
          0
        );
      }
    });
  });
});
