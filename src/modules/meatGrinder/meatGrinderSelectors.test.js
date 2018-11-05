import { selectHashes, selectHashDisplayList } from './meatGrinderSelectors';

describe('Meat Grinder selectors', () => {
  let hashes;
  let timestamp = Math.floor(Date.now() / 1000);

  beforeEach(() => {
    hashes = {
      '0x0': { timestamp, status: 'pending' }
    };
  });

  it('should select hashes', () => {
    expect(selectHashes({ meatGrinder: { hashes } })).toBe(hashes);
  });

  it('should add nice timestamps to hash list', () => {
    const hashList = selectHashDisplayList({ meatGrinder: { hashes } });
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
