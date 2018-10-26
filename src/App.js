import React, { Component } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RootNavigator from './navigation/RootNavigator';
import configureStore from './store/configureStore';
import Loading from './screens/Loading';

const navigationPersistenceKey = __DEV__ ? 'NavigationStateDEV' : null;
const { store, persistor } = configureStore();

// Un(re)comment to clear history for next load
// persistor.purge();

/**
 * App Entry point
 */
export default class App extends Component {
  /**
   * Renders the component.
   *
   * @returns {React.Element} Element to render.
   */
  render() {
    return (
      <ReduxProvider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <RootNavigator persistenceKey={navigationPersistenceKey} />
        </PersistGate>
      </ReduxProvider>
    );
  }
}
