import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './RootNavigator';
import SettingsScreen from '../Drawer/Screens/SettingsScreen';
import PaymentScreen from '../Drawer/Screens/PaymentScreen';
import Search from '../components/Search';

const Stack = createStackNavigator();
const StackNavigator = () => {
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
                name="Home"
                component={RootNavigator}
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="Payment"
                component={PaymentScreen}
                options={{
                    headerShown:false,
                    animationEnabled:false
                }}
            />
            <Stack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    headerShown:false,
                    animationEnabled:false
                }}
            />
            <Stack.Screen 
                name="Search"
                component={Search}
                options={{
                    headerShown:false,
                    animationEnabled:false
                }}
            />
        </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;
