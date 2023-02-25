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
import React, {createContext, useEffect, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import Calls from './Calls';
import Users from './Users.json';
import Chat from './Chat.json';
import {Menu, Divider, Provider} from 'react-native-paper';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MotiView } from 'moti';
import { ScrollView } from 'react-native-virtualized-view';


const Chats = () => {
  const navigation = useNavigation();

  const {width, height} = Dimensions.get('window');

  useEffect(() => {
    navigation.addListener('focus', () => {
      onRefresh();
    });
  }, []);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const ProfileAnimation = useRef(new Animated.Value(1)).current;

  const [showProfile, setShowProfile] = useState(false);
  const [scrollEnd,setScrollEnd] = useState(false);
  const [SelectedImage, setSelectedImage] = useState('');
  const [SelectedName, setSelectedName] = useState('');

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setShowProfile(false)}
        style={{
          backgroundColor: showProfile ? '#eee' : 'white',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true} >
        <FlatList
          data={Users}
          nestedScrollEnabled={true}
          onScrollEndDrag={() => setScrollEnd(!scrollEnd)}
          contentContainerStyle={{justifyContent: 'flex-start'}}
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
              <>
                <TouchableOpacity
                  onPress={() => navigation.navigate('User', {params: item})}>
                  <View
                    style={{
                      height: 80,
                      top: 10,
                      elevation: 15,
                      width: width,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        setShowProfile(!showProfile);
                        setSelectedImage(item.image);
                        setSelectedName(item.username);
                      }}>
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
                    <View>
                      <Text
                        style={{
                          fontSize: height / 50,
                          color: 'black',
                          fontWeight: '600',
                          alignSelf: 'flex-start',
                          top: 20,
                          left: 9,
                          flex: 1,
                        }}>
                        {item.username}
                      </Text>
                      <Text
                        style={{
                          color: 'gray',
                          flex: 1,
                          left: 10,
                          alignSelf: 'flex-start',
                          top: 2,
                          fontSize: height / 55,
                        }}>
                        {item.lastMsg.substring(0, 16) + '...'}
                      </Text>
                    </View>
                    <View style={{position: 'absolute', right: 0}}>
                      <Text
                        style={{
                          color: 'gray',
                          right: 15,
                          fontSize: height / 60,
                        }}>
                        {item.date}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </>
            );
          }}
        />
        <View style={{flexDirection:"row",flex:1,justifyContent:"center",alignItems:"center",marginTop:10,marginBottom:10,height:60}}>
          <MaterialCommunityIcons name="lock" size={20} color="gray" style={{right:10}}/><Text style={{color:"gray"}}>Personal messages are </Text><Text style={{color:"green"}}>end to end encrypted</Text>
        </View>
        </ScrollView>
        {showProfile == true ? (
          <MotiView
          from={{
            scale:1.4
          }}
            animate={{
              scale:1
            }}
            style={{backgroundColor: 'white', position: 'absolute',elevation:14}}>
            <View
              style={{
                height: 40,
                justifyContent: 'center',
                paddingLeft: 20,
                backgroundColor: '#075e55',
              }}>
              <Text style={{color: 'white'}}>{SelectedName}</Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('FullProfile', {
                  params: SelectedName,
                  SelectedImage,
                })
              }>
              <Image
                source={{uri: SelectedImage}}
                style={{height: height/2.5, width: height/2.5, resizeMode: 'cover'}}
              />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                height: 40,
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="android-messages"
                  size={24}
                  color="green"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="phone-plus"
                  size={24}
                  color="green"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="information-outline"
                  size={24}
                  color="green"
                />
              </TouchableOpacity>
            </View>
          </MotiView>
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

export default Chats;
