import { EventEmitter } from 'events';
import { promisify } from 'util';
import { persistHash, persistStatus } from './meatGrinderReducer';
import hashPersistor from './hashPersistor';
import configureStore from '../../store/configureStore';
import { web3 } from '../../util/uport';
import { signInSuccess } from '../signIn/signInReducer';
import { selectHashes } from './meatGrinderSelectors';

jest.mock('./hashPersistor');

/**
 * Creates a mocked contract method
 *
 * @returns {Function} - A Mocked web3 Contract method
 */
const mockContractMethod = () => {
  const mockSendEmitter = new EventEmitter();
  const mockCall = jest.fn();

  const mockMethod = jest.fn().mockReturnValue({
    send: jest.fn().mockReturnValue(mockSendEmitter),
    call: mockCall
  });

  mockMethod._mockSendEmitter = mockSendEmitter;
  mockMethod._mockCall = mockCall;

  return mockMethod;
};

describe('Meat Grinder reducer', () => {
  let store;
  let expectedTimestamp;

  beforeEach(() => {
    store = configureStore().store;
    expectedTimestamp = Math.floor(Date.now() / 1000);

    // Mock a log in with uport
    store.dispatch(
      signInSuccess({
        networkAddress: '2nQtiQG6Cgm1GYTBaaKAgr76uY7iSexUkqX'
      })
    );

    hashPersistor.methods.save = mockContractMethod();
    hashPersistor.methods.getTimestamp = mockContractMethod();

    hashPersistor.methods.getTimestamp._mockCall.mockReturnValue(
      expectedTimestamp
    );
  });

  it('saves a status and hash for later on start', async () => {
    const hash = web3.utils.sha3('10 is best');
    const txHash = '0x0';

    store.dispatch(persistHash(hash));

    hashPersistor.methods.save._mockSendEmitter.emit('transactionHash', txHash);

    // Skip a tick for callbacks to pop off
    await promisify(setImmediate)();

    const hashes = selectHashes(store.getState());

    expect(hashes[hash]).toEqual(
      expect.objectContaining({
        status: persistStatus.pending,
        txHash
      })
    );
  });

  it('saves an error and status on failure', async () => {
    const hash = web3.utils.sha3('10 is best');
    const error = new Error('A wild Dalek appeared');

    store.dispatch(persistHash(hash));

    hashPersistor.methods.save._mockSendEmitter.emit('error', error);

    // Skip a tick for callbacks to pop off
    await promisify(setImmediate)();

    const hashes = selectHashes(store.getState());

    expect(hashes[hash]).toEqual(
      expect.objectContaining({
        status: persistStatus.error,
        error
      })
    );
  });

  it('saves the timestamp after 12 confirmations', async () => {
    const hash = web3.utils.sha3('The doctor is in!');

    store.dispatch(persistHash(hash));

    // Simulate 24 confirmations
    new Array(24).fill('').forEach((val, index) => {
      hashPersistor.methods.save._mockSendEmitter.emit(
        'confirmation',
        index + 1
      );
    });

    // Skip a tick for callbacks to pop off
    await promisify(setImmediate)();

    const hashes = selectHashes(store.getState());

    expect(hashes[hash]).toEqual(
      expect.objectContaining({
        timestamp: expectedTimestamp,
        status: persistStatus.confirmed
      })
    );
  });
});
