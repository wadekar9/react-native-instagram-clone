import { TouchableOpacity, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react';
import { Colors, Fonts, moderateScale } from '../Config/Theme';
import { ActivityIcon, ArchiveIcon, NameTagIcon, SaveOutlineIcon, StarMenuIcon, SettingIcon, ProfilePlusIcon, FacebookIcon } from '../Assets/Icons/index';
import CommonContainer from './CommonContainer'
// import { DrawerContentScrollView } from '@react-navigation/drawer';

const CustomDrawerComponent = (props) => {

    const labels = [
        {
            icon: () => <ArchiveIcon />,
            labelName: 'Archive'
        },
        {
            icon: () => <ActivityIcon />,
            labelName: 'Your Activity'
        },
        {
            icon: () => <NameTagIcon />,
            labelName: 'Nametag'
        },
        {
            icon: () => <SaveOutlineIcon />,
            labelName: 'Saved'
        },
        {
            icon: () => <StarMenuIcon />,
            labelName: 'Closed Friends'
        },
        {
            icon: () => <ProfilePlusIcon />,
            labelName: 'Discover People'
        },
        {
            icon: () => <FacebookIcon />,
            labelName: 'Open Facebook'
        }
    ]

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.92 }}>
                <ScrollView {...props} >
                    <View style={{ padding: moderateScale(16) }}>
                        <Text style={{ fontFamily: Fonts.Regular, fontSize: moderateScale(15), color: Colors.SECONDARY_BLACK }}>s.khasanov_</Text>
                    </View>
                    <View>
                        {
                            labels.map((element, index) => {

                                const ElementIcon = element.icon

                                return (
                                    <TouchableOpacity
                                        key={index}
                                        activeOpacity={0.7}
                                        style={{ flexDirection: 'row', alignItems: 'center', height: moderateScale(49) }}
                                    >
                                        <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
                                            <ElementIcon />
                                        </View>
                                        <View style={{ flex: 0.8 }}>
                                            <Text style={{ fontFamily: Fonts.Regular, fontSize: moderateScale(15), color: Colors.SECONDARY_BLACK }}>{element.labelName}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </ScrollView>
            </View>

            <View style={{ flex: 0.08 }}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={{ flexDirection: 'row', alignItems: 'center', height: moderateScale(49) }}
                >
                    <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
                        <SettingIcon />
                    </View>
                    <View style={{ flex: 0.8 }}>
                        <Text style={{ fontFamily: Fonts.Regular, fontSize: moderateScale(15), color: Colors.SECONDARY_BLACK }}>Settings</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomDrawerComponent

const styles = StyleSheet.create({})