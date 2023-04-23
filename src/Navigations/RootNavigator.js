import React from 'react'
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

//Screen and Navigators
import LoginScreen from '../Screens/LoginScreen';
import SplashScreen from '../Screens/SplashScreen';
import ChatScreen from '../Screens/ChatScreen';
import StoryScreen from '../Screens/StoryScreen';
import ProfileSettingScreen from '../Screens/ProfileSettingScreen';
import BottomNavigator from './BottomNavigator';
import NotificationScreen from '../Screens/NotificationScreen';
import ChattingScreen from '../Screens/ChattingScreen';
import AddStoryScreen from '../Screens/AddStoryScreen';
import AddPostScreen from '../Screens/AddPostScreen';
import PostConfirmScreen from '../Screens/PostConfirmScreen';

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
                    name='BottomNavigator'
                    component={BottomNavigator}
                />
                <Stack.Screen
                    name='ChatScreen'
                    component={ChatScreen}
                />
                <Stack.Screen
                    name='ChattingScreen'
                    component={ChattingScreen}
                />
                <Stack.Screen
                    name='StoryScreen'
                    component={StoryScreen}
                    options={{
                        animation: 'fade_from_bottom',
                        animationDuration : 50
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
                <Stack.Screen
                    name='AddStoryScreen'
                    component={AddStoryScreen}
                    options={{
                        animation: 'slide_from_left'
                    }}
                />
                <Stack.Screen
                    name='AddPostScreen'
                    component={AddPostScreen}
                    options={{
                        animation: 'slide_from_left'
                    }}
                />
                <Stack.Screen
                    name='PostConfirmScreen'
                    component={PostConfirmScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator;