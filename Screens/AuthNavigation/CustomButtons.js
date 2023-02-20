import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const CustomButtons = ({onPress, text, type = 'Primary'}) => {
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.container,
          // styles.container1,
          styles[`container_${type}`],
        ]}
        onPress={onPress}>
        <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    alignItems:"center",
    justifyContent: 'center',
    borderRadius: 5,
  },
  text: {
    fontWeight: '600',
    color: 'white',
    fontSize: hp("1.7"),
  },
  container_Primary: {
    backgroundColor: 'black',
    marginHorizontal:86,
    marginVertical: 20,
    paddingVertical: 10,
  },
  text_Primary: {
    color: 'white',
  },
});
