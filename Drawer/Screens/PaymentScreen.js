import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
} from '@expo/vector-icons';

const SettingScreen = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Ionicons name="ios-close" color="white" size={32} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Payment</Text>
      </View>
      <Text style={styles.mainText}>Payment Methods</Text>
      {/* Payment Options container */}
      <View style={styles.paymentContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <MaterialCommunityIcons color="#00a022" name="cash" size={35} />
          <Text style={{ marginLeft: 15, marginBottom: 3, fontSize: 16 }}>
            Cash
          </Text>
        </View>
        <Ionicons color="grey" size={23} name="ios-arrow-forward" />
      </View>
      <View style={styles.paymentContainer2}>
        <Text style={{ color: 'blue' }}>Add payment method</Text>
      </View>
      <Text style={styles.mainText}>Trip Profiles</Text>
      {/* Trip Profiles container */}
      <View style={styles.profileContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={styles.iconContainer}>
            <FontAwesome5 solid name="user" size={13} color="white" />
          </View>
          <Text style={{ marginLeft: 15, fontSize: 16, fontWeight: '500' }}>
            Personal
          </Text>
        </View>
        <Ionicons color="grey" size={23} name="ios-arrow-forward" />
      </View>
      <View style={styles.profileContainer2}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={styles.iconContainer2}>
            <MaterialIcons name="work" size={14} color="white" />
          </View>
          <Text style={{ marginLeft: 15, fontSize: 16, fontWeight: '500' }}>
            {'Ride for business'}
            <Text style={{ fontWeight: 'normal', fontSize: 13, color: 'grey' }}>
              {'\nEnable business for featured travel'}
            </Text>
          </Text>
        </View>
        <Ionicons color="grey" size={23} name="ios-arrow-forward" />
      </View>
      <Text style={styles.mainText}>Credit</Text>
      {/* Main text container */}
      <View style={styles.paymentContainer2}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={styles.uberCash}>
            <Text style={{ color: 'white', fontSize: 13 }}>Uber</Text>
          </View>
          <Text style={{ marginLeft: 15, marginBottom: 13, fontSize: 15 }}>
            Uber Cash
          </Text>
        </View>
        <Ionicons color="grey" size={23} name="ios-arrow-forward" />
      </View>
      <Text style={styles.mainText}>Promotions</Text>
      {/* Promotions container */}
      <View style={styles.paymentContainer2}>
        <Text style={{ color: 'blue' }}>Add promo code</Text>
      </View>
      <Text style={styles.mainText}>Vouchers</Text>
      {/* Vouchers container */}
      <View style={styles.paymentContainer2}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={styles.uberCash}>
            <MaterialCommunityIcons
              name="ticket-confirmation"
              color="white"
              size={16}
            />
          </View>
          <Text style={{ marginLeft: 15 }}>Vouchers</Text>
        </View>
        <Ionicons color="grey" size={23} name="ios-arrow-forward" />
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
    margin: 20,
    color: 'grey',
    marginBottom: 15,
    fontSize: 17,
    marginTop: 34,
  },
  paymentContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 50,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#c4c4c4',
    alignItems: 'center',
  },
  paymentContainer2: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 50,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#c4c4c4',
    alignItems: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 65,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#c4c4c4',
    alignItems: 'center',
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 20,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer2: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 65,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#c4c4c4',
    alignItems: 'center',
  },
  iconContainer2: {
    width: 32,
    height: 32,
    borderRadius: 20,
    backgroundColor: '#c4c4c4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uberCash: {
    backgroundColor: 'black',
    width: 35,
    height: 22,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default SettingScreen;
