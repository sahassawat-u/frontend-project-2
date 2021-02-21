import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  // HomeScreen,
  LoginScreen,
  Dashboard,
} from './screens';

const Router = createStackNavigator(
  {
    LoginScreen,
    Dashboard,
  },
  {
    initialRouteName: 'LoginScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);
