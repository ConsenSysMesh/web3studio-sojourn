import { hasSetupUport } from './setupSelectors';

describe('setupSelectors', () => {
  it('has setup with a uport address', () => {
    const state = {
      setup: {
        uport: {
          address: 'did:eth:0x0'
        }
      }
    };

    expect(hasSetupUport(state)).toBe(true);
  });

  it('has not setup a uport address', () => {
    const state = {
      setup: {
        uport: {}
      }
    };

    expect(hasSetupUport(state)).toBe(false);
  });
});
