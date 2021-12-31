import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

const Icon = ({ label, focus }) => {
    switch (label) {
        case 'Main':
            return focus ? <Image source={require("../assets/home_on.png")} />
                : <Image source={require("../assets/home_off.png")} />;
        case 'Post':
            return focus ? <Image source={require("../assets/ic_post.png")} /> : <Image source={require("../assets/ic_post.png")} />;
        case 'Profile':
            return focus ? <Image source={require("../assets/profile_on.png")} /> : <Image source={require("../assets/profile_off.png")} />;
        default:
            return <Image source={require("../assets/home_on.png")} />;
    }
};

const BottomNavigator = ({ state, descriptors, navigation }) => {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }
    

    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        activeOpacity={0.7}
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}>
                        <Icon label={label} focus={isFocused} />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default BottomNavigator;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingHorizontal: 49,
        paddingTop: 15,
        paddingBottom: 17,
        justifyContent: 'space-between',
        borderTopWidth: 0.5,
        borderTopColor: '#C4C4C4'
    }
});
