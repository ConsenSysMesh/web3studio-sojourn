import {
  reducer,
  signInWithUPort,
  signInSuccess,
  signInFailure
} from './signInReducer';
import { mockUport } from 'react-native-uport-connect';

describe('signInReducer', () => {
  const uPortPayload = {
    address: '0x0',
    eth: '0x0',
    networkAddress: '2nQtiQG6Cgm1GYTBaaKAgr76uY7iSexUkqX'
  };

  const expectedSignInState = {
    address: '0x00521965e7bd230323c423d96c657db5b79d099f'
  };

  it('Adds uport payload to uport state', () => {
    const action = signInSuccess(expectedSignInState);

    expect(reducer(null, action)).toEqual(
      expect.objectContaining({
        uport: expectedSignInState
      })
    );
  });

  it('clears uport details and sets an error on failure', () => {
    const state = { uport: expectedSignInState };
    const error = new Error('You burnt the pies');
    const action = signInFailure(new Error('You burnt the pies'));

    expect(reducer(state, action)).toEqual(
      expect.objectContaining({ uport: {}, error })
    );
  });

  it('dispatches a success event on successful login', async () => {
    const dispatch = jest.fn();

    mockUport.requestCredentials.mockResolvedValue(uPortPayload);

    await signInWithUPort()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(signInSuccess(expectedSignInState));
  });
});
