import { Dimensions, Platform } from 'react-native';

// android
const android = Platform.OS === 'android';

// iPhone X, iPhone XR, iPhone Xs Max, iPhone 11, iPhone 11 pro
const iOS = Platform.OS === 'ios';
const web = Platform.OS === 'web';
const windowInfo = Dimensions.get('window');
const { height, width } = windowInfo;
const aspectRatio = height/width;

// check if platform is iPad
const { isPad } = Platform

let iPhoneX = false;
if(iOS){
    // got iphone screen breakdown from 
    if(height === 812 || width === 812 || (height === 896 || width === 896)){
        iPhoneX = true;
    }
}

export default {
    android,
    aspectRatio,
    height,
    iOS,
    width,
    iPhoneX,
    isPad,
    web,
}