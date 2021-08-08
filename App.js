import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'; 
import DashboardScreen from './src/screens/Dashboard/DashboardScreen';
import RestaurantScreen from './src/screens/Restaurant/RestaurantScreen';

const navigator = createStackNavigator({

  Dashboard: DashboardScreen,
  Restaurant: RestaurantScreen
}, {
  initialRouteName: 'Dashboard'
});

const App = createAppContainer(navigator);

export default () => {
  return (
    <App/>
  )
}