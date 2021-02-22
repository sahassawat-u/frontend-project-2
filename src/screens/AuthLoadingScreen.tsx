import React from 'react'
import { ActivityIndicator } from 'react-native'
import firebase from 'firebase/app'
import Background from '../components/Background'
import { theme } from '../core/theme'
import { Navigation } from '../types';
type Props = {
  navigation: Navigation;
};

const AuthLoadingScreen = ({ navigation }: Props) => {
  console.log('hi')
  firebase.auth().onAuthStateChanged((user) => {
    console.log(user);
    if (user) {
      // User is logged in
      navigation.navigate('Dashboard');
    //   navigation.reset({
    //     index: 0,
    //     routes: [{ name: 'Dashboard' }],
    //   })
    } else {
         navigation.navigate('LoginScreen');
      // User is not logged in
    //   navigation.reset({
    //     index: 0,
    //     routes: [{ name: 'LoginScreen' }],
    //   })
    }
  })

  return (
    <Background>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </Background>
  )
}

export default AuthLoadingScreen