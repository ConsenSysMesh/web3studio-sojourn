import React from 'react';
import EditNoteScreen from './EditNoteScreen';
import { StyleProvider } from 'native-base';
import render from 'react-test-renderer';
import theme from '../../theme';

describe('Edit Note Screen', () => {
  let navigation;

  beforeEach(() => {
    navigation = { goBack: jest.fn() };
  });

  it('Renders without error', () => {
    const rendered = render.create(
      <StyleProvider style={theme}>
        <EditNoteScreen navigation={navigation} />
      </StyleProvider>
    );

    expect(rendered).toBeTruthy();
  });
});
