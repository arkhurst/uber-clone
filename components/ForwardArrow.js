import React from 'react'
import { View, StyleSheet } from 'react-native';
import Animated, { interpolate } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons'
import { LOGIN_VIEW_HEIGHT } from '../utils/Constants';
import { TapGestureHandler } from 'react-native-gesture-handler';

export default function ForwardArrow({keyboardHeight, navigation}){

    const opacity = interpolate(keyboardHeight,{
        inputRange:[0, keyboardHeight],
        outputRange:[0,1]
    })
    return(
        
        <Animated.View 
            style={{
                ...styles.fowardArrow, 
                opacity,
                transform:[{ translateY:keyboardHeight}]}}>
                <Ionicons name="md-arrow-forward" color="white" size={23} />
        </Animated.View>
       
    );
};

const styles = StyleSheet.create({
    fowardArrow:{
       position:"absolute",
       height: 60,
       width: 60,
       right:10,
       zIndex: 10000,
       alignItems:'center',
       justifyContent:"center",
       borderRadius:30,
       bottom:LOGIN_VIEW_HEIGHT/2,
       backgroundColor:"#54575e"
    }
})