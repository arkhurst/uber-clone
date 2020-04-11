import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


const Interaction  = () => {
    return(
        <View style={styles.container}>
           <View style={styles.user}>
             <Text style={styles.greeting}>Good morning, Fiifi</Text>
            </View>
        </View>    
    )
};

const styles = StyleSheet.create({
    container : {
        height:340,
        backgroundColor:"white", 
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
    },
    user:{
        borderBottomWidth: 1.5,
        justifyContent:'center',
        alignItems:'center' ,
        paddingVertical:20,
        borderColor:'#cecece'
      },
      greeting:{
        fontWeight:'600',
        fontSize:16
      },
});

export default Interaction;