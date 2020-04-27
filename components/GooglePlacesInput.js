import React, { useState } from 'react';
import {  Platform } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GooglePlacesInput = () => {

    const [ searchFocused, setSearchFocused ] = useState(false);

    const _onFocus = () => {
        setSearchFocused(true)
    }

    const _onBlur = () => {
        setSearchFocused(false)
    }
    return(
        <GooglePlacesAutocomplete 
           placeholder='Search'
           placeholderTextColor='#333'
           onPress={}
           query={{
               key:'AIzaSyBRky06qi2swaZZAvrBmABYMpwct34widQ',
               language:'en',
               type:'(cities)'
           }}
           textInputProps={{
               onFocus: _onFocus,
               onBlur: _onBlur,
               autoCapitalize:'none',
               autoCorrect:false
           }}
           listViewDisplayed={searchFocused}
           fetchDetails
           enablePoweredByContainer={false}
           currentLocation={true}
           currentLocationLabel="Current location"
           nearbyPlacesAPI='GooglePlacesSearch'
           styles={{
            container:{
                position: 'absolute',
                top: Platform.select({ ios: 60, android: 40}),
                width:'100%'
            },
            textInputContainer:{
                flex:1,
                backgroundColor:'transparent',
                height:54,
                marginHorizontal:20,
                borderTopWidth:0,
                borderBottomWidth:0
            },
            textInput:{
                height:54,
                paddingLeft:20,
                paddingRight:20,
                elevation:5,
                shadowColor:'#000',
                shadowOpacity:0.1,
                shadowRadius:15,
                borderWidth:1,
                borderColor:'#ddd',
                fontSize:18
            },
            listView:{
                borderWidth:1,
                borderColor:'#ddd',
                backgroundColor:'#fff',
                marginHorizontal:20,
                shadowOpacity:0.1,
                shadowRadius:15,
            },
            description:{
                fontSize:16
            },
            row:{
                padding:20,
                height:58
            }
           }}
        />
    );
};


export default GooglePlacesInput;