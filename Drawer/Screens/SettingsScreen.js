import React from 'react';
import { View, Text, StyleSheet, Dimensions, Button } from 'react-native';
import { Ionicons,Entypo, Foundation, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

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
            <ScrollView>
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
                    <Ionicons name="ios-arrow-forward" size={23} color="grey" style={{marginTop:10}} />
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
                        <Foundation size={20}  name="home" color="white"/>
                    </View>
                    <Text style={{marginLeft:20, fontWeight:'600'}}>Add home</Text>
                </View>
                <Ionicons color="grey" size={23} name="ios-arrow-forward" />
            </TouchableOpacity>
            {/* Add Work */}
            <TouchableOpacity style={styles.favouriteItem}>
                <View style={{flexDirection:'row', alignItems:"center"}}>
                    <View style={styles.iconContainer}>
                        <MaterialIcons name="work" size={20} color="white" />
                    </View>
                    <Text style={{marginLeft:20, fontWeight:'600'}}>Add work</Text>
                </View>
                <Ionicons color="grey" size={23} name="ios-arrow-forward" />
            </TouchableOpacity>
            {/* More Saved Places */}
            <TouchableOpacity style={styles.savedPlaces}>
                <Text style={{color:"#428fff"}}>More saved places</Text>
            </TouchableOpacity>
            {/* Safety section */}
            <Text style={styles.mainText}>Safety</Text>
            {/* Manage trusted contacts*/}
            <TouchableOpacity style={styles.favouriteItem}>
                <View style={styles.safetyItems}>
                    <FontAwesome name="user" size={26} />
                    <Text style={{marginLeft:15}}>{"Manage trusted contacts"}
                      <Text style={{fontSize:12, color:'grey'}}>{"\nShare your trip status with family and friends in a\nsingle tap"}</Text>
                    </Text>
                </View>
                <Ionicons color="grey" size={23} name="ios-arrow-forward" />
            </TouchableOpacity>
            {/* Verify trip */}
            <TouchableOpacity style={styles.safetyContainer}>
                <View style={styles.safetyItems}>
                    <View style={{flexDirection:'row', marginLeft:-12}}>
                      <Entypo style={{marginRight:-15}} name='dots-two-vertical' size={24} />
                      <Entypo style={{marginTop:3}} name='dots-three-vertical' size={24} />
                      <Entypo style={{marginLeft:-15}}  name='dots-two-vertical' size={24} />
                    </View>
                    <Text style={{marginLeft:9}}>{"Verify your trip"}
                      <Text style={{fontSize:12, color:'grey'}}>{"\nUse a pin to make sure you get in the right car"}</Text>
                    </Text>
                </View>
                <Ionicons color="grey" size={23} name="ios-arrow-forward" />
            </TouchableOpacity>

            {/* Family */}
                <Text style={styles.mainText}>Family</Text>
                <TouchableOpacity style={styles.familyContainer}>
                    <Text>{"Set up your family"}
                      <Text style={{fontSize:12, color:'grey'}}>{"\nPay for your loved ones and get trip notfication"}</Text>
                    </Text>
                    <Ionicons color="grey" size={23} name="ios-arrow-forward" />
                </TouchableOpacity>

            {/* Privacy */}
                <View style={{marginTop:40}}>
                    <TouchableOpacity style={styles.familyContainer}>
                        <Text>{"Privacy"}
                          <Text style={{fontSize:12, color:'grey'}}>{"\nManage the data you share with us"}</Text>
                        </Text>
                        <Ionicons color="grey" size={23} name="ios-arrow-forward" />
                    </TouchableOpacity>
                </View>
             {/*Security  */}
               <View style={{marginTop:40}}>
                    <TouchableOpacity style={styles.familyContainer}>
                        <Text>{"Security"}
                          <Text style={{fontSize:12, color:'grey'}}>{"\nControl your account security with 2-step verification\nand more"}</Text>
                        </Text>
                        <Ionicons color="grey" size={23} name="ios-arrow-forward" />
                    </TouchableOpacity>
                </View>
            {/* Sign out  */}
               <TouchableOpacity style={[{marginTop:40, marginBottom:10}, styles.savedPlaces]}>
                  <Text style={{color:'orange'}}>Sign out</Text>
               </TouchableOpacity>
            </ScrollView>
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
        marginLeft:20,
    },
    favouriteItem:{
        backgroundColor:'white',
        height:64,
        borderTopWidth:StyleSheet.hairlineWidth,
        borderColor:'#c4c4c4',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20,
        flexDirection:'row'
    },
    iconContainer:{
        width:35,
        height:35,
        borderRadius:20,
        backgroundColor:"#428fff",
        justifyContent:'center',
        alignItems:'center'
    },
    savedPlaces:{
        backgroundColor:'white',
        height:43,
        justifyContent:'center',
        paddingHorizontal:20,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderTopWidth:StyleSheet.hairlineWidth,
        borderColor:'#c4c4c4'
    },
    safetyItems:{
        flexDirection:'row',
        justifyContent:"center",
        alignItems:"center",
    },
    safetyContainer:{
        backgroundColor:'white',
        height:64,
        borderTopWidth:StyleSheet.hairlineWidth,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderColor:'#c4c4c4',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20,
        flexDirection:'row'
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
        flexDirection:'row'
    }
})
export default SettingsScreen;