import React from 'react';
import { Notes } from './Notes';
import { StyleProvider } from 'native-base';
import render from 'react-test-renderer';
import theme from '../theme';

describe('Notes Screen', () => {
  it('Renders without error', () => {
    const rendered = render.create(
      <StyleProvider style={theme}>
        <Notes hashes={[]} />
      </StyleProvider>
    );

    expect(rendered).toBeTruthy();
  });
});
