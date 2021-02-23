import React from 'react';
import { Provider } from 'react-native-paper';
import App from './src';
import { theme } from './src/core/theme';
import firebase from 'firebase/app'
// import 'firebase/auth'
require('firebase/auth');
import { FIREBASE_CONFIG } from './src/core/config'

if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG)
}
const Main = () => (
  <Provider theme={theme}>
    <App />
  </Provider>
);

export default Main;
