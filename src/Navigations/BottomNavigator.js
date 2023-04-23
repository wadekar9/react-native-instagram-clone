import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

//Screens
import HomeScreen from '../Screens/HomeScreen';
import SearchScreen from '../Screens/SearchScreen';
import AddStoryScreen from '../Screens/AddStoryScreen';
import AccountScreen from '../Screens/AccountScreen';
import ReelScreen from '../Screens/ReelScreen';
import TabNavigator from './TabNavigator';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { HomeFillIcon, HomeOutlineIcon, SearchFillIcon, SearchOutlineIcon, SquarePlusOutlineIcon, HeartFillIcon, LoggedInUser, ReelIcon } from '../Assets/Icons/index';
import { Colors, moderateScale } from '../Config/Theme';

const BottomNavigator = () => {

    const safeAreaInset = useSafeAreaInsets();
    const navigation = useNavigation();

    return (
        <Tab.Navigator
            safeAreaInsets={{
                top: safeAreaInset.top,
                bottom: safeAreaInset.bottom,
                right: safeAreaInset.right,
                left: safeAreaInset.left
            }}
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: moderateScale(50),
                    backgroundColor : Colors.WHITE
                },
                tabBarHideOnKeyboard: true
            }}
        >
            <Tab.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => focused ? <HomeFillIcon /> : <HomeOutlineIcon />
                }}
            />
            <Tab.Screen
                name='SearchScreen'
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ focused }) => focused ? <SearchFillIcon /> : <SearchOutlineIcon />
                }}
            />
            <Tab.Screen
                name='AddStoryScreen1'
                component={AddStoryScreen}
                listeners={{
                    tabPress: (e) => {
                        e.preventDefault();
                        navigation.dispatch(CommonActions.navigate('AddPostScreen'))
                    }
                }}
                options={{
                    tabBarIcon: () => <SquarePlusOutlineIcon />
                }}
            />
            <Tab.Screen
                name='ReelScreen'
                component={ReelScreen}
                options={{
                    tabBarIcon: () => <ReelIcon />
                }}
            />
            <Tab.Screen
                name='AccountScreen'
                component={AccountScreen}
                options={{
                    tabBarIcon: ({ focused }) => <LoggedInUser isFocused={focused} />
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomNavigator