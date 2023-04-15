import React from 'react';
import { DemoUser } from '../Images/index';
import FastImage from 'react-native-fast-image';
import { Colors, moderateScale } from '../../Config/Theme';
import { StyleSheet, Text, View } from 'react-native';

const LoggedInUser = ({ isFocused = false }) => {
    return (
        isFocused ?
            <View style={styles.focusedImageContainer}>
                <FastImage
                    source={DemoUser}
                    style={{
                        height: moderateScale(23),
                        width: moderateScale(23),
                        borderRadius : moderateScale(23/2),
                        aspectRatio: 1
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                />
            </View>
            :
            <View style={{ height: moderateScale(23), width: moderateScale(23), aspectRatio: 1, borderRadius: moderateScale(23 / 2), overflow: 'hidden' }}>
                <FastImage
                    source={DemoUser}
                    style={{
                        height: '100%',
                        width: '100%',
                        aspectRatio: 1
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                />
            </View>
    )
}

export default LoggedInUser

const styles = StyleSheet.create({
    focusedImageContainer : {
        height: moderateScale(27),
        width: moderateScale(27),
        aspectRatio: 1,
        borderRadius: moderateScale(27 / 2),
        alignItems : 'center',
        justifyContent : 'center',
        borderWidth : 1,
        borderColor : Colors.SECONDARY_BLACK
    }
})