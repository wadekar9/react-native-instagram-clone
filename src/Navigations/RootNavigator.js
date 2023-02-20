import { Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

//Screen and Navigators
import BottomNavigator from './BottomNavigator';
import LoginScreen from '../Screens/LoginScreen';
import SplashScreen from '../Screens/SplashScreen';
import ChatScreen from '../Screens/ChatScreen';
import StoryScreen from '../Screens/StoryScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import AddScreen from '../Screens/AddScreen';

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    animation : 'slide_from_right',
                    statusBarColor : Platform.OS == 'android' ? '#fff' : undefined,
                    statusBarStyle : Platform.OS == 'android' ? 'dark' : undefined
                }}
                initialRouteName='SplashScreen'
            >
                <Stack.Screen
                    name='SplashScreen'
                    component={SplashScreen}
                />
                <Stack.Screen
                    name='LoginScreen'
                    component={LoginScreen}
                />
                <Stack.Screen
                    name='BottomNavigator'
                    component={BottomNavigator}
                />
                <Stack.Screen
                    name='ChatScreen'
                    component={ChatScreen}
                />
                <Stack.Screen
                    name='StoryScreen'
                    component={StoryScreen}
                    options={{
                        animation : 'slide_from_left'
                    }}
                />
                <Stack.Screen
                    name='ProfileScreen'
                    component={ProfileScreen}
                />
                {/* <Stack.Screen
            name='AddScreen'
            component={AddScreen}
        /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator;