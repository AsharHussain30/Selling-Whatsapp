import {
  StatusBar,
  Pressable,
} from 'react-native';
import React, {createContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Status from './Screens/Status';
import Chats from './Screens/Chats';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import UserChatDetail from './Screens/UserChatDetail';
import ImagePicker from './Screens/ImagePicker';
import AuthSplash from './Screens/AuthNavigation/AuthSplash';
import UserStatuses from './Screens/UserStatuses';
import StatusEditScreen from './Screens/StatusEditScreen';
import MyStatuses from './Screens/MyStatuses';
import UserChatMenu from './Screens/UserChatMenu';
import Settings from './Screens/Settings';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import {Value} from 'react-native-reanimated';
import { Started } from './Screens/Started';
import TabBar from './Screens/MainTab';
import MainTab from './Screens/MainTab';
import Calling from './Screens/Calling';
import { Provider,Menu } from 'react-native-paper';
import CustomHeader from './Screens/Menu';

const Stack = createNativeStackNavigator();

const App = () => {

  const [press, setPress] = useState(false);
  

  return (
    <Pressable activeOpacity={1} onPress={() => setPress(false)} style={{flex:1}}>
    <GlobalInfo.Provider value={{press,setPress}}>
    <NavigationContainer>
      <StatusBar backgroundColor="#054d44" />
      <Stack.Navigator>
        <Stack.Screen
          name="AuthSplash"
          component={AuthSplash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={Started}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Calling"
          component={Calling}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StatusEdit"
          component={StatusEditScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainTab"
          component={MainTab}
          options={{header:() => <CustomHeader props={setPress}/>}}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ImagePicker"
          component={ImagePicker}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="User"
          component={UserChatDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserStatuses"
          component={UserStatuses}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyStatuses"
          component={MyStatuses}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </GlobalInfo.Provider>
    </Pressable>

  );
};


export const GlobalInfo = createContext();


export default App;
