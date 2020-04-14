import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import Constants from 'expo-constants';
import * as Location from 'expo-location';

import { Ionicons } from '@expo/vector-icons';

import { mapStyle} from './utils/MapStyle';
import Interaction from './components/Interaction';


export default function Main({navigation}) {
  const [ location, setLocation ] = React.useState({
     region:{
      latitude: -37.813629,
      longitude: 144.963058,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
     }
  });
  const [ errorMsg, setErromsg] = React.useState(null);

  React.useEffect(() => {
    _getLocation();
  });

  // Get Location
  const _getLocation  = async () => {
    let {status} = await Location.requestPermissionsAsync();
    if(status !== "granted"){
      setErromsg('User did not allow location');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    // let location2 = await Location.reverseGeocodeAsync(location.coords);
    // console.log(location2)
    console.log(location)
    setLocation({
      region: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    })

  }


  if(errorMsg !==null){
    return (
      <Text>{errorMsg}</Text>
    )
  }
  return (
    <React.Fragment>
        <MapView style={styles.map}
          customMapStyle={mapStyle}
          provider={MapView.PROVIDER_GOOGLE}
          showsUserLocation
          showsBuildings
          shadowOpacity
          initialRegion={location.region}
           region={location.region}
       
        />
        <Interaction />
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
  }
});
