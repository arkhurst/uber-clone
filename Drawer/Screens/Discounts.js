import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

const Discounts = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Ionicons name="ios-close" color="white" size={32} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Get discounts</Text>
      </View>
      <View
        style={{ paddingHorizontal: 25, paddingVertical: 40, fontSize: 32 }}>
        <Text style={{ fontSize: 32 }}>{'Want more Uber\nfor less?'}</Text>
        <Text style={styles.mainText}>
          {
            'Get free ride for free up to GHS10 when\nyou refer a friend to try uber'
          }
        </Text>
        <TouchableOpacity>
          <Text style={{ color: 'blue' }}>How invitation works</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <View
          style={{
            height: 150,
            width: 150,
            borderRadius: 80,
            backgroundColor: '#e3e3e3',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: 110,
              height: 110,
              borderBottomLeftRadius: 25,
              borderBottomRightRadius: 25,
            }}
            source={require('../../assets/couple.png')}
          />
        </View>
      </View>
      <View style={{ paddingTop: 160, paddingHorizontal: 25 }}>
        <Text style={{ color: 'grey' }}>Share Your Invite Code</Text>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 10,
            alignItems: 'center',
            height: 50,
            borderWidth: 1,
            borderColor: 'grey',
            marginTop: 10,
            justifyContent: 'space-between',
          }}>
          <Text>GGG828</Text>
          <Feather name="share" size={24} />
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            paddingHorizontal: 10,
            alignItems: 'center',
            height: 50,
            backgroundColor: 'black',
            marginTop: 10,
            justifyContent: 'center',
          }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>
            Invite friends
          </Text>
        </TouchableOpacity>
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
  mainText: {
    marginTop: 20,
    fontWeight: '500',
    marginBottom: 20,
    color: 'grey',
    fontSize: 15,
  },
});

export default Discounts;
