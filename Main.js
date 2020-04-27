import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import LottieView from 'lottie-react-native';
import * as Loading from './assets/20307-location-pin-loop.json';

import { Ionicons } from '@expo/vector-icons';

import { mapStyle } from './utils/MapStyle';
import Interaction from './components/Interaction';
import Device from './utils/Device';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMap: false,
      userLat: null,
      userLon: null,
    };
  }

  async componentDidMount() {
    // get exisiting locaton permissions first
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.LOCATION
    );
    let finalStatus = existingStatus;

    // ask again to grant locaton permissions (if not already allowed)
    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.LOCATION);
      finalStatus = status;
    }

    // still not allowed to use location?
    if (finalStatus !== 'granted') {
      return;
    }

    const { coords } = await Location.getCurrentPositionAsync();

    this.setState({
      showMap: true,
      userLat: coords.latitude,
      userLon: coords.longitude,
    });
  }

  render() {
    const { navigation } = this.props;
    const { showMap, userLat, userLon } = this.state;

    return (
      <React.Fragment>
        {showMap && (
          <React.Fragment>
            <MapView
              style={styles.map}
              followsUserLocation
              provider={MapView.PROVIDER_GOOGLE}
              region={{
                latitude: userLat,
                longitude: userLon,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
              showsUserLocation
              customMapStyle={mapStyle}
              showsBuildings
              shadowOpacity
              showsPointsOfInterest
            />
            <Interaction navigation={navigation} state={state} />
            <TouchableOpacity
              style={styles.menu}
              onPress={() => navigation.toggleDrawer()}>
              <Ionicons style={{ marginTop: 4 }} name="ios-menu" size={27} />
            </TouchableOpacity>
          </React.Fragment>
        )}

        {!showMap && (
          <View style={styles.containerNoLocation}>
            <LottieView 
              source={Loading}
              autoPlay
              loop
              style={{width:100,height:100}}
            />
            <Text style={styles.textLocationNeeded}>
              {'Getting Location...\nWe need your location data'}
            </Text>
          </View>
        )}
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  containerNoLocation: {
    alignItems: 'center',
    height: Device.height,
    justifyContent: 'center',
    position: 'absolute',
    width: Device.width,
  },
  textLocationNeeded: {
    fontSize: 16,
    marginBottom: 16,
  },
  menu: {
    position: 'absolute',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: 0.1,
    shadowOffset: { width: 0, height: 1 },
    height: 45,
    width: 45,
    left: 20,
    top: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Main;
