const mockUport = {
  requestCredentials: jest.fn()
};

export default jest.fn().mockReturnValue({ uport: mockUport });

export { mockUport };
