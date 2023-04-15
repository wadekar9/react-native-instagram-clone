import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { Colors, Fonts, moderateScale } from '../Config/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CommonInputComponent = ({
    inputRef,
    value,
    onChange,
    onSubmit,
    keyboard = 'default',
    placeholder,
    maxLength = undefined,
    multiline = false,
    bottomLine = false
}) => {

    return (
        <View style={[styles.container, { borderBottomWidth: bottomLine ? 0.8 : 0, }]}>
            <TextInput
                ref={inputRef}
                value={value}
                onChangeText={(e) => onChange(e)}
                keyboardType={keyboard}
                onSubmitEditing={() => onSubmit()}
                maxLength={maxLength}
                multiline={multiline}
                placeholder={placeholder}
                autoCapitalize={'none'}
                autoCorrect={false}
                placeholderTextColor={Colors.LIGHT_GRAY}
                style={[styles.containerTextStyle]}
                cursorColor={Colors.SECONDARY_COLOR}
            />
        </View>
    )
}

export default CommonInputComponent;


const styles = StyleSheet.create({
    container: {
        borderColor: Colors.LIGHT_GRAY
    },
    containerTextStyle: {
        fontFamily: Fonts.Regular,
        fontSize: moderateScale(14.5),
        color: Colors.SECONDARY_BLACK,
        flexWrap : 'wrap',
        flex: 1,
        height : moderateScale(48)
    }
});