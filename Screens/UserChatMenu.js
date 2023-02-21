import {View, Text, FlatList, Image, TouchableOpacity, Animated} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const UserChatMenu = ({params}) => {
  const navigation = useNavigation();
    

  return (
    <View
    style={{
      backgroundColor: '#075e55',
      flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 15,
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons
          name="keyboard-backspace"
          size={25}
          color="white"
          />
      </TouchableOpacity>
      <Image
        source={{uri: params.image}}
        style={{
          height: '150%',
          width: '14%',
          resizeMode: 'cover',
          marginLeft: 6,
          marginRight: 5,
          borderRadius: 100,
        }}
      />
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
