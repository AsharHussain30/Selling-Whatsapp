import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const {height, width} = Dimensions.get('window');

const Calling = ({route}) => {
  const [MicIcon, setMicIcon] = useState(false);
  const [SoundIcon, setSoundIcon] = useState(false);

const navigation = useNavigation()

  return (
    <View style={{flex: 1,backgroundColor:"white"}}>
      <Image
        source={{uri: route.params.params.image}}
        style={{
          height: height / 1.4,
          resizeMode: 'cover',
          width: width,
          marginBottom: -55,
        }}
      />
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          borderTopLeftRadius: 45,
          borderTopRightRadius: 45,
          bottom:height/30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 10,
            right: 15,
          }}>
          <Image
            source={require('../assets/ic_launcher.png')}
            style={{resizeMode: 'contain', height: 30}}
          />
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: 11,
              fontWeight: '600',
              right: 10,
            }}>
            WhatsApp Calling
          </Text>
        </View>
        <Text
          style={{
            textAlign: 'center',
            color: 'black',
            fontSize: height / 30,
            paddingTop: height /50,
            fontWeight: '600',
          }}>
          {route.params.params.username}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: 'black',
            fontSize: 15,
            paddingTop: 5,
            fontWeight: '600',
          }}>
          {route.params.params.number}
        </Text>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'flex-end',
            paddingBottom: height /30,
            
          }}>
          <TouchableOpacity onPress={() => setMicIcon(!MicIcon)}>
            {MicIcon ? (
              <Feather
                name="mic-off"
                size={25}
                color="white"
                style={{
                  backgroundColor: '#054d44',
                  padding: height / 42,
                  borderRadius: 34,
                }}
              />
            ) : (
              <Feather
                name="mic"
                size={25}
                color="white"
                style={{
                  backgroundColor: '#054d44',
                  padding: height / 42,
                  borderRadius: 34,
                }}
              />
            )}
          </TouchableOpacity>

<TouchableOpacity onPress={() => setSoundIcon(!SoundIcon)}>
{
  SoundIcon ?
          <IonIcons
            name="volume-mute"
            size={25}
            color="white"
            style={{backgroundColor: '#054d44', padding: height / 40, borderRadius: 34}}
          />
          :
          <IonIcons
            name="volume-high"
            size={25}
            color="white"
            style={{backgroundColor: '#054d44', padding: height / 40, borderRadius: 34}}
          />
}
</TouchableOpacity>


<TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather
            name="phone-off"
            size={25}
            color="white"
            style={{backgroundColor: '#054d44', padding: height / 40, borderRadius: 34}}
          />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Calling;
