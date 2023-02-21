import {
  Dimensions,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
  View,
  Alert,
  ScrollView,
  RefreshControl,
  PermissionsAndroid,
} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageCropPicker from 'react-native-image-crop-picker';
import {useEffect} from 'react';
import {useCallback} from 'react';
import {RNCamera} from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';

const Status = ({navigation}) => {
  const {height, width} = Dimensions.get('window');

  const [getImage, setGetImg] = useState('');

  const [currentName, setCurrentName] = useState('');

  const [Name, setName] = useState('');

  const [FireImage, setFireImage] = useState('');

  const [image, setImage] = useState('');

  const Camera = () => {
     ImageCropPicker.openCamera({
       cropping:true,
     }).then(image => {
       setImage(image)
     });
    };

  const ImagePickerFromGallery = () => {
    ImageCropPicker.openPicker({
      cropping: true,
    }).then(image => {
      setImage(image)
    });
  };

  useEffect(() => {
      onRefresh();
  }, []);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView
        nestedScrollEnabled={true}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['green']}
          />
        }>
        <View
          style={{
            height: 80,
            top: 0,
            width: width,
            justifyContent: 'center',
            borderBottomColor: 'gray',
            borderBottomWidth: 0.3,
            elevation: 2,
            backgroundColor: 'white',
          }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('MyStatuses', {getImage, currentName})
            }
            style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <Image
              source={{
                uri: image
                  ? image
                  : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi0ToKk_pNdClvoT5zslZZ6iQV_xOVIktrsuYUt1FRunsvtjpXmW9lnTWzD8N1t2KLLnw&usqp=CAU',
              }}
              style={{
                height: 55,
                width: 55,
                borderRadius: 100,
                marginHorizontal: 10,
              }}
            />
            <View style={{flexDirection: 'column'}}>
              <Text style={{fontWeight: '400', color: 'black', fontSize: 15}}>
                My Status
              </Text>
              <Text style={{fontWeight: '400', color: 'gray', fontSize: 10}}>
                Tap To Add Status Update
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            color: '#408c7c',
            fontSize: 13,
            marginVertical: 2,
            width: width,
            backgroundColor: '#eee',
            padding: 10,
            fontWeight: '800',
          }}>
          Viewed Update
        </Text>
        <ScrollView horizontal scrollEnabled={false}>
          <FlatList
            keyExtractor={item => item.uid}
            data={FireImage}
            renderItem={({item}) => {
              // console.log(item);
              return (
                <View
                  style={{
                    height: 70,
                    top: 0,
                    width: width,
                    justifyContent: 'center',
                    borderBottomColor: 'gray',
                    elevation: 7,
                    backgroundColor: '#fff',
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('UserStatuses', {item, Name})
                    }
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      flex: 1,
                    }}>
                    <Image
                      source={{uri: item.img ? item.img : item.image}}
                      style={{
                        height: 55,
                        width: 55,
                        borderRadius: 100,
                        marginHorizontal: 10,
                      }}
                    />
                    <View style={{flexDirection: 'column'}}>
                      <Text
                        style={{
                          fontWeight: '400',
                          color: 'black',
                          fontSize: 15,
                        }}>
                        {item.username}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </ScrollView>
      </ScrollView>
      <View
        style={{
          backgroundColor: '#408c7c',
          borderRadius: 50,
          padding: 10,
          position: 'absolute',
          alignSelf: 'flex-end',
          right: 10,
          bottom: 60,
          elevation: 5,
        }}>
        <TouchableOpacity onPress={() => Camera()}>
          <MaterialCommunityIcons name="camera" size={20} color="#eee" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: '#408c7c',
          borderRadius: 50,
          padding: 10,
          position: 'absolute',
          bottom: 0,
          alignSelf: 'flex-end',
          right: 10,
          bottom: 10,
          elevation: 5,
        }}>
        <TouchableOpacity onPress={() => ImagePickerFromGallery()}>
          <MaterialCommunityIcons name="pencil" size={20} color="#eee" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({});
