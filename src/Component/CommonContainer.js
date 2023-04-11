import { View, SafeAreaView } from 'react-native'
import React from 'react'

const CommonContainer = ({children}) => {
    return (
        <SafeAreaView style={{flex : 1,backgroundColor: '#fff'}}>
            <View style={{flex : 1}}>
                {children}
            </View>
        </SafeAreaView>
    )
}

export default CommonContainer;