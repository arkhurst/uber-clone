import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from '../Main';
import DrawerContent from '../Drawer/DrawerContent';


const Drawer = createDrawerNavigator();
const RootNavigator = () => {
    return(
        <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={Main} />
        </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;