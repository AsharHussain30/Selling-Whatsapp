import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const FullProfileImage = ({route,navigation}) => {
  const {width, height} = Dimensions.get('window');

  return (
    <View>
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
          {route.params.params}
        </Text>
      </View>
      <Image
        source={{uri: route.params.SelectedImage}}
        style={{height: height}}
      />
    </View>
  );
};

export default FullProfileImage;
