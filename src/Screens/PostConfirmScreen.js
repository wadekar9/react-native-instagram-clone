import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { Colors, Fonts, moderateScale } from '../Config/Theme';
import Icon, { Icons } from '../Config/Icons';
import CommonContainer from '../Component/CommonContainer';
import { CommonActions, useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import { DemoPost } from '../Assets/Images/index';

const Divider = () => {
    return (
        <View style={styles.deviderStyle} />
    )
}

const PostConfirmScreen = () => {

    const navigation = useNavigation();
    const [details, setDetails] = useState({
        description: ''
    })

    function HeaderComponent() {
        return (
            <View style={styles.headerContainer}>
                <View style={{ flex: 0.15, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => navigation.goBack()}
                        accessibilityRole={'button'}
                    >
                        <Icon
                            name={'keyboard-backspace'}
                            type={Icons.MaterialIcons}
                            size={moderateScale(28)}
                            color={'#000000'}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 0.85, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: moderateScale(13) }}>
                    <Text style={{ fontFamily: Fonts.Bold, fontSize: moderateScale(17), color: '#262626' }}>New Post</Text>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {
                            navigation.dispatch(CommonActions.reset({
                                index : 0,
                                routes : [
                                    { name : 'BottomNavigator' }
                                ]
                            }))
                        }}
                        accessibilityRole={'button'}
                    >
                        <Icon
                            name={'check'}
                            size={moderateScale(28)}
                            color={Colors.SECONDARY_COLOR}
                            type={Icons.Octicons}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <CommonContainer>
            <HeaderComponent />

            <View style={{ flex: 1 }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'stretch', justifyContent: 'flex-start' }}>
                        <View style={{ flex: 0.20, alignItems: 'center', justifyContent: 'center', paddingVertical: moderateScale(5) }}>
                            <FastImage
                                source={DemoPost}
                                style={{
                                    width: '80%',
                                    height: undefined,
                                    aspectRatio: 1
                                }}
                            />
                        </View>
                        <View style={{ flex: 0.8, alignSelf: 'center', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                            <TextInput
                                value={details.description}
                                onChangeText={(e) => setDetails((prev) => ({ ...prev, description: e }))}
                                placeholder={'write your description'}
                                placeholderTextColor={Colors.SECONDARY_GRAY}
                                style={styles.descriptionStyle}
                                multiline={true}
                                autoCapitalize={'none'}
                                autoCorrect={false}
                            />
                        </View>
                    </View>

                    <Divider />
                    <View style={{padding : moderateScale(8)}}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            accessibilityRole={'button'}
                            onPress={() => console.log('preseee')}
                        >
                            <Text style={styles.commonTextStyle}>Tag People</Text>
                        </TouchableOpacity>
                    </View>
                    <Divider />
                    <View style={{padding : moderateScale(8)}}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            accessibilityRole={'button'}
                            onPress={() => console.log('preseee')}
                        >
                            <Text style={styles.commonTextStyle}>Add Location</Text>
                        </TouchableOpacity>
                    </View>
                    <Divider />
                </ScrollView>
            </View>
        </CommonContainer>
    )
}

export default PostConfirmScreen

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'stretch',
        height: moderateScale(44),
    },
    descriptionStyle: {
        fontFamily: Fonts.Regular,
        fontSize: moderateScale(13.5),
        width: '96%',
        flexWrap: 'wrap'
    },
    deviderStyle: {
        marginVertical: moderateScale(4),
        backgroundColor: Colors.LIGHT_GRAY,
        height: StyleSheet.hairlineWidth + 0.2
    },
    commonTextStyle : {
        fontFamily : Fonts.Regular,
        fontSize : moderateScale(14),
        color : Colors.SECONDARY_BLACK,
        textAlign : 'left'
    }
})