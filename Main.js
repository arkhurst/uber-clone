import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import { Ionicons } from '@expo/vector-icons';

import { mapStyle} from './utils/MapStyle';
import Interaction from './components/Interaction';
import Device from './utils/Device';


export default function Main({navigation}) {
  const [showMap, setShowMap] = useState(false);
  const [ userLat, setUserLat ] = useState(null);
  const [ userLon, setUserLon ] = useState(null);


  React.useEffect(() => {
    _getLocation();
  });

  // Get Location
  const _getLocation  = async () => {
    let { status: existingStatus } = await Permissions.getAsync(
      Permissions.LOCATION
    )
    let finalStatus = existingStatus;

    // ask user for permission again if it is not granted
    if(existingStatus !== 'granted'){
      const { status } = await Permissions.askAsync(Permissions.LOCATION);
      finalStatus = status;
    }

    // user still doesn't allow permission?
    if(finalStatus !== 'granted'){
      return;
    }
 

    const { coords } = await Location.getCurrentPositionAsync();
  
    setShowMap(true)
    setUserLat(coords.latitude)
    setUserLon(coords.longitude)

  }

 if(!showMap){
   <View style={styles.NoLocationContainer}>
      <Text style={styles.textLocationNeeded}>
        We need your location data ...
      </Text>
   </View>
 } 
  return (
    <React.Fragment>
        <MapView style={styles.map}
          customMapStyle={mapStyle}
          followsUserLocation
          provider={MapView.PROVIDER_GOOGLE}
          showsUserLocation
          showsBuildings
          shadowOpacity
          showsPointsOfInterest
          region={{
            latitude:userLat,
            longitude:userLon,
            latitudeDelta:0.01,
            longitudeDelta:0.01
          }}
       
        />
        <Interaction navigation={navigation} />
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menu}>
          <Ionicons style={{marginTop:4}} name="ios-menu" size={27} />
        </TouchableOpacity>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  map:{
    flex: 1,
    paddingTop: Constants.statusBarHeight,

  },
  menu:{
    position:'absolute',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    height:45,
    width:45,
    left:20,
    top:50,
    borderRadius:25,
    justifyContent:'center',
    alignItems:'center'
  },
  NoLocationContainer:{
    justifyContent:'center',
    alignItems:'center',
    height: Device.height,
    width: Device.width,
    position:'absolute'
  },
  textLocationNeeded:{
    fontSize:16,
    marginBottom:16
  }
});
