import {
  Alert,
  Dimensions,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
// import Menu from './Menu';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FlatList} from 'react-native-gesture-handler';
import {
  Bubble,
  Day,
  GiftedChat,
  InputToolbar,
  Send,
  Time,
} from 'react-native-gifted-chat';
import UserChatMenu from './UserChatMenu';
import Chat from './Chat.json';
import Users from "./Users.json" 





const UserChatDetail = ({route, navigation}) => {

const uid = route.params.params.uid


let chatMessages = Chat[0][uid];
chatMessages = chatMessages.map(m => ({...m, createdAt: new Date(m.createdAt)}))
const [messages, setMessages] = useState(chatMessages);
  const [users, setUsers] = useState();
  
  const onSend = messages => {
    const msg = messages[0];
    
    const myMsg = {
      ...msg,
      senderId: 'MyId',
      receiverId: 'ReceiverID',
    };
    
    setMessages(previousMessages => GiftedChat.append(previousMessages, myMsg));
  };
  
  function renderInputToolbar(props) {
    return (
      <View style={{flex: 1, bottom: 3}}>
        <InputToolbar
          containerStyle={{
            marginHorizontal: 10,
            borderRadius: 50,
            backgroundColor: 'white',
            marginVertical: 6,
          }}
          {...props}
          />
      </View>
    );
  }

  function renderDay(props) {
    return (
      <Day
      {...props}
      textStyle={{
        color: '#647279',
        backgroundColor: '#d4eaf5',
        padding: 5,
        borderRadius: 5,
      }}
      />
      );
    }
    
    const [press, setPress] = useState();
    
    const Menu = () => {
      return (
      <View
      style={{
          backgroundColor: 'white',
          padding: 20,
          borderTopLeftRadius: 25,
          borderBottomLeftRadius: 25,
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 0,
          width: '30%',
          alignSelf: 'flex-end',
          borderWidth: 0.4,
          position: 'absolute',
          top: 0,
        }}>
        <Text style={{paddingVertical: 10}}>. Menu</Text>
        <Text style={{paddingVertical: 10}}>. Menu</Text>
        <Text style={{paddingVertical: 10}}>. Menu</Text>
      </View>
    );
  };
  
  
  useEffect(() => {
  },[])
  
  const {height, width} = Dimensions.get('window');
  return (
    <View style={{flex: 1}}>
      <StatusBar hidden />

      <UserChatMenu params={route.params.params} setPress={setPress} />

      <ImageBackground
        source={require('../assets/chatBG.jpg')}
        style={{height: height, width: width, resizeMode: 'contain', flex: 1}}>
        {press != false ? null : <Menu />}
        <View style={{flex: 1}}>
          <GiftedChat
            timeTextStyle={{
              right: {color: '#8aa275'},
              left: {color: '#a9a9a9'},
            }}
            scrollToBottom
            alignTop={true}
            renderDay={renderDay}
            renderBubble={props => {
              return (
                  <Bubble
                    {...props}
                    wrapperStyle={{
                      right: {
                        backgroundColor: '#e2ffc7',
                        shadowColor: 'black',
                        bottom: 5,
                        elevation: 5,
                        marginVertical: 6,
                      },
                      left: {
                        backgroundColor: '#ffffff',
                        marginLeft: -30,
                        elevation: 5,
                        marginVertical: 6,
                      },
                    }}
                    textStyle={{
                      left: {color: 'black'},
                      right: {color: 'black'},
                    }}
                  />
              );
            }}
            renderInputToolbar={renderInputToolbar}
            renderSend={(props) => {
              return (
                <Send {...props}>
                  <View style={{}}>
                    <Text
                      style={{
                        textAlignVertical: 'center',
                        backgroundColor: '#075e55',
                        padding: 10,
                        borderRadius: 34,
                      }}>
                      <MaterialCommunityIcons
                        name="send"
                        size={20}
                        color="white"
                      />
                    </Text>
                  </View>
                </Send>
              );
            }}
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
              _id: 'MyId',
              received:true
            }}
          />
        </View>
        {/* <View
          style={{
            justifyContent: 'flex-end',
            backgroundColor: 'white',
            height: 50,
            width: height / 2.2,
            position: 'absolute',
            marginHorizontal: 5,
            marginVertical: 10,
            bottom: 0,
            borderRadius: 25,
          }}>
          <TextInput
            placeholder="Type a message"
            placeholderTextColor="silver"
            value={message}
            onChangeText={e => setMessage(e)}
            style={{marginLeft: 10}}
          />
        </View>
        <TouchableOpacity
          onPress={() => send()}
          style={{
            justifyContent: 'flex-end',
            alignItems: 'center',
            position: 'absolute',
            bottom: 0,
            right: 0,
            backgroundColor: '#075e55',
            padding: 15,
            margin: 10,
            borderRadius: 100,
          }}>
          <Image
            source={require('../Assets/Post.png')}
            style={{
              width: 20,
              height: 20,
              resizeMode: 'cover',
              marginVertical: 0,
              marginRight: 0,
              alignSelf: 'center',
            }}
          />
        </TouchableOpacity> */}
      </ImageBackground>
    </View>
  );
};

export default UserChatDetail;

const styles = StyleSheet.create({});
