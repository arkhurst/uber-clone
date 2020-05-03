import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Animated, { interpolate } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { TapGestureHandler } from 'react-native-gesture-handler';

export default function HeaderBack({ isOpenAnimation, gestureHandler }) {

  const opacity = interpolate(isOpenAnimation, {
    inputRange: [0, 0.7, 1],
    outputRange: [0, 0, 1],
  });
  
  return (
    <TapGestureHandler {...gestureHandler}>
      <Animated.View style={{ ...styles.backArrow, opacity }}>
        <Ionicons name="md-arrow-back" size={24} />
      </Animated.View>
    </TapGestureHandler>
  );
}
const styles = StyleSheet.create({
  backArrow: {
    position: 'absolute',
    height: 60,
    width: 60,
    top: 60,
    left: 25,
    zIndex: 100,
  },
});
