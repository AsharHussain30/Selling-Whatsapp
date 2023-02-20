import {
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Text,
  View,
  StatusBar,
  Animated,
  Easing,
  TouchableNativeFeedback,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useEffect} from 'react';
import {useRef} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Chats from './Chats';
import Status from './Status';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Started} from './Started';
import Calling from './Calling';
import {
  MenuOption,
  MenuTrigger,
  MenuProvider,
  MenuOptions,
} from 'react-native-popup-menu';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Menu, Provider, Divider, Button} from 'react-native-paper';
import { GlobalInfo } from '../App';

const CustomHeader = () => {
  const {width, height} = Dimensions.get('window');

  const navigation = useNavigation();
  
  const value = useContext(GlobalInfo)

  
  const openMenu = () => value.setPress(true);
  
  const closeMenu = () => value.setPress(false);



  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#075e55',
          height: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 8,
          width: '100%',
          position: 'absolute',
        }}>
        <Text
          style={{
            fontSize: 20,
            left: 15,
            fontWeight: '800',
            color: 'white',
          }}>
          WhatsApp
        </Text>
        <EvilIcon
          name="search"
          size={24}
          color="white"
          style={{right: 50, top: 19, position: 'absolute'}}
        />
        <Provider>
          <View
            style={{
              justifyContent: 'center',
              height: '100%',
              right: 0,
              position: 'absolute',
            }}>
            <Menu
              visible={value.press}
              anchorPosition="top"
              contentStyle={{right:85,top:-20,backgroundColor:"white"}}
              onDismiss={closeMenu}
              anchor={
                <TouchableOpacity onPress={openMenu}>
                  <MaterialCommunityIcons
                    name="dots-vertical"
                    size={24}
                    color="white"
                  />
                </TouchableOpacity>
              }>
              <Menu.Item onPress={() => {}} title="New Group" style={{}} />
              <Menu.Item onPress={() => {}} title="New BroadCast" style={{}} />
              <Menu.Item onPress={() => {}} title="WhatsApp Web" style={{}} />
              <Menu.Item onPress={() => {}} title="Starred Messages" style={{}} />
              <Menu.Item onPress={() => navigation.navigate("Settings")} title="Settings" style={{}} />
            </Menu>
          </View>
        </Provider>
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});
