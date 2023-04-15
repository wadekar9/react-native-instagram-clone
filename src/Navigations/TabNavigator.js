import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import NotificationScreen from '../Screens/NotificationScreen';
import { Colors, Fonts, moderateScale } from '../Config/Theme';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle : {
                    height : moderateScale(50),
                    backgroundColor : Colors.PRIMARY_WHITE_COLOR
                },
                tabBarLabelStyle : {
                    fontFamily : Fonts.Medium,
                    fontSize : moderateScale(15.5),
                    textTransform : 'capitalize'
                },
                tabBarActiveTintColor : Colors.SECONDARY_BLACK,
                tabBarInactiveTintColor : 'rgba(0,0,0,0.4)',
                tabBarIndicatorStyle : {
                    backgroundColor : Colors.SECONDARY_BLACK,
                    height : moderateScale(0.8)
                }
            }}
        >
            <Tab.Screen
                name='NotificationScreen'
                component={NotificationScreen}
                options={{
                    title : 'Following'
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator;