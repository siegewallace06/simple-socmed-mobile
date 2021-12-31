import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BottomNavigator from './components/BottomNavigator';
import SignUp from './screens/SignUp';
import SplashScreen from './screens/SplashScreen';
import Login from './screens/Login';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Post from './screens/Post';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
      
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />} initialRouteName="Main">
            <Tab.Screen
                name="Post"
                component={Post}
                options={{ headerShown: false, tabBarVisible:false }}
            />
            <Tab.Screen name="Main" component={Home} options={{ headerShown: false }} />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false}}
            />
        </Tab.Navigator>
    );
};

const Navigation = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen">
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
                <Stack.Screen
                    name="MainApp"
                    component={MainApp}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;