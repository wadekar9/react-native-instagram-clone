import { Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

//Screen and Navigators
import LoginScreen from '../Screens/LoginScreen';
import SplashScreen from '../Screens/SplashScreen';
import ChatScreen from '../Screens/ChatScreen';
import StoryScreen from '../Screens/StoryScreen';
import ProfileSettingScreen from '../Screens/ProfileSettingScreen';
import DrawerNavigator from './DrawerNavigator';
import NotificationScreen from '../Screens/NotificationScreen';

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    animation: 'slide_from_right',
                    orientation: 'portrait'
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
                    name='DrawerNavigator'
                    component={DrawerNavigator}
                />
                <Stack.Screen
                    name='ChatScreen'
                    component={ChatScreen}
                />
                <Stack.Screen
                    name='StoryScreen'
                    component={StoryScreen}
                    options={{
                        animation: 'slide_from_left'
                    }}
                />
                <Stack.Screen
                    name='ProfileSettingScreen'
                    component={ProfileSettingScreen}
                />
                <Stack.Screen
                    name='NotificationScreen'
                    component={NotificationScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator;