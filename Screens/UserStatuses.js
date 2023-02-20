import {
  View,
  Text,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {useRef} from 'react';
import {useEffect} from 'react';
import {useCallback} from 'react';
import {PanGestureHandler} from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('window');

const UserStatuses = ({navigation, route}) => {
  const [current, setCurrent] = useState(0);

  const [enable, setEnable] = useState(true);

  const [update, setUpdate] = useState(false);

  const [image, setImage] = useState();

  const [content, setContent] = useState(
    //  {
    //    image:
    //      'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    //  },
    //  {
    //    image:
    //      'https://www.teahub.io/photos/full/94-942521_cell-phone-wallpaper-nature-sexy-men-women-car.jpg',
    //  },
    //  {
    //    image: 'https://pbs.twimg.com/media/EZUWw7uUwAMdeFi.jpg',
    //  },
    route.params.item.sendImg ? route.params.item.sendImg : [{image: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}]
  );

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

  

  useEffect(() => {
    const currentId = auth().currentUser.uid;

    const Me = firestore().collection('users').doc(currentId);

    Me.onSnapshot(QuerySnapShot => {
      const me = QuerySnapShot.data();
      setImage(me.image);
    });
  }, []);


  // console.log(route.params.getImage[0].img);

  const imgProvider = route.params.item.sendImg ? route.params.item.sendImg[current].img : "https://i.pinimg.com/originals/85/ec/df/85ecdf1c3611ecc9b7fa85282d9526e0.jpg";  

  
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
        <Image
          source={{uri: imgProvider}}
          onLoadEnd={() => {
            progress.setValue(0);
            start();
          }}
          style={{resizeMode: 'cover', height: height,}}
        />
        <View
          style={{
            top: 10,
            width: width,
            position: 'absolute',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexDirection: 'row',
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
            <View style={{top: 30, left: 10, flexDirection: 'row',opacity:enable == true ? 1 : 0}}>
              <Image
                source={{uri: route.params.item.image}}
                style={{height: 55, width: 55, borderRadius: 50,}}
              />
              <Text
                style={{
                  fontSize: 15,
                  color: 'white',
                  textAlignVertical: 'center',
                  paddingLeft: 10,
                }}>
                {route.params.item.username}
              </Text>
            </View>
          </TouchableOpacity>
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

export default UserStatuses;
