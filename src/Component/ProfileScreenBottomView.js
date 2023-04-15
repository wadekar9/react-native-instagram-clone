import React from 'react';
import UserPostScreen from '../Screens/UserPostScreen';
import { Colors, moderateScale } from '../Config/Theme';
import UserTagedPostScreen from '../Screens/UserTagedPostScreen';
import { GridIcon, TagIcon, FocusedTagIcon, NonFocusedGridIcon } from '../Assets/Icons/index';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const BottomTab = createMaterialTopTabNavigator();

const ProfileScreenBottomView = () => {
    return (
        <BottomTab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarPressOpacity: 0.1,
                tabBarIndicatorStyle: {
                    backgroundColor: Colors.SECONDARY_BLACK,
                    height: 1.5
                },
                tabBarPressColor: 'transparent',
                tabBarStyle: {
                    height: moderateScale(44)
                },
                swipeEnabled: true
            }}
        >
            <BottomTab.Screen
                name='PostScreen1'
                component={UserPostScreen}
                options={{
                    tabBarIcon: ({ focused }) => (focused) ? <GridIcon /> : <NonFocusedGridIcon />
                }}
            />
            <BottomTab.Screen
                name='PostScreen2'
                component={UserTagedPostScreen}
                options={{
                    tabBarIcon: ({ focused }) => (focused) ? <FocusedTagIcon /> : <TagIcon />
                }}
            />
        </BottomTab.Navigator>
    )
}

export default ProfileScreenBottomView;