import { isSignedIn } from './signInSelectors';

describe('signInSelectors', () => {
  it('is signed in with a uport address', () => {
    const state = {
      signIn: {
        uport: {
          address: 'did:eth:0x0'
        }
      }
    };

    expect(isSignedIn(state)).toBe(true);
  });

  it('is not signed in without a uport address', () => {
    const state = {
      signIn: {
        uport: {}
      }
    };

    expect(isSignedIn(state)).toBe(false);
  });
});
