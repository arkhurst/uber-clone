import React, { useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Button,
  Keyboard,
} from 'react-native';
import Logo from '../../components/LogoComponent';
import Animated, {
  useCode,
  cond,
  eq,
  set,
  interpolate,
  SpringUtils,
  call,
  Easing
} from 'react-native-reanimated';
import {
  withTimingTransition,
  onGestureEvent,
  withSpringTransition,
  delay,
} from 'react-native-redash';
import { SCREEN_HEIGHT, LOGIN_VIEW_HEIGHT } from '../../utils/Constants';
import {
  TextInput,
  TapGestureHandler,
  State,
} from 'react-native-gesture-handler';
import OverlayBg from '../../components/OverLayBg';
import HeaderBack from '../../components/HeaderBack';
import AnimatedTextPlaceHolder from '../../components/AnimatedTextInput';
import ForwardArrow from '../../components/ForwardArrow';

export default function LogoScreen({ navigation }) {

  const scale = useRef(new Animated.Value(0));
  const scaleAnimation = withTimingTransition(scale.current);
  const textInputRef = useRef(null);

  const keyboardHeight = new Animated.Value(0)

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', keyboardDidShow)
    Keyboard.addListener('keyboardDidHide', keyboardDidHide)

    return function clear(){
      Keyboard.removeListener('keyboardDidShow')
      Keyboard.removeListener('keyboardDidHide')
    }
  })

  const innerLoginY = interpolate(scaleAnimation, {
    inputRange: [0, 1],
    outputRange: [LOGIN_VIEW_HEIGHT, 0],
  });

  const gestureState = useRef(new Animated.Value(State.UNDETERMINED));
  const gestureHandler = onGestureEvent({ state: gestureState.current });

  const backArrowGestureState = useRef(new Animated.Value(State.UNDETERMINED));
  const backArrowGestureHandler = onGestureEvent({
    state: backArrowGestureState.current,
  });



  const isOpen = useRef(new Animated.Value(0));
  const isOpenAnimation = withSpringTransition(isOpen.current, {
    ...SpringUtils.makeDefaultConfig,
    overshootClamping: true,
    damping: new Animated.Value(20),
  });

  const outerLoginY = interpolate(isOpenAnimation, {
    inputRange: [0, 1],
    outputRange: [SCREEN_HEIGHT - LOGIN_VIEW_HEIGHT, LOGIN_VIEW_HEIGHT / 2],
  });

  const headerOpacity = interpolate(isOpenAnimation, {
    inputRange: [0, 1],
    outputRange: [1, 0],
  });
 
  
  // Javascript thread
  const focusTextInput = () => {
    // focus the textInput
    textInputRef.current.focus()
  }

  const blurTextInput = () => {
    textInputRef.current.blur()
  }

  const keyboardDidShow = (e) =>{
    let toValue = - e.endCoordinates.height

    Animated.timing(keyboardHeight, {
      toValue,
      duration:250,
      easing:Easing.linear,
      useNativeDriver:true
    }).start()
  }
  const keyboardDidHide = () => {
    Animated.timing(keyboardHeight, {
      toValue:0,
      duration:250,
      easing:Easing.linear,
      useNativeDriver:true
    }).start()
  }

  // native UI thread
  useCode(() =>
     ([cond(
       eq(gestureState.current, State.END),
        [
          cond(eq(isOpen.current, 0),[
            set(isOpen.current, 1), 
            ]), 
            cond(eq(isOpen.current,1), delay(call([],focusTextInput),750))  
         ]
      )]),[gestureState.current]
      
  );

  useCode(() => cond(eq(scale.current, 0), set(scale.current, 1)), []);

  useCode(() =>
      cond(eq(backArrowGestureState.current, State.END), [
        set(gestureState.current, State.UNDETERMINED),
        call([], blurTextInput),
        delay(set(isOpen.current, 0), 250),
      ]), [backArrowGestureState.current]);
      
  return (
    <View style={styles.container}>
      <View style={{ ...styles.logoContainer }}>
        <Logo scale={scaleAnimation} />
      </View>
      <HeaderBack
        isOpenAnimation={isOpenAnimation}
        gestureHandler={{ ...backArrowGestureHandler }}
      />
      <Animated.View
        style={{
          backgroundColor: 'white',
          ...StyleSheet.absoluteFill,
          transform: [{ translateY: outerLoginY }],
        }}>
        <OverlayBg isOpenAnimation={isOpenAnimation} />
        <ForwardArrow navigation={navigation} keyboardHeight={keyboardHeight} />
        <Animated.View>
          <Animated.View
            style={{
              height: LOGIN_VIEW_HEIGHT,
              backgroundColor: 'white',

              transform: [{ translateY: innerLoginY }],
            }}>
            <Animated.View
              style={{ ...styles.heading, opacity: headerOpacity }}>
              <Text style={{ fontSize: 24 }}>Getting moving with Uber</Text>
            </Animated.View>
            <TapGestureHandler {...gestureHandler}>
              <Animated.View>
                <Animated.View
                  pointerEvents="none"
                  style={{ ...styles.textInputContainer }}>
                  <AnimatedTextPlaceHolder isOpenAnimation={isOpenAnimation} />
                  <Image
                    style={{ ...styles.image }}
                    source={require('../../assets/flag.png')}
                  />
                  <Text style={{ ...styles.number }}>+233</Text>
                  <TextInput
                    ref={textInputRef}
                    keyboardType="number-pad"
                    style={{ ...styles.textInput }}
                    placeholder="Enter your mobile number"
                  />
                </Animated.View>
      
              </Animated.View>
            </TapGestureHandler>
          </Animated.View>
        </Animated.View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2289d6',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    alignItems: 'flex-start',
    marginHorizontal: 25,
    marginTop: 50,
  },
  image: {
    height: 29,
    width: 29,
    resizeMode: 'contain',
  },
  number: {
    fontSize: 20,
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 20,
  },
  textInputContainer: {
    flexDirection: 'row',
    margin: 25,
  },
});