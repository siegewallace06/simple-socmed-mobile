import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    Button
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';

const SplashScreen = (props) => {
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#DBE9F7' barStyle="light-content" />
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duraton="1500"
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                    resizeMode="stretch"
                />
            </View>
            <Animatable.View
                style={[styles.footer, {
                    backgroundColor: colors.background
                }]}
                animation="fadeInUpBig"
            >
                <Text style={[styles.title, {
                    color: colors.text
                }]}>Welcome to MyMo!</Text>
                <Text style={styles.text}>Sign in with account</Text>
                <View style={styles.button}>


                    <TouchableOpacity onPress={() => props.navigation.navigate('Home')}
                    >
                        <Text style={styles.getText} >Get Started</Text>
                    </TouchableOpacity>

                </View>
            </Animatable.View>
        </View>
    );
};

export default SplashScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.35;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBE9F7'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,

    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop: 5
    },
    button: {
        alignItems: 'center',
        marginTop: 30,
        width: "45%",
        height: "25%",
        borderRadius: 15,
        justifyContent: "center",
        backgroundColor: "#6454D4",
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 2, height: 3 },
        shadowRadius: 5,
        elevation: 5,
    },

    getText: {
        color: 'white'
    }


});