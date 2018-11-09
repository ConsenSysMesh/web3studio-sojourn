import React from 'react';
import { SetupScreen } from './SetupScreen';
import { StyleProvider } from 'native-base';
import render from 'react-test-renderer';
import theme from '../../theme';

describe('Setup Screen', () => {
  let navigation;

  beforeEach(() => {
    navigation = { navigate: jest.fn() };
  });

  it('Does not redirect if not logged in', () => {
    render.create(
      <StyleProvider style={theme}>
        <SetupScreen navigation={navigation} hasSetupUport={false} />
      </StyleProvider>
    );

    expect(navigation.navigate).not.toHaveBeenCalled();
  });

  it('Redirects if user is logged in', () => {
    render.create(
      <StyleProvider style={theme}>
        <SetupScreen navigation={navigation} hasSetupUport={true} />
      </StyleProvider>
    );

    expect(navigation.navigate).toHaveBeenCalledWith('App');
  });
});
