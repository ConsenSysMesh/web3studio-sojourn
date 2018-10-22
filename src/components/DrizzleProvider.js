import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { DrizzleContext } from 'drizzle-react';
import { connect } from 'react-redux';
import { Drizzle, generateStore } from 'drizzle';

const drizzleOptions = {
  contracts: []
};

const drizzleStore = generateStore(drizzleOptions);
const drizzle = new Drizzle(drizzleOptions, drizzleStore);

export default class DrizzleProvider extends PureComponent {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  componentDidMount() {
    // Drizzle init shim
    // https://github.com/trufflesuite/drizzle/pull/100
    drizzleStore.dispatch({
      type: 'DRIZZLE_INITIALIZING',
      drizzle: drizzle,
      options: drizzleOptions
    });
  }

  render() {
    return (
      <DrizzleContext.Provider drizzle={drizzle} options={drizzleOptions}>
        {this.props.children}
      </DrizzleContext.Provider>
    );
  }
}

export const connectDrizzleState = (...connectArgs) => Component => props => {
  const ConnectedComponent = connect(...connectArgs)(Component);

  return (
    <DrizzleContext.Consumer>
      {drizzleContext => (
        <ConnectedComponent
          drizzleInitialized={drizzleContext.initialized}
          {...drizzleContext}
          {...props}
          store={drizzleContext.drizzle.store}
        />
      )}
    </DrizzleContext.Consumer>
  );
};
