import React from 'react'
import { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'

export const PostList = ({ navigation }) => {

}

const Home = () => {
    const [data, setData] = useState([])
    const [username, setUsername] = useState()

    const getData = async () => {
        try {
            const response = await fetch("http://10.0.2.2:3000/post/")
            const json = await response.json()
            setData(json.data)
            console.log(data)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <ScrollView style={{ backgroundColor: '#FFF' }}>
            <View style={styles.page}>
                <View style={styles.headContainer}>
                    <Text style={styles.title}>Timeline</Text>
                    <View style={styles.profileContainer}>
                        <Text numberOfLines={1} style={styles.name}>Username placeholder</Text>
                        {/* <Image source={require("../assets/profile_dummy.png")} style={styles.photoProfile}></Image> */}
                    </View>
                </View>
                {
                data.map((item) => (
                <View style={styles.postContainer}>
                    <View style={styles.postProfileContainer}>
                        {/* <Image source={require("../assets/user_profile.png")} style={styles.photoPost}></Image> */}
                        <View style={styles.postProfileTextContainer}>
                            <Text style={styles.postName}>{item.username}</Text>
                            {/* <Text style={styles.date}>2 hours ago</Text> */}
                        </View>
                    </View>
                    <Text style={styles.content}>{item.post_detail}</Text>
                    <View style={styles.reactionContainer}>
                        {/* <Image source={require("../assets/ic_like.png")} style={styles.ic}></Image> */}
                        <Image source={require("../assets/ic_comment.png")} style={styles.ic}></Image>
                        {/* <Image source={require("../assets/ic_share.png")} style={styles.ic}></Image> */}
                    </View>
                </View>
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor: '#FFF',
    },
    headContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profileContainer: {
        flexDirection: 'row',
        backgroundColor: '#6454D4',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: 'center',
        flex: 1 / 2
    },
    title: {
        fontSize: 16, color: '#213562', fontWeight: '600', flex: 1
    },
    name: {
        fontSize: 12, color: '#FFFFFF', fontWeight: '700', textAlign: 'center', flex: 1
    },
    photoProfile: {
        width: 25, height: 25, borderRadius: 25
    },
    postContainer: {
        marginTop: 24,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 10,
        elevation: 5,
        backgroundColor: 'white',
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 10
    },
    postProfileContainer: {
        flexDirection: 'row',
        paddingBottom: 12
    },
    postProfileTextContainer: {
        marginLeft: 12
    },
    photoPost: {
        width: 55, height: 55, borderRadius: 55
    },
    postName: {
        fontSize: 16, color: '#000', fontWeight: '400'
    },
    date: {
        fontSize: 12, color: '#5E5D5D', fontWeight: '500'
    },
    content: {
        fontSize: 16, color: '#000', fontWeight: '400'
    },
    reactionContainer: {
        flexDirection: 'row',
        paddingTop: 14,
        // justifyContent: 'space-between'
        justifyContent: 'center'
    }

});



export default Home
