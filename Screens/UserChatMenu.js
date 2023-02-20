import {View, Text, FlatList, Image, TouchableOpacity, Animated} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import { useRef } from 'react';

const UserChatMenu = ({params,setPress}) => {
  const navigation = useNavigation();
  
  const HomeMenuDrawerAnimation = useRef(new Animated.Value(0)).current;
  
  const [showMenu, setShowMenu] = useState(false)

  const MenuAnimation = () => {
    Animated.timing(HomeMenuDrawerAnimation, {
      toValue: showMenu ? 0 : 960,
      duration: 500,
      useNativeDriver: true,
    }).start();
    setShowMenu(!showMenu)
  }
  
  const pressFunc = () => {
    setShowMenu(!showMenu)    
    setPress(showMenu)
  }

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
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={() => pressFunc()}>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={25}
            color="white"
            style={{alignSelf: 'flex-end'}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserChatMenu;
