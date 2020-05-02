import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import RootNavigator from './RootNavigator';

//Screens
import SettingsScreen from '../Drawer/Screens/SettingsScreen';
import PaymentScreen from '../Drawer/Screens/PaymentScreen';
import Search from '../components/Search';
import HelpScreen from '../Drawer/Screens/HelpScreen';
import Discounts from '../Drawer/Screens/Discounts';
import Trips from '../Drawer/Screens/Trips';
import LogoScreen from '../Drawer/Screens/LogoScreen';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login"
          component={LogoScreen}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name="Home"
          component={RootNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Trips"
          component={Trips}
          options={{
            headerShown: false,
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{
            headerShown: false,
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="Discount"
          component={Discounts}
          options={{
            headerShown: false,
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="Help"
          component={HelpScreen}
          options={{
            headerShown: false,
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerShown: false,
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerShown: false,
            animationEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
