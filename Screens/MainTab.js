import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Chats from './Chats';
import Status from './Status';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import Calls from './Calls';

const MainTab = () => {

  const Tab = createMaterialTopTabNavigator();

return (
      <Tab.Navigator
        initialRouteName="Chat"
        screenOptions={{
          tabBarContentContainerStyle: {
            marginTop: 57,
          },
          tabBarPressColor: 'transparent',
        }}>
        <Tab.Screen
          name="Camera"
          component={Camera}
          options={{
            tabBarIndicatorStyle: {
              backgroundColor: 'white',
            },
            tabBarActiveTintColor: 'white',
            tabBarShowLabel: false,
            tabBarIcon: () => (
              <View style={{width: 50}}>
                <EvilIcons name="camera" size={30} color="white" />
              </View>
            ),
            tabBarStyle: {backgroundColor: '#075e55'},
          }}
          />
        <Tab.Screen
          name="Chat"
          component={Chats}
          options={{
            tabBarIndicatorStyle: {
              backgroundColor: 'white',
            },
            tabBarActiveTintColor: 'white',
            tabBarStyle: {backgroundColor: '#075e55'},
          }}
          />
        <Tab.Screen
          name="Status"
          component={Status}
          options={{
            tabBarIndicatorStyle: {backgroundColor: 'white'},
            tabBarActiveTintColor: 'white',
            tabBarStyle: {backgroundColor: '#075e55'},
          }}
          />
        <Tab.Screen
          name="Calls"
          component={Calls}
          options={{
            tabBarIndicatorStyle: {backgroundColor: 'white'},
            tabBarActiveTintColor: 'white',
            tabBarStyle: {backgroundColor: '#075e55'},
          }}
          />
      </Tab.Navigator>
  );
};

const Camera = () => {
  const [{cameraRef}, {takePicture}] = useCamera(null);
  
  const [torch, setTorch] = useState(false);
  
  const [flip, setFlip] = useState(false);
  
  const takingPicture = async () => {
    try {
      const data = await takePicture();
      console.log(data.uri);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <RNCamera
    ref={cameraRef}
      type={flip ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back}
      flashMode={
        torch
        ? RNCamera.Constants.FlashMode.torch
        : RNCamera.Constants.FlashMode.off
      }
      style={{
        flex: 1,
        position: 'absolute',
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
      }}>
      <TouchableOpacity
        style={{bottom: 40, left: 30, position: 'absolute'}}
        onPress={() => setTorch(!torch)}>
        {torch ? (
          <MaterialCommunityIcons name="flash" size={40} color="white" />
        ) : (
          <MaterialCommunityIcons name="flash-off" size={40} color="white" />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => takingPicture()}
        style={{alignSelf: 'center'}}>
        <View
          style={{
            backgroundColor: 'transparent',
            borderWidth: 3,
            height: 80,
            width: 80,
            borderRadius: 100,
            alignSelf: 'center',
            elevation: 15,
            borderColor: 'white',
            borderWidth: 2,
            bottom: 35,
          }}>
          <View style={{justifyContent: 'center', flex: 1}}>
            <View
              style={{
                height: 60,
                width: 60,
                backgroundColor: 'white',
                borderRadius: 100,
                alignSelf: 'center',
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{bottom: 40, right: 30, position: 'absolute'}}
        onPress={() => setFlip(!flip)}>
        <MaterialCommunityIcons name="camera-flip" size={44} color="white" />
      </TouchableOpacity>
    </RNCamera>
  );
};

export default MainTab;
