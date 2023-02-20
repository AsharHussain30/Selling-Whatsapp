import { StyleSheet, Text, View,Image, Dimensions, ImageBackground } from 'react-native'
import React,{useEffect} from 'react'
import { StackActions, useNavigation } from '@react-navigation/native'

const AuthSplash = () => {
  const navigation = useNavigation()
  useEffect(() => {
      setTimeout(() => {
          navigation.dispatch(StackActions.replace("SignIn"))
      },4000)
    },[])
    return (
      <View style={{justifyContent:"center",alignItems:"center",flex:1,backgroundColor:"#28a71a",height:"100%"}}>
      <Image source={{uri: "https://www.freepnglogos.com/uploads/whatsapp-png-image-9.png"}} style={{height:"30%",resizeMode:"contain",width:"100%"}}/>
      </View>
     )
}

export default AuthSplash

const styles = StyleSheet.create({})