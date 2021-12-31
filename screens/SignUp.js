import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from "expo-status-bar";
import Submit from '../components/Submit';


const SignUp = props => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");
    const [frontName, setFrontName] = useState("")
    const [lastName, setLastName] = useState("")



    const saveData = async () => {
        try {
            const response = await fetch('http://10.0.2.2:3000/register', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "username": username,
                    "password": password,
                    "front_name": frontName,
                    "last_name": lastName
                })
            });
        } catch (error) {
            console.error(error);
        } finally {
            props.navigation.navigate('Home')
        }}
    return (
            <ScrollView style={{ backgroundColor: '#DBE9F7' }}>
                <View style={styles.container}>
                    <Image source={require('../assets/Signup.png')} resizeMode="center" style={styles.image} />
                    <Text style={styles.textTitle}>SIGN UP</Text>

                    <StatusBar style="auto" />
                    <View style={styles.inputView}>
                        <Image source={require("../assets/ic_signup.png")} style={(styles.imgLogin)} />
                        <TextInput
                            style={styles.TextInput}
                            placeholder="First Name"
                            placeholderTextColor="#BFBFBF"
                            onChangeText={(front_name) => setFrontName(front_name)}
                        />
                    </View>

                    <View style={styles.inputView}>
                        <Image source={require("../assets/ic_signup.png")} style={(styles.imgLogin)} />
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Last Name"
                            placeholderTextColor="#BFBFBF"
                            onChangeText={(last_name) => setLastName(last_name)}
                        />
                    </View>

                    <View style={styles.inputView}>
                        <Image source={require("../assets/user.png")} style={(styles.imgLogin)} />
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Username"
                            placeholderTextColor="#BFBFBF"
                            onChangeText={(uname) => setUsername(uname)}
                        />
                    </View>

                    <View style={styles.inputView}>
                        <Image source={require("../assets/pass.png")} style={(styles.imgLogin)} />
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Password"
                            placeholderTextColor="#BFBFBF"
                            secureTextEntry={true}
                            onChangeText={(password) => setPassword(password)}
                        />
                    </View>
                    <TouchableOpacity style={styles.loginBtn} onPress={() => {
                        // props.navigation.reset({ index: 0, routes: [{ name: 'Submit' }] });
                        saveData()
                    }}>
                        <Text style={styles.loginText} >Sign Up</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textBody}>Already have an account?</Text>
                        <Text style={[styles.textBody, { color: 'blue' }]} onPress={() => props.navigation.navigate('Home')}> Login</Text>

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
            width: 291,
            height: 257,
            marginVertical: 10,
            marginTop: 30
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
            fontFamily: 'Monstserrat',
        },
        imgLogin: {
            marginLeft: 15
        },
        loginText: {
            fontSize: 18,
            fontWeight: "400",
            color: 'white',
            fontFamily: 'Montserrat'
        }
    });

    export default SignUp;