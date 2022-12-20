import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import React from 'react';
import store, { persistedStore } from './src/redux/store';
import PushNotification from 'react-native-push-notification';

// notification configuration
PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function (token) {
      console.log('TOKEN:', token);
    },
    // (required) Called when a remote is received or opened, or local notification is opened
    onNotification: function (notification) {
      console.log('NOTIFICATION:', notification);
      PushNotification.localNotification({
        channelId: 'local-notification',
        title: notification.title,
        message: notification.message,
      });
    },
  
    // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
    onAction: function (notification) {
      console.log('ACTION:', notification.action);
      console.log('NOTIFICATION:', notification);
    },
  
    // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
    onRegistrationError: function (err) {
      console.error(err.message, err);
    },
  
    // Should the initial notification be popped automatically
    // default: true
    popInitialNotification: true,
  
    /**
     * (optional) default: true
     * - Specified if permissions (ios) and token (android and ios) will requested or not,
     * - if not, you must call PushNotificationsHandler.requestPermissions() later
     * - if you are not using remote notification or do not have Firebase installed, use this:
     *     requestPermissions: Platform.OS === 'ios'
     */
    requestPermissions: true,
  });
  
  // create channel for notification
  PushNotification.createChannel(
    {
      channelId: 'local-notification',
      channelName: 'Local Notification',
    },
    created => console.log(`Channel ${created ? 'created' : 'available'}`),
  );
  

const AppWithRedux = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
            <App />
        </PersistGate>
    </Provider>
)

AppRegistry.registerComponent(appName, () => AppWithRedux);