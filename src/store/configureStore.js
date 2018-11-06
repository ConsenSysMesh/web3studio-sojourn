import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import secureStorage from './secureStorage';
import stateReconciler from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import rootReducer from './reducer';

const persistConfig = {
  key: 'StoreRoot',
  storage: secureStorage,
  stateReconciler
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(persistedReducer, applyMiddleware(thunk));

  const persistor = persistStore(store);

  if (module.hot) {
    module.hot.accept(() => {
      // This fetch the new state of the above reducers.
      const nextRootReducer = require('./reducer');

      store.replaceReducer(persistReducer(persistConfig, nextRootReducer));
    });
  }

  return { store, persistor };
};
