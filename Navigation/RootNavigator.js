import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from '../Main';
import DrawerContent from '../Drawer/DrawerContent';

const Drawer = createDrawerNavigator();
const RootNavigator = () => {
  return (
    <Drawer.Navigator
      drawerStyle={{ width: 310 }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Main} />
    </Drawer.Navigator>
  );
};

export default RootNavigator;