import { View, StatusBar, SafeAreaView } from 'react-native'
import React from 'react';
import { Colors } from '../Config/Theme';

const STATUSBAR_HEIGHT = StatusBar.currentHeight

const CustomStatusBar = () => {
    return (
        <View style={{ height: STATUSBAR_HEIGHT, backgroundColor: Colors.PRIMARY_WHITE_COLOR }}>
            <SafeAreaView>
                <StatusBar barStyle={'dark-content'} translucent backgroundColor={Colors.PRIMARY_WHITE_COLOR} />
            </SafeAreaView>
        </View>
    )
}

export default CustomStatusBar;