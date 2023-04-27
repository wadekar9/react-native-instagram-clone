import { View, StatusBar, SafeAreaView } from 'react-native'
import React from 'react';
import { Colors } from '../Config/Theme';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const { PRIMARY_WHITE_COLOR } = Colors;

const CustomStatusBar = ({ bgColor = PRIMARY_WHITE_COLOR, barStyle = 'dark-content' }) => {
    return (
        <View style={{ height: STATUSBAR_HEIGHT, backgroundColor: bgColor }}>
            <SafeAreaView>
                <StatusBar barStyle={barStyle} translucent backgroundColor={bgColor} />
            </SafeAreaView>
        </View>
    )
}

export default CustomStatusBar;