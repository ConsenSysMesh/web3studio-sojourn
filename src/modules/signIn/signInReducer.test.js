import {
  reducer,
  signInWithUPort,
  signInSuccess,
  signInFailure
} from './signInReducer';
import { mockUport } from 'react-native-uport-connect';

describe('signInReducer', () => {
  const payload = {
    name: 'Pinkie Pie',
    address: '0x0'
  };

  it('Adds uport payload to uport state', () => {
    const action = signInSuccess(payload);

    expect(reducer(null, action)).toEqual(
      expect.objectContaining({ uport: payload })
    );
  });

  it('clears uport details and sets an error on failure', () => {
    const state = { uport: payload };
    const error = new Error('You burnt the pies');
    const action = signInFailure(new Error('You burnt the pies'));

    expect(reducer(state, action)).toEqual(
      expect.objectContaining({ uport: {}, error })
    );
  });

  it('dispatches a success event on successful login', async () => {
    const dispatch = jest.fn();

    mockUport.requestCredentials.mockResolvedValue(payload);

    await signInWithUPort()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(signInSuccess(payload));
  });
});
