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
import React, {createContext, useContext, useRef, useState} from 'react';
import {StackActions, useNavigation} from '@react-navigation/native';
import {App} from '../../App';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MainTab from './MainTab';
import {
  CustomPasswordInput,
  CustomTextInput,
  DropDownContext,
} from './AuthNavigation/CustomTextInput';
import {CustomButtons} from './AuthNavigation/CustomButtons';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Select, SelectProvider} from '@mobile-reality/react-native-select-pro';
const {height, width} = Dimensions.get('window');

export const Started = () => {
  const [showHomePage, setShowHomePage] = useState(true);

  const items = [
    {label: 'Afghanistan', code: 'AF'},
    {label: 'land Islands', code: 'AX'},
    {label: 'Albania', code: 'AL'},
    {label: 'Algeria', code: 'DZ'},
    {label: 'American Samoa', code: 'AS'},
    {label: 'AndorrA', code: 'AD'},
    {label: 'Angola', code: 'AO'},
    {label: 'Anguilla', code: 'AI'},
    {label: 'Antarctica', code: 'AQ'},
    {label: 'Antigua and Barbuda', code: 'AG'},
    {label: 'Argentina', code: 'AR'},
    {label: 'Armenia', code: 'AM'},
    {label: 'Aruba', code: 'AW'},
    {label: 'Australia', code: 'AU'},
    {label: 'Austria', code: 'AT'},
    {label: 'Azerbaijan', code: 'AZ'},
    {label: 'Bahamas', code: 'BS'},
    {label: 'Bahrain', code: 'BH'},
    {label: 'Bangladesh', code: 'BD'},
    {label: 'Barbados', code: 'BB'},
    {label: 'Belarus', code: 'BY'},
    {label: 'Belgium', code: 'BE'},
    {label: 'Belize', code: 'BZ'},
    {label: 'Benin', code: 'BJ'},
    {label: 'Bermuda', code: 'BM'},
    {label: 'Bhutan', code: 'BT'},
    {label: 'Bolivia', code: 'BO'},
    {label: 'Bosnia and Herzegovina', code: 'BA'},
    {label: 'Botswana', code: 'BW'},
    {label: 'Bouvet Island', code: 'BV'},
    {label: 'Brazil', code: 'BR'},
    {label: 'British Indian Ocean Territory', code: 'IO'},
    {label: 'Brunei Darussalam', code: 'BN'},
    {label: 'Bulgaria', code: 'BG'},
    {label: 'Burkina Faso', code: 'BF'},
    {label: 'Burundi', code: 'BI'},
    {label: 'Cambodia', code: 'KH'},
    {label: 'Cameroon', code: 'CM'},
    {label: 'Canada', code: 'CA'},
    {label: 'Cape Verde', code: 'CV'},
    {label: 'Cayman Islands', code: 'KY'},
    {label: 'Central African Republic', code: 'CF'},
    {label: 'Chad', code: 'TD'},
    {label: 'Chile', code: 'CL'},
    {label: 'China', code: 'CN'},
    {label: 'Christmas Island', code: 'CX'},
    {label: 'Cocos (Keeling) Islands', code: 'CC'},
    {label: 'Colombia', code: 'CO'},
    {label: 'Comoros', code: 'KM'},
    {label: 'Congo', code: 'CG'},
    {label: 'Congo, The Democratic Republic of the', code: 'CD'},
    {label: 'Cook Islands', code: 'CK'},
    {label: 'Costa Rica', code: 'CR'},
    {label: "Cote D'Ivoire", code: 'CI'},
    {label: 'Croatia', code: 'HR'},
    {label: 'Cuba', code: 'CU'},
    {label: 'Cyprus', code: 'CY'},
    {label: 'Czech Republic', code: 'CZ'},
    {label: 'Denmark', code: 'DK'},
    {label: 'Djibouti', code: 'DJ'},
    {label: 'Dominica', code: 'DM'},
    {label: 'Dominican Republic', code: 'DO'},
    {label: 'Ecuador', code: 'EC'},
    {label: 'Egypt', code: 'EG'},
    {label: 'El Salvador', code: 'SV'},
    {label: 'Equatorial Guinea', code: 'GQ'},
    {label: 'Eritrea', code: 'ER'},
    {label: 'Estonia', code: 'EE'},
    {label: 'Ethiopia', code: 'ET'},
    {label: 'Falkland Islands (Malvinas)', code: 'FK'},
    {label: 'Faroe Islands', code: 'FO'},
    {label: 'Fiji', code: 'FJ'},
    {label: 'Finland', code: 'FI'},
    {label: 'France', code: 'FR'},
    {label: 'French Guiana', code: 'GF'},
    {label: 'French Polynesia', code: 'PF'},
    {label: 'French Southern Territories', code: 'TF'},
    {label: 'Gabon', code: 'GA'},
    {label: 'Gambia', code: 'GM'},
    {label: 'Georgia', code: 'GE'},
    {label: 'Germany', code: 'DE'},
    {label: 'Ghana', code: 'GH'},
    {label: 'Gibraltar', code: 'GI'},
    {label: 'Greece', code: 'GR'},
    {label: 'Greenland', code: 'GL'},
    {label: 'Grenada', code: 'GD'},
    {label: 'Guadeloupe', code: 'GP'},
    {label: 'Guam', code: 'GU'},
    {label: 'Guatemala', code: 'GT'},
    {label: 'Guernsey', code: 'GG'},
    {label: 'Guinea', code: 'GN'},
    {label: 'Guinea-Bissau', code: 'GW'},
    {label: 'Guyana', code: 'GY'},
    {label: 'Haiti', code: 'HT'},
    {label: 'Heard Island and Mcdonald Islands', code: 'HM'},
    {label: 'Holy See (Vatican City State)', code: 'VA'},
    {label: 'Honduras', code: 'HN'},
    {label: 'Hong Kong', code: 'HK'},
    {label: 'Hungary', code: 'HU'},
    {label: 'Iceland', code: 'IS'},
    {label: 'India', code: 'IN'},
    {label: 'Indonesia', code: 'ID'},
    {label: 'Iran, Islamic Republic Of', code: 'IR'},
    {label: 'Iraq', code: 'IQ'},
    {label: 'Ireland', code: 'IE'},
    {label: 'Isle of Man', code: 'IM'},
    {label: 'Israel', code: 'IL'},
    {label: 'Italy', code: 'IT'},
    {label: 'Jamaica', code: 'JM'},
    {label: 'Japan', code: 'JP'},
    {label: 'Jersey', code: 'JE'},
    {label: 'Jordan', code: 'JO'},
    {label: 'Kazakhstan', code: 'KZ'},
    {label: 'Kenya', code: 'KE'},
    {label: 'Kiribati', code: 'KI'},
    {label: "Korea, Democratic People'S Republic of", code: 'KP'},
    {label: 'Korea, Republic of', code: 'KR'},
    {label: 'Kuwait', code: 'KW'},
    {label: 'Kyrgyzstan', code: 'KG'},
    {label: "Lao People'S Democratic Republic", code: 'LA'},
    {label: 'Latvia', code: 'LV'},
    {label: 'Lebanon', code: 'LB'},
    {label: 'Lesotho', code: 'LS'},
    {label: 'Liberia', code: 'LR'},
    {label: 'Libyan Arab Jamahiriya', code: 'LY'},
    {label: 'Liechtenstein', code: 'LI'},
    {label: 'Lithuania', code: 'LT'},
    {label: 'Luxembourg', code: 'LU'},
    {label: 'Macao', code: 'MO'},
    {label: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'},
    {label: 'Madagascar', code: 'MG'},
    {label: 'Malawi', code: 'MW'},
    {label: 'Malaysia', code: 'MY'},
    {label: 'Maldives', code: 'MV'},
    {label: 'Mali', code: 'ML'},
    {label: 'Malta', code: 'MT'},
    {label: 'Marshall Islands', code: 'MH'},
    {label: 'Martinique', code: 'MQ'},
    {label: 'Mauritania', code: 'MR'},
    {label: 'Mauritius', code: 'MU'},
    {label: 'Mayotte', code: 'YT'},
    {label: 'Mexico', code: 'MX'},
    {label: 'Micronesia, Federated States of', code: 'FM'},
    {label: 'Moldova, Republic of', code: 'MD'},
    {label: 'Monaco', code: 'MC'},
    {label: 'Mongolia', code: 'MN'},
    {label: 'Montenegro', code: 'ME'},
    {label: 'Montserrat', code: 'MS'},
    {label: 'Morocco', code: 'MA'},
    {label: 'Mozambique', code: 'MZ'},
    {label: 'Myanmar', code: 'MM'},
    {label: 'Namibia', code: 'NA'},
    {label: 'Nauru', code: 'NR'},
    {label: 'Nepal', code: 'NP'},
    {label: 'Netherlands', code: 'NL'},
    {label: 'Netherlands Antilles', code: 'AN'},
    {label: 'New Caledonia', code: 'NC'},
    {label: 'New Zealand', code: 'NZ'},
    {label: 'Nicaragua', code: 'NI'},
    {label: 'Niger', code: 'NE'},
    {label: 'Nigeria', code: 'NG'},
    {label: 'Niue', code: 'NU'},
    {label: 'Norfolk Island', code: 'NF'},
    {label: 'Northern Mariana Islands', code: 'MP'},
    {label: 'Norway', code: 'NO'},
    {label: 'Oman', code: 'OM'},
    {label: 'Pakistan', code: 'PK'},
    {label: 'Palau', code: 'PW'},
    {label: 'Palestinian Territory, Occupied', code: 'PS'},
    {label: 'Panama', code: 'PA'},
    {label: 'Papua New Guinea', code: 'PG'},
    {label: 'Paraguay', code: 'PY'},
    {label: 'Peru', code: 'PE'},
    {label: 'Philippines', code: 'PH'},
    {label: 'Pitcairn', code: 'PN'},
    {label: 'Poland', code: 'PL'},
    {label: 'Portugal', code: 'PT'},
    {label: 'Puerto Rico', code: 'PR'},
    {label: 'Qatar', code: 'QA'},
    {label: 'Reunion', code: 'RE'},
    {label: 'Romania', code: 'RO'},
    {label: 'Russian Federation', code: 'RU'},
    {label: 'RWANDA', code: 'RW'},
    {label: 'Saint Helena', code: 'SH'},
    {label: 'Saint Kitts and Nevis', code: 'KN'},
    {label: 'Saint Lucia', code: 'LC'},
    {label: 'Saint Pierre and Miquelon', code: 'PM'},
    {label: 'Saint Vincent and the Grenadines', code: 'VC'},
    {label: 'Samoa', code: 'WS'},
    {label: 'San Marino', code: 'SM'},
    {label: 'Sao Tome and Principe', code: 'ST'},
    {label: 'Saudi Arabia', code: 'SA'},
    {label: 'Senegal', code: 'SN'},
    {label: 'Serbia', code: 'RS'},
    {label: 'Seychelles', code: 'SC'},
    {label: 'Sierra Leone', code: 'SL'},
    {label: 'Singapore', code: 'SG'},
    {label: 'Slovakia', code: 'SK'},
    {label: 'Slovenia', code: 'SI'},
    {label: 'Solomon Islands', code: 'SB'},
    {label: 'Somalia', code: 'SO'},
    {label: 'South Africa', code: 'ZA'},
    {label: 'South Georgia and the South Sandwich Islands', code: 'GS'},
    {label: 'Spain', code: 'ES'},
    {label: 'Sri Lanka', code: 'LK'},
    {label: 'Sudan', code: 'SD'},
    {label: 'Suriname', code: 'SR'},
    {label: 'Svalbard and Jan Mayen', code: 'SJ'},
    {label: 'Swaziland', code: 'SZ'},
    {label: 'Sweden', code: 'SE'},
    {label: 'Switzerland', code: 'CH'},
    {label: 'Syrian Arab Republic', code: 'SY'},
    {label: 'Taiwan, Province of China', code: 'TW'},
    {label: 'Tajikistan', code: 'TJ'},
    {label: 'Tanzania, United Republic of', code: 'TZ'},
    {label: 'Thailand', code: 'TH'},
    {label: 'Timor-Leste', code: 'TL'},
    {label: 'Togo', code: 'TG'},
    {label: 'Tokelau', code: 'TK'},
    {label: 'Tonga', code: 'TO'},
    {label: 'Trinidad and Tobago', code: 'TT'},
    {label: 'Tunisia', code: 'TN'},
    {label: 'Turkey', code: 'TR'},
    {label: 'Turkmenistan', code: 'TM'},
    {label: 'Turks and Caicos Islands', code: 'TC'},
    {label: 'Tuvalu', code: 'TV'},
    {label: 'Uganda', code: 'UG'},
    {label: 'Ukraine', code: 'UA'},
    {label: 'United Arab Emirates', code: 'AE'},
    {label: 'United Kingdom', code: 'GB'},
    {label: 'United States', code: 'US'},
    {label: 'United States Minor Outlying Islands', code: 'UM'},
    {label: 'Uruguay', code: 'UY'},
    {label: 'Uzbekistan', code: 'UZ'},
    {label: 'Vanuatu', code: 'VU'},
    {label: 'Venezuela', code: 'VE'},
    {label: 'Viet Nam', code: 'VN'},
    {label: 'Virgin Islands, British', code: 'VG'},
    {label: 'Virgin Islands, U.S.', code: 'VI'},
    {label: 'Wallis and Futuna', code: 'WF'},
    {label: 'Western Sahara', code: 'EH'},
    {label: 'Yemen', code: 'YE'},
    {label: 'Zambia', code: 'ZM'},
    {label: 'Zimbabwe', code: 'ZW'},
  ];

  const [press, setPress] = useState(false);

  const [Number, setNumber] = useState('');

  const [VerifyInput1, setVerifyInput1] = useState('');
  const [VerifyInput2, setVerifyInput2] = useState('');
  const [VerifyInput3, setVerifyInput3] = useState('');
  const [VerifyInput4, setVerifyInput4] = useState('');

  const InputRef1 = useRef(null);
  const InputRef2 = useRef(null);
  const InputRef3 = useRef(null);
  const InputRef4 = useRef(null);

  const {width, height} = Dimensions.get('window');

  const navigation = useNavigation();

  const data = [
    {
      label: 'Option 1',
      value: 'option1',
    },
    {
      label: 'Option 2',
      value: 'option2',
    },
    {
      label: 'Option 3',
      value: 'option3',
    },
    {
      label: 'Option 4',
      value: 'option4',
    },
  ];

  const MyView = () => {
    return (
      <View
        style={{
          justifyContent: 'flex-start',
          marginHorizontal: 30,
          alignItems: 'center',
          top:440,
          zIndex:6
          }}>
        <Select
          styles={
            SelectStyles={
              select:{
                clear:{
                  icon:{
                    tintColor:"white",right:4
                  }
                },
                text:{
                  paddingLeft: 10,
                  color: 'white',
                  fontSize: widthPercentageToDP('4'),
                },
                container:{
                  backgroundColor: '#054d44',
                  alignItems: 'center',
                  marginHorizontal: 30,
                  height: heightPercentageToDP('8'),
                  borderRadius: 10
                },
                arrow:{
                  icon:{
                    tintColor:"white"
                  }
                }
              }
            }
          }
          optionButtonProps={{marginTop:20,borderBottomColor:"gray",borderBottomWidth:0.8,justifyContent:"center",}}
          options={items}
          searchable={true}
          placeholderText="Select Country"
          placeholderTextColor="white"
        />
      </View>
    );
  };

  return (
    <View style={{paddingTop: 10, backgroundColor: '#054d44', flex: 1}}>
      <StatusBar hidden />

      {/* Sign In */}

      <View style={{backgroundColor: '#054d44', alignItems: 'center',}}>
        <Image
          source={require('../assets/worldmap.jpeg')}
          style={{
            height: heightPercentageToDP('32%'),
            width: '100%',
            resizeMode: 'cover',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            position: 'absolute',
            top: heightPercentageToDP('10%'),
          }}>
          <Image
            source={require('../assets/ic_launcher.png')}
            style={{
              height: heightPercentageToDP('8%'),
              alignSelf: 'center',
              resizeMode: 'contain',
            }}
          />
          <Text
            style={{
              color: 'white',
              fontSize: heightPercentageToDP('3.5%'),
              textAlign: 'center',
              textAlignVertical: 'center',
              left: widthPercentageToDP('.5%'),
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
              height: heightPercentageToDP('65%'),
              width: '100%',
              position: 'absolute',
              borderTopLeftRadius: 54,
              borderTopRightRadius: 54,
              bottom: 0,
            }}
          />
          <View style={{position:"absolute",top:0,bottom:0,left:0,right:0}}>

              <SelectProvider>
              <MyView />
            </SelectProvider>
          <View
            style={{
              flex: 1,
              bottom: 0,
              position: 'absolute',
              width: width,
              height: heightPercentageToDP('10%'),
            }}>
            <Text
              style={{
                left: 35,
                color: 'green',
                bottom: height / 2,
                fontSize: heightPercentageToDP('2.6%'),
                fontWeight: 'bold',
              }}>
              Enter your mobile number to login or {`\n`}register
            </Text>
            <View style={{bottom: height / 2.3}}>
              <Text
                style={{
                  fontSize: heightPercentageToDP('2.6%'),
                  paddingLeft: 45,
                  color: 'grey',
                  fontWeight: '600',
                }}>
                Country
              </Text>
              <Text
                style={{
                  fontSize: heightPercentageToDP('2.6%'),
                  paddingLeft: 45,
                  color: 'grey',
                  fontWeight: '600',
                  marginTop: height / 8,
                  zIndex: -1,
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
                </View>
        </>
      ) : (
        <>
          <Image
            source={{
              uri: 'https://img.freepik.com/premium-vector/abstract-smooth-green-background-wave-vector-design_258787-3275.jpg',
            }}
            style={{
              height: heightPercentageToDP('65%'),
              width: '100%',
              position: 'absolute',
              borderTopLeftRadius: 54,
              borderTopRightRadius: 54,
              bottom: 0,
            }}
          />
          <View
            style={{
              flex: 1,
              bottom: 0,
              position: 'absolute',
              width: width,
              height: heightPercentageToDP('10%'),
            }}>
            <Text
              style={{
                left: 35,
                color: 'green',
                bottom: height / 2,
                fontSize: heightPercentageToDP('2.6%'),
                fontWeight: 'bold',
              }}>
              Verify your mobile number to login or {`\n`}register
            </Text>
            <View style={{bottom: height / 2.3}}>
              <Text
                style={{
                  fontSize: heightPercentageToDP('2.6%'),
                  paddingLeft: 45,
                  color: 'grey',
                  fontWeight: '600',
                }}>
                Verification Code :
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  flex: 1,
                  top: 10,
                }}>
                <TextInput
                  keyboardType="number-pad"
                  textAlign="center"
                  textAlignVertical="center"
                  maxLength={1}
                  ref={InputRef1}
                  value={VerifyInput1}
                  onChangeText={e => {
                    setVerifyInput1(e);
                    if (e != '') {
                      InputRef2.current.focus();
                    }
                  }}
                  style={{
                    borderBottomColor: 'green',
                    borderBottomWidth: 2,
                    height: 70,
                    margin: 20,
                    fontSize: 25,
                  }}
                />
                <TextInput
                  keyboardType="number-pad"
                  maxLength={1}
                  textAlign="center"
                  ref={InputRef2}
                  value={VerifyInput2}
                  onChangeText={e => {
                    setVerifyInput2(e);
                    if (e != '') {
                      InputRef3.current.focus();
                    } else if (e.length <= 0) {
                      InputRef1.current.focus();
                    }
                  }}
                  style={{
                    borderBottomColor: 'green',
                    borderBottomWidth: 2,
                    height: 70,
                    margin: 20,
                    fontSize: 25,
                  }}
                />
                <TextInput
                  keyboardType="number-pad"
                  maxLength={1}
                  textAlign="center"
                  ref={InputRef3}
                  value={VerifyInput3}
                  onChangeText={e => {
                    setVerifyInput3(e);
                    if (e != '') {
                      InputRef4.current.focus();
                    } else if (e.length <= 0) {
                      InputRef2.current.focus();
                    }
                  }}
                  style={{
                    borderBottomColor: 'green',
                    borderBottomWidth: 2,
                    margin: 20,
                    height: 70,
                    fontSize: 25,
                  }}
                />
                <TextInput
                  ref={InputRef4}
                  keyboardType="number-pad"
                  maxLength={1}
                  textAlign="center"
                  value={VerifyInput4}
                  onChangeText={e => {
                    setVerifyInput4(e);
                    if (e.length <= 0) {
                      InputRef3.current.focus();
                    } else if (e.length >= 0) {
                      navigation.dispatch(StackActions.replace('MainTab'));
                    }
                  }}
                  style={{
                    borderBottomColor: 'green',
                    borderBottomWidth: 2,
                    margin: 20,
                    height: 70,
                    fontSize: 25,
                  }}
                />
              </View>
            </View>
          </View>
        </>
      )}

      <TouchableOpacity
        style={{right: 0, position: 'absolute', bottom: 0}}
        onPress={() => {
          setShowHomePage(false);
          if (showHomePage == false) {
            navigation.dispatch(StackActions.replace('MainTab'));
          }
        }}>
        <View
          style={{
            backgroundColor: '#054d44',
            width: height / 15,
            height: height / 15,
            alignSelf: 'flex-end',
            justifyContent: 'center',
            borderRadius: 100,
            bottom: 26,
            right: 15,
          }}>
          <Text style={{textAlign: 'center', color: 'white'}}>
            <MaterialCommunityIcons name="arrow-right" size={height / 35} />
          </Text>
        </View>
      </TouchableOpacity>
      {/* </TouchableOpacity> */}
    </View>
  );
};
