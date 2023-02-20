import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon, { Icons } from '../Config/Icons';

const Tab = createBottomTabNavigator();

//Screens
import HomeScreen from '../Screens/HomeScreen';
import AccountScreen from '../Screens/AccountScreen';
import SearchScreen from '../Screens/SearchScreen';
import AddScreen from '../Screens/AddScreen';
import NotificationScreen from '../Screens/NotificationScreen';
import { CommonActions, useNavigation } from '@react-navigation/native';

const BottomNavigator = () => {

    const safeAreaInset = useSafeAreaInsets();
    const navigation = useNavigation();

    return (
        <Tab.Navigator
            safeAreaInsets={{
                top : safeAreaInset.top,
                bottom : safeAreaInset.bottom,
                right : safeAreaInset.right,
                left : safeAreaInset.left
            }}
            screenOptions={{
                headerShown : false,
                tabBarShowLabel : false
            }}
        >
            <Tab.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                    tabBarIcon : ({focused}) => {
                        return(
                            <Icon
                                type={Icons.Ionicons}
                                name={focused ? 'home' : 'home-outline'}
                                size={25}
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name='SearchScreen'
                component={SearchScreen}
                options={{
                    tabBarIcon : ({focused}) => {
                        return(
                            <Icon
                                type={Icons.Ionicons}
                                size={28}
                                name={ focused ? 'ios-search' : 'search-outline'}
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name='AddScreen'
                component={AddScreen}
                listeners={{
                    tabPress : (e) => {
                        e.preventDefault();
                        navigation.dispatch(CommonActions.navigate('StoryScreen'))
                    }
                }}
                options={{
                    tabBarIcon : () => {
                        return(
                            <Icon
                                type={Icons.AntDesign}
                                name={'plussquareo'}
                                size={25}
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name='NotificationScreen'
                component={NotificationScreen}
                options={{
                    tabBarIcon : ({focused}) => {
                        return(
                            <Icon
                                type={Icons.AntDesign}
                                name={ focused ? 'heart' : 'hearto'}
                                size={25}
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name='AccountScreen'
                component={AccountScreen}
                options={{
                    tabBarIcon : () => {
                        return(
                            <Icon
                                type={Icons.AntDesign}
                                name={'smile-circle'}
                                size={25}
                            />
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomNavigator