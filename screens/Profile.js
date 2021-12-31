import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'

const Profile = () => {
    return (
        <ScrollView style={{ backgroundColor: '#DBE9F7' }}>
            <View style={styles.page}>
                <View style={styles.headContainer}>
                    <View style={styles.headProfileContainer}>
                        <Text style={styles.title}>Profile</Text>
                        <Text style={styles.title}>Logout</Text>
                    </View>
                    <View style={styles.profileContainer}>
                        <Image source={require("../assets/profile_dummy.png")} style={styles.photoPost}></Image>
                        <Text style={styles.name}>OLIVIA KURNIAWATI</Text>
                    </View>
                </View>
                <View style={styles.postContainer}>
                    <View style={styles.postProfileContainer}>
                        <Image source={require("../assets/profile_dummy.png")} style={styles.photoPost}></Image>
                        <View style={styles.postProfileTextContainer}>
                            <Text style={styles.postName}>OLIVIA KURNIAWATI</Text>
                            <Text style={styles.date}>2 hours ago</Text>
                        </View>
                        <Image source={require("../assets/ic_more.png")}></Image>
                    </View>
                    <Text style={styles.content}>aku capek.</Text>
                    <View style={styles.reactionContainer}>
                        <View style={styles.ic}>
                            <Image source={require("../assets/ic_trash.png")}></Image>
                        </View>
                        <View style={styles.ic}>
                            <Image source={require("../assets/ic_edit.png")}></Image>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 30,
        backgroundColor: '#DBE9F7',
    },
    headContainer: {
        backgroundColor: 'white',
        paddingTop: 30,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20
    },
    headProfileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name: {
        fontSize: 16,  color: '#000', fontWeight: '600', marginLeft: 10
    },
    title: {
        fontSize: 16,  color: '#213562', fontWeight: '600'
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
        marginLeft: 12,
        flex: 1
    },
    photoPost: {
        width: 55, height: 55, borderRadius: 55
    },
    postName: {
        fontSize: 16,  color: '#000', fontWeight: '400',
    },
    date: {
        fontSize: 12,  color: '#5E5D5D', fontWeight: '500'
    },
    content: {
        fontSize: 16,  color: '#000', fontWeight: '400'
    },
    reactionContainer: {
        flexDirection: 'row',
        paddingTop: 14,
    },
    ic: {
        flex:1
    }

});



export default Profile
