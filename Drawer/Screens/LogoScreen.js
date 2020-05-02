import React, { useRef } from "react";
import { StyleSheet, Text, View, Dimensions, Image, Button } from "react-native";
import Logo from "../../components/LogoComponent";
import Animated, {
  useCode,
  cond,
  eq,
  set,
  interpolate,
  SpringUtils
} from "react-native-reanimated";
import { withTimingTransition, onGestureEvent, withSpringTransition } from "react-native-redash";
import { SCREEN_HEIGHT, LOGIN_VIEW_HEIGHT } from "../../utils/Constants";
import { TextInput, TapGestureHandler, State } from "react-native-gesture-handler";
import OverlayBg from "../../components/OverLayBg";


export default function LogoScreen({navigation}) {
  const scale = useRef(new Animated.Value(0));
  const scaleAnimation = withTimingTransition(scale.current);



 const innerLoginY = interpolate(scaleAnimation, {
    inputRange: [0, 1],
    outputRange: [LOGIN_VIEW_HEIGHT, 0],
  });

  const gestureState = useRef(new Animated.Value(State.UNDETERMINED));
  const gestureHandler = onGestureEvent({ state: gestureState.current });

  const isOpen = useRef(new Animated.Value(0));
  const isOpenAnimation = withSpringTransition(isOpen.current,{
    ...SpringUtils.makeDefaultConfig,
    overshootClamping: true,
    damping: new Animated.Value(20),
  });

  const outerLoginY = interpolate(isOpenAnimation, {
    inputRange: [0, 1],
    outputRange: [SCREEN_HEIGHT - LOGIN_VIEW_HEIGHT, LOGIN_VIEW_HEIGHT/2],
  });

  useCode(() =>
    cond(eq(gestureState.current, State.END), [
      cond(eq(isOpen.current, 0), set(isOpen.current, 1)),
    ]),
  );
  useCode(() => cond(eq(scale.current, 0), set(scale.current, 1)), []);

  return (
    <View style={styles.container}>
      <View style={{ ...styles.logoContainer }}>
        <Logo scale={scaleAnimation} />
      </View>
      <Animated.View
        style={{
          backgroundColor: "white",
          ...StyleSheet.absoluteFill,
          transform: [{ translateY: outerLoginY }],
        }}
      >
       <OverlayBg isOpenAnimation={isOpenAnimation} />
        <Animated.View>
          <Animated.View
            style={{
              height: LOGIN_VIEW_HEIGHT,
              backgroundColor: "white",
          
              transform: [{ translateY: innerLoginY }],
            }}
          >
            <Animated.View style={{...styles.heading}}>
              <Text style={{fontSize:24}}>Getting moving with Uber</Text>
            </Animated.View>
           <TapGestureHandler {...gestureHandler}>
             <Animated.View  >
            <Animated.View pointerEvents="none" style={{...styles.textInputContainer}}>
                <Image style={{...styles.image}} source={require('../../assets/flag.png')} />
                  <Text style={{...styles.number}}>+233</Text>
                  <TextInput keyboardType="number-pad" style={{...styles.textInput}} placeholder="Enter your mobile number" />
            </Animated.View>
            <Button title="go" onPress={() => navigation.navigate('Home')} />
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
    backgroundColor: "#2289d6",
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading:{
    alignItems:'flex-start',
    marginHorizontal:25,
    marginTop:50
  },
  image:{
    height:29,
    width:29, 
    resizeMode:'contain'
  },
  number:{
    fontSize:20,
    paddingHorizontal:10
  },
  textInput:{
    flex:1,
    fontSize:20
  },
  textInputContainer:{
    flexDirection:'row',
     margin:25
  }
});