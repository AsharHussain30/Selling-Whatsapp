import {
  Dimensions,
  TouchableOpacity,
  Animated,
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import Calls from './Calls';
import Users from './Users.json';
import Chat from './Chat.json';
import {Menu, Divider, Provider} from 'react-native-paper';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Chats = () => {
  const navigation = useNavigation();

  const {width, height} = Dimensions.get('window');

  useEffect(() => {
    onRefresh();
  }, []);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <View
      style={{flex: 1, justifyContent: 'flex-start', backgroundColor: 'white'}}>
      <FlatList
        data={Users}
        style={{top: 10}}
        keyExtractor={item => item.uid}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['green']}
          />
        }
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('User', {params: item})}>
              <View
                style={{
                  height: 80,
                  top: 0,
                  elevation: 15,
                  width: width,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TouchableOpacity onPress={() => {}}>
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
                      marginHorizontal: 10,
                    }}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 14,
                    color: 'black',
                    fontWeight: '600',
                    alignSelf: 'flex-start',
                    top: 20,
                    left: 5,
                    flex: 1,
                  }}>
                  {item.username}
                </Text>
                <Text style={{color: 'gray',right:90,top:40,flex:1,alignSelf:"flex-start",fontSize:12 }}>{item.lastMsg}</Text>
                <Text style={{color: 'gray', right: 15}}>{item.date}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({});
