import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import {SimpleLineIcons, Entypo} from '@expo/vector-icons';


const DrawerContent = (props) => {
    return(
        <DrawerContentScrollView {...props} scrollEnabled={false}>
            {/* Profile */}
            <View style={styles.user}>
                <View style={{borderBottomWidth:StyleSheet.hairlineWidth, borderColor:'grey', paddingVertical:25}}>
                <View style={styles.profileContainer}>
                    {/* Avatar */}
                    <View style={styles.avatar}>
                        <Entypo name="user" color="#b8b8b8" size={33} />
                    </View>
                    {/* Name */}
                    <View style={{marginTop:30, marginLeft:30}}>
                      <Text style={{color:'#fff', fontSize:20}}>Fiifi Arkhurst Jr.</Text>
                      <Text style={{color:'grey', marginTop:10, fontWeight:'500'}}>
                          4.45 <Entypo name="star" />
                      </Text>
                    </View>
                </View>
                </View>
                <View style={styles.otherItems}>
                    <Text style={{color:'grey'}}>Do more with your account</Text>
                    <Text style={{color:'#fff', marginTop:20}}>Make money driving</Text>
                </View>
               
            </View>
            <View style={{marginTop:15}}>
            <DrawerItem 
                label="Your trips"
                labelStyle={{
                    fontSize:18,
                    color:'black',
                    fontWeight:'400'
                }}
            />
             <DrawerItem 
                onPress={() => props.navigation.navigate('Payment')}
                label="Payment"
                labelStyle={{
                    fontSize:18,
                    color:'black',
                    fontWeight:'400'
                }}
            />
            <DrawerItem 
                label="Help"
                labelStyle={{
                    fontSize:18,
                    color:'black',
                    fontWeight:'400'
                }}
            />
            <DrawerItem 
                label="Get discounts"
                labelStyle={{
                    fontSize:18,
                    color:'black',
                    fontWeight:'400'
                }}
            />
            <DrawerItem 
                onPress={() => props.navigation.navigate('Settings')}
                label="Settings"
                labelStyle={{
                    fontSize:18,
                    color:'black',
                    fontWeight:'400'
                }}
            />
             <DrawerItem 
                label="Legal"
                labelStyle={{
                    color:'black'
                }}
            />
            </View>
        </DrawerContentScrollView>    
    );
};

const styles = StyleSheet.create({
    user:{
        backgroundColor:'black',
        height:235,
        marginTop:-50
    },
    profileContainer:{
        flexDirection:'row',
        
   
    },
    avatar:{
        width:60,
        height:60,
        borderRadius:30,
        backgroundColor:"white",
        marginTop:25,
        marginLeft:20,
        justifyContent:'center',
        alignItems:'center'
    },
    otherItems:{
        paddingVertical:20,
        paddingHorizontal:20
    }
})

export default DrawerContent;