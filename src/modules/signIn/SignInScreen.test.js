import React from 'react';
import { SignInScreen } from './SignInScreen';
import { StyleProvider } from 'native-base';
import render from 'react-test-renderer';
import theme from '../../theme';

describe('Edit Note Screen', () => {
  let navigation;

  beforeEach(() => {
    navigation = { navigate: jest.fn() };
  });

  it('Does not redirect if not logged in', () => {
    render.create(
      <StyleProvider style={theme}>
        <SignInScreen navigation={navigation} isSignedIn={false} />
      </StyleProvider>
    );

    expect(navigation.navigate).not.toHaveBeenCalled();
  });

  it('Redirects if user is logged in', () => {
    render.create(
      <StyleProvider style={theme}>
        <SignInScreen navigation={navigation} isSignedIn={true} />
      </StyleProvider>
    );

    expect(navigation.navigate).toHaveBeenCalledWith('App');
  });
});
