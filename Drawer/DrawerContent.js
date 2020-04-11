import React from 'react';
import {View, Text} from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';


const DrawerContent = (props) => {
    return(
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem 
                label="first"
            />
             <DrawerItem 
                label="second"
            />
        </DrawerContentScrollView>    
    );
};

export default DrawerContent;