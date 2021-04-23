import React from 'react';
import {StatusBar} from 'expo-status-bar';

// * modules

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

// * components

import Routes from './src/routes';

// * utils

import configureStore from './src/config/store';
const {persistor, store} = configureStore();

//

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar backgroundColor="#fff" style="auto" translucent={false} />
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;
// Desenvolvido por Hubert Ryan
