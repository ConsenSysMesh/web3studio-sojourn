import { selectHashes, selectHashDisplayList } from './notesSelectors';

describe('Meat Grinder selectors', () => {
  let hashes;
  let timestamp = Math.floor(Date.now() / 1000);

  beforeEach(() => {
    hashes = {
      '0x0': { timestamp, status: 'pending' }
    };
  });

  it('should select hashes', () => {
    expect(selectHashes({ notes: { hashes } })).toBe(hashes);
  });

  it('should add nice timestamps to hash list', () => {
    const hashList = selectHashDisplayList({ notes: { hashes } });
    expect(hashList).toHaveLength(1);
    expect(hashList[0]).toEqual(
      expect.objectContaining({
        hash: '0x0',
        status: 'pending'
      })
    );
    expect(hashList[0].timestamp).toEqual(expect.stringContaining('Today'));
  });
});
