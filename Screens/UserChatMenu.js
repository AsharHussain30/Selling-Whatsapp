import {View, Text, FlatList, Image, TouchableOpacity, Animated, Dimensions} from 'react-native';
import React, { useContext } from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import { ChatProfileContext } from './UserChatDetail';

const UserChatMenu = ({params}) => {

  const ValueContext = useContext(ChatProfileContext)

  const navigation = useNavigation();
const {height,width} = Dimensions.get("window")    

  return (
    <View
    style={{
      backgroundColor: '#075e55',
      flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignItems: 'center',
        height:60
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons
          name="keyboard-backspace"
          size={25}
          color="white"
          />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { 
    ValueContext.setShowChatProfile(!ValueContext.ShowChatProfile)
        }}>
      <Image
        source={{uri: params.image}}
        style={{
          height: height/14,
          width: height/14,
          resizeMode: 'cover',
          marginLeft: 6,
          marginRight: 5,
          borderRadius: 100,
        }}
      />
      </TouchableOpacity>
          <View>
      <Text
        style={{
          color: 'white',
          fontSize: 16,
          textAlignVertical: 'center',
          paddingLeft: 5,
        }}>
        {params.username}
      </Text>
      <Text
        style={{
          color: 'white',
          fontSize: 10,
          textAlignVertical: 'center',
          paddingLeft: 5,
        }}>
          Online
      </Text>
      </View>
    </View>
  );
};

export default UserChatMenu;
