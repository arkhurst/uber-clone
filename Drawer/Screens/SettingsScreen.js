import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Ionicons,Entypo, Foundation } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const winHeight = Dimensions.get('window').height

const SettingsScreen = (props) => {
    return(
        <View style={styles.container}>
            {/* Header and Button */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Home')} >
                  <Ionicons name="ios-close" color="white"  size={32}/>
                </TouchableOpacity>
                <Text style={styles.headerText}>Settings</Text>
            </View>
            {/* Profile */}
            <View style={styles.profileContainer}>
                <TouchableOpacity style={styles.profileItems}>
                    <View style={styles.avatar}>
                        <Entypo color="#cecece" size={32} name="user"/>
                    </View>
                    <View style={styles.userInfo}>
                        <Text>Fiifi Arkhurst Jr</Text>
                        <Text>024 237 9278</Text>
                        <Text>phone-only-user-794e338c6-51b5-4f8f-b...</Text>
                    </View>
                    <Ionicons name="ios-arrow-forward" size={25} color="grey" style={{marginTop:10}} />
                </TouchableOpacity>
            </View>
            {/* Additional Info */}
            <TouchableOpacity style={styles.additionalInfoContainer}>
                <Text style={{color:'orange'}}>For added security, please verify your email.</Text>
            </TouchableOpacity>
            {/* Favourite section */}
            <Text style={styles.mainText}>Favourites</Text>
            {/* Add Home */}
            <TouchableOpacity style={styles.favouriteItem}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View style={styles.iconContainer}>
                        <Foundation size={23}  name="home" color="white"/>
                    </View>
                    <Text style={{marginLeft:20, fontWeight:'600'}}>Add home</Text>
                </View>
                <Ionicons color="grey" size={25} name="ios-arrow-forward" />
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
    profileContainer:{
        backgroundColor:'white',
        height:78,
        marginTop:35,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderTopWidth:StyleSheet.hairlineWidth,
        borderColor:"#c4c4c4",
        paddingVertical:10,
        paddingHorizontal:15
    },
    profileItems:{
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    avatar:{
        width:60,
        height:60,
        borderRadius:30,
        backgroundColor:'whitesmoke', 
        justifyContent:'center',
        alignItems:'center', 
    },
    userInfo:{
        justifyContent:"space-between",
        paddingHorizontal:10
    },
    additionalInfoContainer:{
        backgroundColor:'white',
        height:43,
        justifyContent:'center',
        paddingHorizontal:20,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderColor:'#c4c4c4'
    },
    mainText:{
        margin:32,
        color:'grey',
        marginBottom:20,
        marginLeft:20
    },
    favouriteItem:{
        backgroundColor:'white',
        height:60,
        borderTopWidth:StyleSheet.hairlineWidth,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderColor:'#c4c4c4',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20,
        flexDirection:'row'
    },
    iconContainer:{
        width:40,
        height:40,
        borderRadius:20,
        backgroundColor:"#428fff",
        justifyContent:'center',
        alignItems:'center'
    }
})
export default SettingsScreen;