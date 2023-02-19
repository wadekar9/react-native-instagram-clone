import { View, Text } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

//Screens
import HomeScreen from '../Screens/HomeScreen';
import AccountScreen from '../Screens/AccountScreen';
import SearchScreen from '../Screens/SearchScreen';
import AddScreen from '../Screens/AddScreen';
import NotificationScreen from '../Screens/NotificationScreen';

const BottomNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='HomeScreen'
                component={HomeScreen}
            />
            <Tab.Screen
                name='SearchScreen'
                component={SearchScreen}
            />
            <Tab.Screen
                name='AddScreen'
                component={AddScreen}
            />
            <Tab.Screen
                name='NotificationScreen'
                component={NotificationScreen}
            />
            <Tab.Screen
                name='AccountScreen'
                component={AccountScreen}
            />
        </Tab.Navigator>
    )
}

export default BottomNavigator