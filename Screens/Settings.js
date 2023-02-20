import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  ScrollView,
  Animated,
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

const Settings = ({navigation}) => {
  const [Scroll, setScroll] = useState(false);

  const ScrollAnimation = useRef(new Animated.Value(1)).current;

  return (
    <View style={{flex: 1}}>
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
        <Text style={{color: 'white', fontSize: 17, left: 15}}>Settings</Text>
      </View>
      <Animated.View
        style={{
          alignItems: 'center',
          backgroundColor: '#128C7E',
          borderBottomLeftRadius: 35,
          borderBottomRightRadius: 35,
          height: 300,
          transform: [{scaleY: ScrollAnimation}],
        }}>
        <Image
          source={require('../assets/profile.jpg')}
          style={{
            top: 30,
            height: '45%',
            width: '32%',
            resizeMode: 'contain',
            borderRadius: 100,
          }}
        />
        <View>
          <Text
            style={{color: '#fff', top: 40, textAlign: 'center', fontSize: 24}}>
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
            <Text style={{color: '#fff', textAlign: 'center', fontSize: 20}}>
              At Work
            </Text>
            <TouchableOpacity onPress={() => {Animated.timing(ScrollAnimation, {
            toValue: Scroll ? -12 : -56,
            useNativeDriver:true,
            duration:400,
          })
          setScroll(!Scroll)}}> 
            <MaterialCommunityIcons name="pencil" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
      <ScrollView
      showsVerticalScrollIndicator={false}
        onMomentumScrollBegin={() =>
         { 
        }
        }>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            left: 34,
            justifyContent: 'flex-start',
          }}>
          <Fontisto name="key" size={24} color="#075e55" />
          <Text
            style={{fontSize: 20,color:"black", paddingVertical: 17, paddingHorizontal: 35}}>
            Account
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            left: 34,
            justifyContent: 'flex-start',
          }}>
          <MaterialCommunityIcons
            name="android-messages"
            size={24}
            color="#075e55"
          />
          <Text
            style={{fontSize: 20,color:"black", paddingVertical: 17, paddingHorizontal: 35}}>
            Chat
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            left: 34,
            justifyContent: 'flex-start',
          }}>
          <MaterialCommunityIcons name="key" size={24} color="#075e55" />
          <Text
            style={{fontSize: 20,color:"black", paddingVertical: 17, paddingHorizontal: 35}}>
            Notification
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            left: 34,
            justifyContent: 'flex-start',
          }}>
          <MaterialIcons name="data-usage" size={24} color="#075e55" />
          <Text
            style={{fontSize: 20,color:"black", paddingVertical: 17, paddingHorizontal: 35}}>
            Data Usage
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            left: 34,
            justifyContent: 'flex-start',
          }}>
          <MaterialCommunityIcons name="contacts" size={24} color="#075e55" />
          <Text
            style={{fontSize: 20,color:"black", paddingVertical: 17, paddingHorizontal: 35}}>
            Contacts
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            left: 34,
            justifyContent: 'flex-start',
          }}>
          <FontAwesome5 name="users" size={20} color="#075e55" />
          <Text
            style={{fontSize: 20,color:"black", paddingVertical: 17, paddingHorizontal: 35}}>
            Invite Friends
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            left: 34,
            justifyContent: 'flex-start',
          }}>
          <MaterialCommunityIcons
            name="progress-question"
            size={24}
            color="#075e55"
          />
          <Text
            style={{fontSize: 20,color:"black", paddingVertical: 17, paddingHorizontal: 35}}>
            About and Help
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            left: 34,
            justifyContent: 'flex-start',
          }}>
          <MaterialCommunityIcons name="logout" size={24} color="#075e55" />
          <Text
            style={{fontSize: 20,color:"black", paddingVertical: 17, paddingHorizontal: 35}}>
            LogOut
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
