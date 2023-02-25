import React, {useRef, useState,useContext, createContext} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const CustomPasswordInput = ({value, setValue, placeholder}) => {
  const [hide, setHide] = useState(true);
  const [visible, setVisible] = useState(false);
  return (
    <View style={Passwordstyles.PasswordContainer}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={visible}
        placeholderTextColor="white"
        keyboardAppearance="dark"
        keyboardType="number-pad"
        autoCapitalize="none"
        importantForAutofill="yesExcludeDescendants"
        value={value}
        onChangeText={setValue}
        style={Passwordstyles.TextInputStyle}
      />
      <TouchableOpacity
        onPress={() => {
          setHide(!hide);
          setVisible(!visible);
        }}>
        {/* <MaterialCommunityIcons
          name={!hide === true ? 'eye' : 'eye-off'}
          size={25}
          color="white"
          style={Passwordstyles.eye}
        /> */}
      </TouchableOpacity>
    </View>
  );
};

const Passwordstyles = StyleSheet.create({
  PasswordContainer: {
    flexDirection: 'row',
    backgroundColor: '#054d44',
    alignItems: 'center',
    marginHorizontal: 30,
    height: hp('8'),
    borderRadius: 10,
    zIndex: -1,
  },
  TextInputStyle: {
    flex: 1,
    paddingLeft: 10,
    color: 'white',
    fontSize: wp('4'),
    marginHorizontal: 30,
  },
  eye: {
    textAlign: 'right',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 12,
  },
});
