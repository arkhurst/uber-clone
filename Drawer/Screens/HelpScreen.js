import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HelpScreen = (props) => {

    const handleBackPress = () => {
        const {back, navigation} = props
        return ( back ? null: navigation.goBack() )
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity onPress={() => handleBackPress()} >
                  <Ionicons name="ios-close" color="white"  size={32}/>
                </TouchableOpacity>
                <Text style={styles.headerText}>Help</Text>
            </View>
            <Text style={styles.mainText}>Need help now?</Text>
            <TouchableOpacity style={styles.familyContainer}>
                    <Text>{"Call support"}</Text>
                    <Ionicons color="grey" size={23} name="ios-arrow-forward" />
             </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'whitesmoke'
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
    },
    mainText:{
        margin:32,
        fontWeight:'500',
        marginBottom:20,
        marginLeft:20,
    },
    familyContainer:{
        backgroundColor:'white',
        height:60,
        borderTopWidth:StyleSheet.hairlineWidth,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderColor:'#c4c4c4',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20,
        flexDirection:'row',
     
    }
});

export default HelpScreen;