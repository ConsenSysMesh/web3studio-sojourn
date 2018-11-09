import React from 'react';
import { EditNoteScreen } from './EditNoteScreen';
import { StyleProvider } from 'native-base';
import render from 'react-test-renderer';
import theme from '../../theme';
import uuid from 'uuid/v4';

describe('Edit Note Screen', () => {
  let navigation;

  beforeEach(() => {
    navigation = { goBack: jest.fn() };
  });

  it('Renders without error', () => {
    const note = {
      id: uuid(),
      title: null,
      body: null
    };

    const rendered = render.create(
      <StyleProvider style={theme}>
        <EditNoteScreen navigation={navigation} note={note} />
      </StyleProvider>
    );

    expect(rendered).toBeTruthy();
  });
});
