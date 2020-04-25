import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Trips = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Ionicons name="ios-close" color="white" size={32} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Your trips</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
  header: {
    backgroundColor: 'black',
    height: 140,
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 50,
  },
  headerText: {
    color: 'white',
    fontSize: 23,
  },
});

export default Trips;
