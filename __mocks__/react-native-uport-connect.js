import * as MNID from 'mnid';
import Web3FakeProvider from 'web3-fake-provider';

const mockUport = {
  requestCredentials: jest.fn(),
  getProvider: () => new Web3FakeProvider(),
  network: {
    id: '0x4'
  }
};

export default jest.fn().mockReturnValue({ uport: mockUport, MNID });

export { mockUport };
