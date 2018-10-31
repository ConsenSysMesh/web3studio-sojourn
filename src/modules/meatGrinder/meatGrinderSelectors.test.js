import { selectHashes } from './meatGrinderSelectors';

describe('Meat Grinder selectors', () => {
  it('should select hashes', () => {
    const hashes = { '0x0': { timestamp: Date.now(), status: 'pending' } };

    expect(selectHashes({ meatGrinder: { hashes } })).toBe(hashes);
  });
});
