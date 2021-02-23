import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  RegisterScreen,
  LoginScreen,
  Dashboard,
  ForgotPasswordScreen
} from './screens';

const Router = createStackNavigator(
  {
    RegisterScreen,
    LoginScreen,
    Dashboard,
    ForgotPasswordScreen,
  },
  {
    initialRouteName: 'LoginScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);
