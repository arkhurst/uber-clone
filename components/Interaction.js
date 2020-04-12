import React from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';


const Interaction  = () => {
    return(
        <View style={styles.container}>
           <View style={styles.user}>
             <Text style={styles.greeting}>Good morning, Fiifi</Text>
           </View>
              <TextInput placeholder="Where to" style={styles.searchbar}>
                 
              </TextInput>
              <TouchableOpacity style={styles.schedule}>

</TouchableOpacity>
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
      searchbar:{
          backgroundColor:'rgba(0, 0, 0, 0.05)',
          width:370,
          height:50,
          margin:20,
          paddingHorizontal:20,
          fontSize:20,
          flexDirection:'row'
      },
      schedule:{
         
      }

});

export default Interaction;