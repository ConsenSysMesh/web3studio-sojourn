import React, { Component } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { StyleProvider } from 'native-base';
import { PersistGate } from 'redux-persist/integration/react';
import RootNavigator from './navigation/RootNavigator';
import configureStore from './store/configureStore';
import Loading from './screens/Loading';
import theme from './theme';

const navigationPersistenceKey = __DEV__ ? 'NavigationStateDEV' : null;
const { store, persistor } = configureStore();

// Un(re)comment to clear history for next load
// persistor.purge();
// require('./store/secureStorage').default.removeItem('persist:StoreRoot');
// require('react-native').AsyncStorage.removeItem(navigationPersistenceKey);

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
          <StyleProvider style={theme}>
            <RootNavigator persistenceKey={navigationPersistenceKey} />
          </StyleProvider>
        </PersistGate>
      </ReduxProvider>
    );
  }
}
