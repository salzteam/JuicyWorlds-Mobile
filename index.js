import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import React from 'react';
import store, { persistedStore } from './src/redux/store';

const AppWithRedux = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
            <App />
        </PersistGate>
    </Provider>
)

AppRegistry.registerComponent(appName, () => AppWithRedux);