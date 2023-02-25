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
import React, {createContext, useContext, useEffect, useState} from 'react';
// import Menu from './Menu';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
import {Provider, Menu} from 'react-native-paper';
import { MotiView } from 'moti';

export const ChatProfileContext = createContext();

const UserChatDetail = ({route, navigation}) => {
  const uid = route.params.params.uid;

  let chatMessages = Chat[0][uid];

  chatMessages = chatMessages.map(m => ({
    ...m,
    createdAt: new Date(m.createdAt),
  }));
  const [messages, setMessages] = useState(chatMessages);

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
      <InputToolbar
        containerStyle={{
          marginHorizontal: 10,
          borderRadius: 50,
          backgroundColor: 'white',
          marginVertical: 10,
          elevation: 14,
          width: '80%',
        }}
        {...props}
      />
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

  const [press, setPress] = useState(false);

  const [ShowChatProfile, setShowChatProfile] = useState(false);

  const openMenu = () => setPress(true);

  const closeMenu = () => setPress(false);

  const {height, width} = Dimensions.get('window');

  const SelectedImage = route.params.params.image;



  return (
    <ChatProfileContext.Provider value={{setShowChatProfile,ShowChatProfile}}>
    <View style={{flex: 1, height: height, width: width}}>
      <TouchableOpacity activeOpacity={1} onPress={() => setShowChatProfile(false)} style={{flex:1}}>

      <UserChatMenu params={route.params.params}/>

      <ImageBackground
        source={require('../assets/chatBG.jpg')}
        style={{resizeMode: 'contain', flex: 1}}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 3,
          }}>
          <Provider>
            <View
              style={{
                justifyContent: 'flex-start',
                height: '85%',
                right: 10,
                position: 'absolute',
              }}>
              <Menu
                visible={press}
                anchorPosition="top"
                contentStyle={{
                  backgroundColor: 'white',
                  top: -120,
                  left: 10,
                }}
                onDismiss={closeMenu}
                anchor={
                  <TouchableOpacity onPress={openMenu} style={{top: -42}}>
                    <MaterialCommunityIcons
                      name="dots-vertical"
                      size={width / 18}
                      color="white"
                    />
                  </TouchableOpacity>
                }>
                <Menu.Item onPress={() => {}} title="View contact" style={{}} />
                <Menu.Item onPress={() => {}} title="Label Chat" style={{}} />
                <Menu.Item
                  onPress={() => {}}
                  title="Media, links, and docs"
                  style={{}}
                />
                <Menu.Item
                  onPress={() => {}}
                  title="Mute Notification"
                  style={{}}
                />
                <Menu.Item
                  onPress={() => {}}
                  title="Disappearing messages"
                  style={{}}
                />
                <Menu.Item onPress={() => {}} title="Wallpaper" style={{}} />
                <Menu.Item onPress={() => {}} title="More" style={{}} />
              </Menu>
            </View>
          </Provider>
        </View>

        <View style={{flex: 1, zIndex: press ? 1 : 3}}>
        {ShowChatProfile == true ? (
          <MotiView
          from={{
            scale:1.4
          }}
            animate={{
              scale:1
            }}
            style={{backgroundColor: 'white', position: 'absolute',borderRadius:20,zIndex:4,left:height/14,right:height/14,top:height/6}}>
            <View
              style={{
                height: 40,
                justifyContent: 'center',
                paddingLeft: 20,
                borderTopLeftRadius:20,
                borderTopRightRadius:20,
                backgroundColor: '#075e55',
              }}>
              <Text style={{color: 'white'}}>{route.params.params.username}</Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('FullProfile', {
                  params: route.params.params.username,
                  SelectedImage,
                })
              }>
              <Image
                source={{uri: SelectedImage}}
                style={{height: height/2.5, width: "100%", resizeMode: 'cover'}}
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
            renderSend={props => {
              return (
                <View
                  style={{
                    position: 'absolute',
                    right: -60,
                    top: 2,
                  }}>
                  <Send {...props} containerStyle={{}} alwaysShowSend={true}>
                    <View
                      style={{
                        backgroundColor: '#075e55',
                        borderRadius: 100,
                        height: 50,
                        width: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <MaterialCommunityIcons
                        name="send"
                        size={20}
                        color="white"
                      />
                    </View>
                  </Send>
                </View>
              );
            }}
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
              _id: 'MyId',
            }}
          />
        </View>
      </ImageBackground>
      </TouchableOpacity>
    </View>
    </ChatProfileContext.Provider>
  );
};

export default UserChatDetail;