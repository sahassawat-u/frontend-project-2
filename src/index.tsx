import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  RegisterScreen,
  LoginScreen,
  Dashboard,
  AuthLoadingScreen,
} from './screens';

const Router = createStackNavigator(
  {
    RegisterScreen,
    LoginScreen,
    AuthLoadingScreen,
    Dashboard,
  },
  {
    initialRouteName: 'LoginScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);
