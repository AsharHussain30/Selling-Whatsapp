import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Users from './Users.json';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {width, height} = Dimensions.get('window');

const Calls = () => {
  const navigation = useNavigation();

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <FlatList
        data={Users}
        style={{
          top: 10,
        }}
        renderItem={({item,index}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Calling', {params: item})}>
              <View
                style={{
                  height: 80,
                  top: 0,
                  elevation: 15,
                  width: width,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TouchableOpacity>
                  <Image
                    source={{
                      uri: item.image
                        ? item.image
                        : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi0ToKk_pNdClvoT5zslZZ6iQV_xOVIktrsuYUt1FRunsvtjpXmW9lnTWzD8N1t2KLLnw&usqp=CAU',
                    }}
                    style={{
                      height: 57,
                      width: 57,
                      borderRadius: 100,
                      marginHorizontal: 18,
                    }}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 14,
                    color: 'black',
                    fontWeight: '600',
                    alignSelf: 'flex-start',
                    flex: 1,
                    top: 20,
                  }}>
                  {item.username}
                </Text>
                <View style={{flexDirection:"row",flex:1,alignItems:"center",position:"absolute",top:43,left:90}}>
                <MaterialCommunityIcons
                  name={index == 1 || index == 4  ? "arrow-bottom-right" : "arrow-top-left"}
                  size={17}
                  color={index == 1 || index == 4  ? "red" : "green"}
                />
                <Text
                  style={{
                    left:7,
                    color:"#454545",
                    fontWeight:"400"
                  }}>
                  {item.date}
                </Text>
                </View>
                <Text
                  style={{
                    textAlign: 'right',
                    right: 10,
                    padding: 12,
                    borderRadius: 20,
                  }}>
                  <MaterialCommunityIcons
                    name="phone"
                    color="green"
                    size={22}
                  />
                </Text>
            
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Calls;
