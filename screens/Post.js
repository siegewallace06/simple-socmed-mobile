import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'

const Post = ({ route, navigation }) => {
    const [ID,setID] = useState(4)
    const[textInputPost,setTextInputPost] = useState("")
    const saveData = async () => {
        try {
            const response = await fetch('http://10.0.2.2:3000/post/' + ID, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: ID,
                    post_detail : textInputPost
                })
            });
            } catch (error) {
                console.error(error)
            } finally {
                navigation.navigate('MainApp')
            }
        }

    return (
        <View style={styles.page}>
            <View style={styles.headContainer}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => {
                    navigation.reset({ index: 0, routes: [{ name: 'MainApp' }] });
                }}>
                    <Image source={require("../assets/close.png")} ></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                                onPress={() => saveData()}>
                    <Text style={styles.textButton}>Post</Text>
                </TouchableOpacity>
            </View>
            <ScrollView >
                <TextInput
                    placeholderTextColor="#687684"
                    placeholder="What’s on your mind?"
                    style={styles.input}
                    multiline={true}
                    value={textInputPost}
                    onChangeText={text => setTextInputPost(text)}
                />
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#FFFF',
        paddingTop: 20,
        paddingHorizontal: 20
    },
    headContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    button: {
        backgroundColor: '#6454D4',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    textButton: {
        fontSize: 12,  color: '#FFFFFF', fontWeight: '700', textAlign: 'center',
    },
    input: {
        fontSize: 19,  color: '#000'
    },
    uploadContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:30
    },
    textUpload:{
        fontSize: 19,  color: '#6454D4', fontWeight: '500', marginLeft:10

    }
});

export default Post
