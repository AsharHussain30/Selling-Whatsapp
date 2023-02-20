import {
  Button,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  TextInput,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {StackActions, useNavigation} from '@react-navigation/native';
import {App} from '../../App';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MainTab from './MainTab';
import {
  CustomPasswordInput,
  CustomTextInput,
} from './AuthNavigation/CustomTextInput';
import {CustomButtons} from './AuthNavigation/CustomButtons';

const {height, width} = Dimensions.get('window');
const Data = [
  {
    // image: (
    // ),
  },
  {
    // image: (
    // ),
  },
];

export const Started = () => {
  const [showHomePage, setShowHomePage] = useState(true);
  const [UserName, setUserName] = useState("");
  
  const [Number, setNumber] = useState("");
  
  
  const [VerifyInput1, setVerifyInput1] = useState("");
  const [VerifyInput2, setVerifyInput2] = useState("");
  const [VerifyInput3, setVerifyInput3] = useState("");
  const [VerifyInput4, setVerifyInput4] = useState("");


  const InputRef1 = useRef(null)
  const InputRef2 = useRef(null)
  const InputRef3 = useRef(null)
  const InputRef4 = useRef(null)



  const {width, height} = Dimensions.get('window');
  const navigation = useNavigation();

  return (
    <View style={{paddingTop: 10, backgroundColor: '#054d44', flex: 1}}>
      <StatusBar hidden />

      {/* Sign In */}

      <View style={{backgroundColor: '#054d44', alignItems: 'center', flex: 1}}>
        <Image
          source={require('../assets/worldmap.jpeg')}
          style={{
            height: 320,
            width: '100%',
            resizeMode: 'cover',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            position: 'absolute',
            top: 90,
          }}>
          <Image
            source={require('../assets/ic_launcher.png')}
            style={{
              height: 100,
              alignSelf: 'center',
              resizeMode: 'contain',
            }}
          />
          <Text
            style={{
              color: 'white',
              fontSize: 24,
              textAlign: 'center',
              textAlignVertical: 'center',
              left: 10,
            }}>
            WhatsApp
          </Text>
        </View>
      </View>
      {showHomePage == true ? (
        <>
            <Image
              source={{
                uri: 'https://img.freepik.com/premium-vector/abstract-smooth-green-background-wave-vector-design_258787-3275.jpg',
              }}
              style={{
                height: 500,
                width: '100%',
                position: 'absolute',
                borderTopLeftRadius: 54,
                borderTopRightRadius: 54,
                bottom: 0,
              }}
            /> 
          <View style={{flex:1,bottom:0,position:"absolute",width:width,height:500}}>
            <Text
              style={{
                left: 46,
                color: 'green',
                top:45,
                fontSize: 19,
                fontWeight: 'bold',
              }}>
              Enter your mobile number to login or {`\n`}register
            </Text>
            <View style={{justifyContent: 'space-around', top: 70,flex:.56}}>
              <Text
                style={{
                  fontSize: 17,
                  paddingLeft: 45,
                  color: 'grey',
                  fontWeight: '600',
                }}>
                Country
              </Text>
              <CustomTextInput
                placeholder='Select Your Country'
                value={UserName}
                setValue={e => setUserName(e)}
              />
              <Text
                style={{
                  fontSize: 17,
                  paddingLeft: 45,
                  color: 'grey',
                  fontWeight: '600',
                  marginTop: 29,
                }}>
                Mobile-Number :
              </Text>
              <CustomPasswordInput
                placeholder="Enter Your Mobile Number"
                value={Number}
                setValue={e => setNumber(e)}
              />
            </View>
          </View>
          </>
      ) : (
        <>
        <Image
          source={{
            uri: 'https://img.freepik.com/premium-vector/abstract-smooth-green-background-wave-vector-design_258787-3275.jpg',
          }}
          style={{
            height: 500,
            width: '100%',
            position: 'absolute',
            borderTopLeftRadius: 54,
            borderTopRightRadius: 54,
            bottom: 0,
          }}
        /> 
      <View style={{flex:1,bottom:0,position:"absolute",width:width,height:500}}>
        <Text
          style={{
            left: 46,
            color: 'green',
            top:45,
            fontSize: 19,
            fontWeight: 'bold',
          }}>
          Verify your mobile number to login or {`\n`}register
        </Text>
        <View style={{top: 70,flex:.56}}>
          <Text
            style={{
              fontSize: 17,
              paddingLeft: 45,
              color: 'grey',
              fontWeight: '600',
              marginVertical: 35,

            }}>
            Verification Code :
          </Text>
          <View style={{flexDirection:"row",justifyContent:"center",alignItems:"flex-start",flex:1}}>
          <TextInput
            keyboardType='number-pad'
            textAlign='center'
            maxLength={1}
            ref={InputRef1}
            value={VerifyInput1}
            onChangeText={e => {
              setVerifyInput1(e);
              if(e != ""){
                InputRef2.current.focus()
              }
            }}
            style={{borderBottomColor:"green",borderBottomWidth:2,margin:20,fontSize:25}}
          />
           <TextInput
            keyboardType='number-pad'
            maxLength={1}
            textAlign='center'
            ref={InputRef2}
            value={VerifyInput2}
            onChangeText={e => {setVerifyInput2(e);
              if(e != ""){
                InputRef3.current.focus()
              }else if(e.length <= 0){
                InputRef1.current.focus()  
             }
            }}
            style={{borderBottomColor:"green",borderBottomWidth:2,margin:20,fontSize:25}}
          />
           <TextInput
            keyboardType='number-pad'
            maxLength={1}
            textAlign='center'
            ref={InputRef3}
            value={VerifyInput3}
            onChangeText={e => {setVerifyInput3(e);
              if(e != ""){
                InputRef4.current.focus()
              }else if(e.length <= 0){
                InputRef2.current.focus()  
             }}}
            style={{borderBottomColor:"green",borderBottomWidth:2,margin:20,fontSize:25}}
          />
           <TextInput
           ref={InputRef4}
           keyboardType='number-pad' 
           maxLength={1}
            textAlign='center'
            value={VerifyInput4}
            onChangeText={e => {setVerifyInput4(e);
              if(e.length <= 0){
                 InputRef3.current.focus()  
              }
            }}
            style={{borderBottomColor:"green",borderBottomWidth:2,margin:20,fontSize:25}}
          />
          </View>
        </View>
      </View>
      </>
      )}

      <TouchableOpacity
        onPress={() => {
          setShowHomePage(false);
          if (showHomePage == false) {
            navigation.dispatch(StackActions.replace('MainTab'));
          }
        }}>
        <View
          style={{
            backgroundColor: '#054d44',
            width: 50,
            height: 50,
            alignSelf: 'flex-end',
            justifyContent: 'center',
            borderRadius: 100,
            bottom: 26,
            right: 15,
          }}>
          <Text style={{textAlign: 'center', fontSize: 15, color: 'white'}}>
            <MaterialCommunityIcons name="arrow-right" size={20} />
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

{
  /* {item.image} */
}
{
  /* // const buttonLabel = label => {
    //   return (
      //     <View style={{marginTop: -5}}>
      //       <View
      //         style={{
        //           backgroundColor: '#054d44',
        //           width: 80,
        //           height: 80,
        //           justifyContent: 'center',
  //           borderRadius: 100,
  //           bottom: 26,
  //         }}>
  //         <Text style={{textAlign: 'center', fontSize: 15, color: 'white'}}>
  //           <MaterialCommunityIcons name="arrow-right" size={24} />
  //         </Text>
  //       </View>
  //     </View>
  //   );
  // }; */
}
