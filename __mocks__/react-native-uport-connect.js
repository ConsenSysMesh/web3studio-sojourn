import * as MNID from 'mnid';

const mockUport = {
  requestCredentials: jest.fn()
};

export default jest.fn().mockReturnValue({ uport: mockUport, MNID });

export { mockUport };
