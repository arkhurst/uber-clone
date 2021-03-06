import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import GooglePlacesInput from './GooglePlacesInput';

const Search = props => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Ionicons name="md-arrow-back" size={30} />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.user}>
            <FontAwesome5 name="user-tie" size={15} />
          </View>
          <Text style={{ margin: 4 }}>For Fiifi</Text>
        </View>
      </View>
      <View style={{ marginLeft: 20, marginTop: 20 }}>
        <View
          style={{
            width: 6,
            height: 6,
            backgroundColor: 'grey',
            borderRadius: 5,
          }}
        />
        <View
          style={{
            width: 7,
            height: 7,
            backgroundColor: 'black',
            marginTop: 35,
          }}
        />
      </View>
      {/* Current location */}
      <View style={styles.searchbar}>
        <Text style={{ marginLeft: 10, color: 'blue' }}>Current Location</Text>
      </View>
      {/* Where to */}
      <View style={{ flexDirection: 'row' }}>
        {/* <TextInput placeholder="Where to?" style={styles.textInput} /> */}
        <GooglePlacesInput />
        <TouchableOpacity style={styles.add}>
          <MaterialIcons name="add" size={23} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 20,
          height: 50,
          backgroundColor: 'white',
          shadowColor: '#c4c4c4',
          shadowOpacity: 1,
          shadowOffset: { width: 1, height: -5 },
          shadowRadius: 15,
          justifyContent: 'center',
        }}>
        <View style={styles.savedPlace}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.icon}>
              <Ionicons
                style={{ marginLeft: 1 }}
                color="white"
                name="md-star"
                size={20}
              />
            </View>
            <Text style={{ margin: 6, fontWeight: '500' }}>Saved Places</Text>
          </View>
          <View>
            <Ionicons color="grey" size={23} name="ios-arrow-forward" />
          </View>
        </View>
      </View> 
      {/* Location Items */}
      <View style={styles.locationContainer}>
        <View style={{ flexDirection: 'row', height: 50 }}>
          <View style={styles.icon2}>
            <MaterialIcons
              style={{ marginLeft: 1 }}
              color="white"
              name="location-on"
              size={20}
            />
          </View>
          <Text style={{ margin: 6, marginTop: 10, fontWeight: '500' }}>
            {'Set Location'}
            <Text style={{ fontSize: 12, color: 'grey' }}>{'\nCity'}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  user: {
    height: 21,
    width: 21,
    borderRadius: 15,
    backgroundColor: 'grey',
    marginLeft: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchbar: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    width: 300,
    height: 30,
    margin: 5,
    marginLeft: 55,
    fontSize: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -60,
  },
  textInput: {
    backgroundColor: '#e8e8e8',
    width: 300,
    height: 30,
    margin: 5,
    marginLeft: 55,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  add: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { height: 1, width: 0 },
    shadowOpacity: 0.1,
    width: 25,
    height: 25,
    borderRadius: 15,
    margin: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  savedPlace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    height: 35,
    alignItems: 'center',
  },
  icon: {
    backgroundColor: '#c4c4c4',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 10,
    borderColor: '#c4c4c4',
  },
  icon2: {
    backgroundColor: '#c4c4c4',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
});

export default Search;
