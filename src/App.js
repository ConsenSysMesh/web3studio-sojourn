import React, { Component } from 'react';
import DrizzleProvider from './components/DrizzleProvider';
import Home from './screens/Home';

export default class App extends Component {
  render() {
    return (
      <DrizzleProvider>
        <Home />
      </DrizzleProvider>
    );
  }
}
