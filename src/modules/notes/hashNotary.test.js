import hashNotary from './hashNotary';
import { web3 } from '../setup/uport';

describe('hashNotary', () => {
  it('returns a web3 contract', () => {
    expect(hashNotary).toBeInstanceOf(web3.eth.Contract);
  });
});
