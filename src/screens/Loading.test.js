import React from 'react';
import { Loading } from './Loading';
import renderer from 'react-test-renderer';

describe('Loading Screen', () => {
  let navigation;

  beforeEach(() => {
    navigation = { navigate: jest.fn() };
  });

  it('redirects to auth if not signed in', () => {
    renderer.create(<Loading hasSetupUport={false} navigation={navigation} />);

    expect(navigation.navigate).toHaveBeenCalledWith('Setup');
  });

  it('redirects to the app if signed in', () => {
    renderer.create(<Loading hasSetupUport={true} navigation={navigation} />);

    expect(navigation.navigate).toHaveBeenCalledWith('App');
  });
});
