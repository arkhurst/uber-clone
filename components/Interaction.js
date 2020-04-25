import React from 'react';
import { View, StyleSheet, Text,  } from 'react-native';
import {  TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons';
import ScheduleModal from './ScheduleModal';


const Interaction  = ({navigation}) => {

  const [visible, setVisible] = React.useState(false);
 

  const cancelModal = () => {
    setVisible(false);
  }

  const openModal = () => {
    setVisible(true)
  }
    return(
        <View style={styles.container}>
           <View style={styles.user}>
             <Text style={styles.greeting}>Good morning, Fiifi</Text>
           </View>
           <View style={styles.searchbar}>
              <TouchableOpacity  onPress={() => navigation.navigate('Search')}>
                  <Text style={{fontSize:19, fontWeight:'600'}}>Where to</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => openModal()} style={styles.schedule}>
                <Ionicons name="ios-time" size={18} />
                <Text style={{fontWeight:'bold'}}>Now</Text>
                <Ionicons name="ios-arrow-down" size={18} />
               <ScheduleModal visible={visible} cancelModal={() => cancelModal()} />
              </TouchableOpacity>
           </View>
           {/* Recent location */}
           <TouchableWithoutFeedback style={{flexDirection:'row', marginLeft:20}}>
             <View style={styles.timer}>
             <Ionicons style={{paddingTop:3, paddingLeft:1}}  name="ios-time" color="white" size={18} />
             </View>
             <View style={{marginLeft:20}}>
               <Text style={{fontSize:17, fontWeight:'500'}}> {'Jean Nelson Hall'}
                   <Text style={{fontSize:14, fontWeight:'normal', color:"grey"}}>{'\nAccra'}</Text>
                </Text>
             </View>
           </TouchableWithoutFeedback>
           <TouchableWithoutFeedback style={{flexDirection:'row', marginLeft:20, marginTop:20}}>
             <View style={styles.timer2}>
                <Ionicons style={{paddingTop:3, paddingLeft:1}}  name="ios-time" color="white" size={18} />
              </View>
             <View style={styles.text}>
             <Text style={{fontSize:17, fontWeight:'500'}}>{'Yekondi Bar & Restaurant'}
                 <Text style={{fontSize:14, fontWeight:'normal', color:"grey"}}>{'\nCorner of Mensah Wood Road & Opposit..'}</Text>
               </Text>
             </View>
            
           </TouchableWithoutFeedback>
           
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
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:"center"
      },
      schedule:{
         backgroundColor:'white',
         shadowColor: '#000',
         shadowOpacity: 0.1,
         shadowOffset: { width: 0, height: 1 },
         height:35,
         width:100,
         borderRadius:20,
         justifyContent:'space-evenly',
         alignItems:'center',
         flexDirection:'row'
      },
      timer:{
         backgroundColor:'#c4c4c4',
         width:30,
         height:30,
         borderRadius:15,
         alignItems:'center',
         justifyContent:'center'
      },
      text:{
        borderTopWidth:StyleSheet.hairlineWidth,
        flexDirection:'row',
        paddingVertical:20,
        marginLeft:20,
        borderColor:'grey'
      },
      timer2:{
        backgroundColor:'#c4c4c4',
        width:30,
        height:30,
        borderRadius:15, 
        marginTop:20,
        alignItems:'center',
        justifyContent:'center'
     },

});

export default Interaction;