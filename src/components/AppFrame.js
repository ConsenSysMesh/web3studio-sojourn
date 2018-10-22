import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DrizzleProvider from './DrizzleProvider';

export default class App extends PureComponent {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return <DrizzleProvider>{this.props.children}</DrizzleProvider>;
  }
}
