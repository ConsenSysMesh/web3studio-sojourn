import hashPersistor from './hashPersistor';
import { web3 } from '../../util/uport';

describe('hashPersistor', () => {
  it('returns a web3 contract', () => {
    expect(hashPersistor).toBeInstanceOf(web3.eth.Contract);
  });
});
