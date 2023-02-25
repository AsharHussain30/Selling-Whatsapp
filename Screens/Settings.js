import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  ScrollView,
  Animated,
  DeviceEventEmitter,
  Dimensions,
  FlatList,
} from 'react-native';
import React, {useRef} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {useState} from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import { MotiView } from 'moti';

const Settings = ({navigation}) => {
  const {height, width} = Dimensions.get('window');

  const Data = [
    {
      item: (
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              left: 34,
              justifyContent: 'flex-start',
            }}>
            <Fontisto name="key" size={height / 23} color="#075e55" />
            <Text
              style={{
                fontSize: heightPercentageToDP('2.6%'),
                color: 'black',
                paddingVertical: 17,
                textAlignVertical: 'center',
                paddingHorizontal: 35,
              }}>
              Account
            </Text>
          </View>
        </TouchableOpacity>
      ),
    },
    {
      item: (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            left: 34,
            justifyContent: 'flex-start',
          }}>
          <MaterialCommunityIcons
            name="android-messages"
            size={height / 23}
            color="#075e55"
          />
          <Text
            style={{
              fontSize: heightPercentageToDP('2.6%'),
              color: 'black',
              paddingVertical: 17,
              textAlignVertical: 'center',
              paddingHorizontal: 35,
            }}>
            Chat
          </Text>
        </View>
      ),
    },
    {
      item: (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            left: 34,
            justifyContent: 'flex-start',
          }}>
          <MaterialCommunityIcons
            name="key"
            size={height / 23}
            color="#075e55"
          />
          <Text
            style={{
              fontSize: heightPercentageToDP('2.6%'),
              color: 'black',
              paddingVertical: 17,
              textAlignVertical: 'center',
              paddingHorizontal: 35,
            }}>
            Notification
          </Text>
        </View>
      ),
    },
    {
      item: (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            left: 34,
            justifyContent: 'flex-start',
          }}>
          <MaterialIcons name="data-usage" size={height / 23} color="#075e55" />
          <Text
            style={{
              fontSize: heightPercentageToDP('2.6%'),
              color: 'black',
              paddingVertical: 17,
              textAlignVertical: 'center',
              paddingHorizontal: 35,
            }}>
            Data Usage
          </Text>
        </View>
      ),
    },
    {
      item: (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            left: 34,
            justifyContent: 'flex-start',
          }}>
          <MaterialCommunityIcons
            name="contacts"
            size={height / 23}
            color="#075e55"
          />
          <Text
            style={{
              fontSize: heightPercentageToDP('2.6%'),
              color: 'black',
              paddingVertical: 17,
              textAlignVertical: 'center',
              paddingHorizontal: 35,
            }}>
            Contacts
          </Text>
        </View>
      ),
    },
    {
      item: (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            left: 34,
            justifyContent: 'flex-start',
          }}>
          <FontAwesome5 name="users" size={height / 28} color="#075e55" />
          <Text
            style={{
              fontSize: heightPercentageToDP('2.6%'),
              color: 'black',
              paddingVertical: 17,
              textAlignVertical: 'center',
              paddingHorizontal: 35,
            }}>
            Invite Friends
          </Text>
        </View>
      ),
    },
    {
      item: (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            left: 34,
            justifyContent: 'flex-start',
          }}>
          <MaterialCommunityIcons
            name="progress-question"
            size={height / 23}
            color="#075e55"
          />
          <Text
            style={{
              fontSize: heightPercentageToDP('2.6%'),
              color: 'black',
              paddingVertical: 17,
              textAlignVertical: 'center',
              paddingHorizontal: 35,
            }}>
            About and Help
          </Text>
        </View>
      ),
    },
    {
      item: (
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              left: 34,
              justifyContent: 'flex-start',
            }}>
            <MaterialCommunityIcons
              name="logout"
              size={height / 23}
              color="#075e55"
            />
            <Text
              style={{
                fontSize: heightPercentageToDP('2.6%'),
                color: 'black',
                paddingVertical: 17,
                textAlignVertical: 'center',
                paddingHorizontal: 35,
              }}>
              LogOut
            </Text>
          </View>
        </TouchableOpacity>
      ),
    },
  ];

const [press,setPress] = useState(false)

  const settingsanimation = useRef(new Animated.Value(1)).current

  return (
    <View style={{flex: 1, backgroundColor: '#128C7E'}}>
      <View
        style={{
          backgroundColor: '#075e55',
          flexDirection: 'row',
          paddingHorizontal: 10,
          paddingVertical: 12,
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            name="keyboard-backspace"
            size={25}
            color="white"
          />
        </TouchableOpacity>
        <Text style={{color: 'white', fontSize: width / 25, left: 15}}>
          Settings
        </Text>
      </View>
      <MotiView
      from={{
        scale:2
      }}
      animate={{
        scale:1
      }}
        style={{
          alignItems: 'center',
          backgroundColor: '#128C7E',
          height: heightPercentageToDP('40%'),
        }}>
        <Image
          source={require('../assets/profile.jpg')}
          style={{
            top: 30,
            height: height / 5,
            width: height / 5,
            resizeMode: 'contain',
            borderRadius: 100,
          }}
        />
        <View>
          <Text
            style={{
              color: '#fff',
              top: 40,
              textAlign: 'center',
              fontSize: height / 30,
            }}>
            Harry Potter
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              top: 50,
              left: 10,
            }}>
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                fontSize: height / 40,
              }}>
              At Work
            </Text>
            <MaterialCommunityIcons
              name="pencil"
              size={height / 30}
              color="white"
            />
          </View>
        </View>
      </MotiView>
      <FlatList
        data={Data}
        showsVerticalScrollIndicator={false}
        style={{
          borderTopLeftRadius: 54,
          borderTopRightRadius: 54,
          backgroundColor: 'white',
          padding: 20,
          paddingVertical:-30
        }}
        renderItem={({item}) => {
          return <View style={{marginVertical:5}}>{item.item}</View>;
        }}
      />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
