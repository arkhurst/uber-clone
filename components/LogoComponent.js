import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';


export default function Logo({scale}){
    return(
        <Animated.View style={{...styles.logo, transform:[{scale:scale}]}}>
            <Text style={styles.uber}>Uber</Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    logo:{
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        height:120,
        width:120
    },
    uber:{
        fontWeight:'400',
        fontSize:36
    }
})