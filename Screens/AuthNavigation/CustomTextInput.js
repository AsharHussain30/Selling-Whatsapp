import React, {useState} from 'react';
import {TextInput, StyleSheet, View, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Menu, Provider} from 'react-native-paper';

export const CustomPasswordInput = ({value, setValue, placeholder}) => {
  const [hide, setHide] = useState(true);
  const [visible, setVisible] = useState(true);
  return (
    <View style={Passwordstyles.PasswordContainer}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={visible}
        placeholderTextColor="white"
        keyboardAppearance="dark"
        keyboardType="name-phone-pad"
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
        <MaterialCommunityIcons
          name={!hide === true ? 'eye' : 'eye-off'}
          size={25}
          color="white"
          style={Passwordstyles.eye}
        />
      </TouchableOpacity>
    </View>
  );
};

export const CustomTextInput = ({value, setValue, placeholder}) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <View style={styles.usernameContainer}>
      <TextInput
        placeholder={placeholder}
        value={value}
        placeholderTextColor="white"
        keyboardType="email-address"
        onChangeText={setValue}
        style={styles.username}
      />
      <Provider>
        <View
          style={{
            justifyContent: 'center',
            height: '100%',
            right: 0,
            position: 'absolute',
          }}>
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <TouchableOpacity onPress={openMenu}>
                <MaterialCommunityIcons
                  name={'menu-down'}
                  color="white"
                  size={25}
                  style={Passwordstyles.eye}
                />
              </TouchableOpacity>
            }>
            <Menu.Item title="Pakistan" />
            <Menu.Item title="Pakistan" />
            <Menu.Item title="Pakistan" />
            <Menu.Item title="Pakistan" />
            <Menu.Item title="Pakistan" />
            <Menu.Item title="Pakistan" />
          </Menu>
        </View>
      </Provider>
    </View>
  );
};

{
  /*
<View style={styles.usernameContainer}>
      <TextInput
        placeholder={placeholder}
        value={value}
        placeholderTextColor="white"
        keyboardType="email-address"
        onChangeText={setValue}
        style={styles.username}
      /><MaterialCommunityIcons
      name={'menu-down'}
      color="white"
      size={25}
      style={Passwordstyles.eye}
    />
    </View>
  */
}

const styles = StyleSheet.create({
  usernameContainer: {
    backgroundColor: '#054d44',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
    height: hp('8'),
    borderRadius: 10,
  },
  username: {
    flex: 1,
    paddingLeft: 10,
    color: 'white',
    fontSize: wp('4'),
    marginHorizontal: 30,
    borderBottomColor: 'lightgreen',
    borderBottomWidth: 2,
  },
});

const Passwordstyles = StyleSheet.create({
  PasswordContainer: {
    flexDirection: 'row',
    backgroundColor: '#054d44',
    alignItems: 'center',
    marginHorizontal: 30,
    height: hp('8'),
    borderRadius: 10,
  },
  TextInputStyle: {
    flex: 1,
    paddingLeft: 10,
    color: 'white',
    fontSize: wp('4'),
    marginHorizontal: 30,
    borderBottomColor: 'lightgreen',
    borderBottomWidth: 2.5,
  },
  eye: {
    textAlign: 'right',
    justifyContent: 'center',
    paddingRight: 10,
  },
});
