import { View, SafeAreaView } from 'react-native';
import CustomStatusBar from './CustomStatusBar';
import React from 'react';

const CommonContainer = ({barStyle,bgColor,children}) => {
    return (
        <SafeAreaView style={{flex : 1,backgroundColor: '#fff'}}>
            <CustomStatusBar barStyle={barStyle} bgColor={bgColor} />
            <View style={{flex : 1}}>
                {children}
            </View>
        </SafeAreaView>
    )
}

export default CommonContainer;