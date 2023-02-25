import {
  View,
  Text,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Animated,
  ActivityIndicator
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {useRef} from 'react';
import {NavigationContext} from 'react-navigation';
import {useEffect} from 'react';
import {useCallback} from 'react';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Feather from "react-native-vector-icons/Feather"

const {height, width} = Dimensions.get('window');

const MyStatuses = ({navigation, route}) => {
  const [current, setCurrent] = useState(0);

  const [IsLoading, setIsLoading] = useState(false);

  const [enable, setEnable] = useState(true);

  const [content, setContent] = useState([
   {
     image:
       'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
   },
   {
     image:
       'https://www.teahub.io/photos/full/94-942521_cell-phone-wallpaper-nature-sexy-men-women-car.jpg',
   },
   {
     image: 'https://pbs.twimg.com/media/EZUWw7uUwAMdeFi.jpg',
   },
  ]);

  
  const progress = useRef(new Animated.Value(0)).current;
  
  
  
  const start = () => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: false,
    }).start(({finished}) => {
      if (finished) {
        next();
      }
    });
  };
  
  const Gesture = () => {
    progress.stopAnimation();
    
    setEnable(false)
    
  };

  const next = () => {
    if (current != content.length - 1) {
      let tempData = content;
      tempData[current].finish = 1;
      setContent(tempData);
      setCurrent(current + 1);
      progress.setValue(0);
    } else {
      close();
    }
  };
  
  const previous = () => {
    if (current - 1 >= 0) {
      let tempData = content;
      tempData[current - 1].finish = 0;
      setContent(tempData);
      setCurrent(current - 1);
      progress.setValue(0);
    } else {
      close();
    }
  };
  
  const close = () => {
    navigation.goBack();
  };
  
  
    
  return (
    <View>
      <TouchableOpacity
        onLongPress={() => Gesture()}
        onPressOut={() => {
          setEnable(true)
          start()}}
        activeOpacity={1}
        >
        <StatusBar hidden />
        <View style={{justifyContent:"center",alignItems:"center",width: "100%", height: "100%",display:IsLoading ? "flex" : "none",backgroundColor:"green"}}>
          <ActivityIndicator/>
          </View>
        <Image
          source={{uri: content[current].image}}
          onLoad={() => {setIsLoading(!IsLoading)}}
          onLoadEnd={() => {
            progress.setValue(0);
            start();
            setIsLoading(false)
          }}
          style={{resizeMode: 'cover', height: height,display:IsLoading ? "none" : "flex"}}
        />
        <View
          style={{
            top: 10,
            width: width,
            position: 'absolute',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexDirection:"row"
          }}>
          {content.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  flex: 1,
                  height: 3,
                  backgroundColor: '#075e55',
                  marginLeft: 5,
                  flexDirection: 'row',
                  opacity: enable == true ? 1 : 0
                }}>
                <Animated.View
                  style={{
                    flex: current == index ? progress : content[index].finish,
                    height: 3,
                    backgroundColor: 'white',
                  }}></Animated.View>
              </View>
            );
          })}
        </View>

        <View
          style={{
            flexDirection: 'row',
            height: height,
            width: width,
            position: 'absolute',
            justifyContent: 'space-between',
            alignItems: 'center',
            top: 0,
          }}>
          <TouchableOpacity
            style={{width: '30%', height: '100%'}}
            onPress={() => {
              previous();
            }}>
              <View></View>
          </TouchableOpacity>
          <View style={{top: 30, left: 10,position:"absolute", flexDirection: 'row',opacity:enable == true ? 1 : 0}}>
              <Image
                source={require("../assets/profile.jpg")}
                style={{height: 55, width: 55, borderRadius: 50,}}
              />
              <Text
                style={{
                  fontSize: 15,
                  color: 'white',
                  textAlignVertical: 'center',
                  paddingLeft: 10,
                }}>
                  Harry Potter
              </Text>
            </View>
          <View style={{position:"absolute",bottom:0,left:0,right:0,opacity: enable == true ? 1 : 0}}>
                <Feather name="chevron-up" size={24} color="white" style={{alignSelf:"center",top:10}}/>
              <Text style={{color:"white",padding:30,textAlign:"center",bottom:10}}>Reply</Text>
            </View>
          <TouchableOpacity
            style={{width: '30%', height: '100%'}}
            onPress={() => {
              next();
            }}>
            <View></View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MyStatuses;
