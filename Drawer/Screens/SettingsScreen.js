import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const winHeight = Dimensions.get('window').height

const SettingsScreen = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Home')} >
                  <Ionicons name="ios-close" color="white"  size={32}/>
                </TouchableOpacity>
                <Text style={styles.headerText}>Settings</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    header:{
        backgroundColor:'black',
        height:140,
        justifyContent:'space-between',
        padding:20,
        paddingTop:50
    },
    headerText:{
        color:'white',
        fontSize:23
    }
})
export default SettingsScreen;