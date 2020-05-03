import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { interpolate } from 'react-native-reanimated';

export default function AnimatedTextPlaceHolder({ isOpenAnimation }) {
    
  const translateX = interpolate(isOpenAnimation, {
    inputRange: [0, 1],
    outputRange: [100, 0],
  });

  const translateY = interpolate(isOpenAnimation, {
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0, -60],
  });

  const opacity = interpolate(translateY, {
    inputRange: [-60, 1],
    outputRange: [1, 0],
  });
  return (
    <Animated.Text
      style={{
        ...styles.placeholder,
        transform: [
          {
            translateY: translateY,
            translateX: translateX,
          },
        ],
        opacity,
      }}>
      Enter your mobile number
    </Animated.Text>
  );
}

const styles = StyleSheet.create({
  placeholder: {
    fontSize: 24,
    position: 'absolute',
  },
});