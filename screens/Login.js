import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from "expo-status-bar";


const Login = props => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [data, setData] = useState("");
  const [isLoading, setLoading] = useState("")
  
  const saveData = async () => {
    try {
      console.log("AWAL TRY")
        const response = await fetch('http://10.0.2.2:3000/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": userName,
                "password": userPassword
            })
        });
        const temp = await response.json()
        setData(temp)
        console.log("UJUNG TRY")
        // console.log(temp)
    } catch (error) {
      console.log("INI ERROR")
        console.error(error);
    } finally {
      console.log("FINALLY!")
      console.log(data)
      if(data.status == "aman cok"){
        props.navigation.navigate('MainApp')
      }else {
        props.navigation.navigate('Home')
      }
      // props.navigation.navigate('MainApp')
    }}

  return (
    <ScrollView style={{ backgroundColor: '#DBE9F7' }}>
      <View style={styles.container}>
        <Image
          source={require('../assets/Login.png')}
          resizeMode="center"
          style={styles.image} />
        <Text style={styles.textTitle}>LOGIN</Text>

        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <Image source={require("../assets/user.png")} style={(styles.imgLogin)} />
          <TextInput
            style={styles.TextInput}
            onChangeText={(userName) =>
                setUserName(userName)
            }
            placeholder="Username"
            placeholderTextColor="#BFBFBF"

          />
        </View>
        <View style={styles.inputView}>
          <Image source={require("../assets/pass.png")} style={(styles.imgLogin)} />
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#BFBFBF"
            secureTextEntry={true}
            onChangeText={(UserPassword) => setUserPassword(UserPassword)}
          />
        </View>


        <TouchableOpacity style={styles.loginBtn} onPress={() => {
          // props.navigation.reset({ index: 0, routes: [{ name: 'MainApp' }] });
          saveData()
        }}>
          <Text style={styles.loginText} >Login</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', marginVertical: 5 }}>
          <Text style={styles.textBody}>Don't Have an account?</Text>
          <Text style={[styles.textBody, { color: 'blue' }]} onPress={() => props.navigation.navigate('SignUp')}>Create one!</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 300,
    height: 300,
    marginVertical: 30
  },

  textBody: {
    
    fontSize: 14,
    marginTop: 5
  },


  inputView: {
    backgroundColor: "#fff",
    borderRadius: 15,
    width: "80%",
    height: 45,
    marginBottom: 15,
    alignItems: "center",
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: { width: 2, height: 3 },
    shadowRadius: 5,
    elevation: 5,

  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,

  },

  loginBtn: {
    width: "80%",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
    backgroundColor: "#6454D4",
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: { width: 2, height: 3 },
    shadowRadius: 5,
    elevation: 5,
  },
  textTitle: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    letterSpacing: 8,
    marginBottom: 10,
  },
  imgLogin: {
    marginLeft: 15
  },
  loginText: {
    fontSize: 18,
    fontWeight: "400",
    color: 'white',
  }
});

export default Login