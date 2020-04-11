import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [ location, setLocation ] = React.useState(null);
  const [ errorMsg, setErromsg] = React.useState(null);

  React.useEffect(() => {
    _getLocation();
  });

  const _getLocation  = async () => {
    let {status} = await Location.requestPermissionsAsync();
    if(status !== "granted"){
      setErromsg('User did not allow location');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location)

  }

  const mapStyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dadada"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#c9c9c9"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    }
  ]

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
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922/2.5,
        longitudeDelta: 0.0421/2.5
      }}
    />
    <View
    style={styles.interaction}>
      <View style={styles.user}>
        <Text style={styles.greeting}>Welcome Fiifi</Text>
      </View>
    </View>
    <View style={styles.menu}>
      <Ionicons style={{marginTop:4}} name="ios-menu" size={27} />
    </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  map:{
    flex: 1,
    paddingTop: Constants.statusBarHeight,

  },
  interaction:{
    height:340,
    backgroundColor:"whitesmoke", 
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
