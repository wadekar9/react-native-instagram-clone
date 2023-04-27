import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Colors } from '../Config/Theme';
import CommonContainer from '../Component/CommonContainer';

const StoryScreen = () => {
  return (
    <CommonContainer
      barStyle={'light-content'}
      bgColor={Colors.SECONDARY_BLACK}
    >
      <View style={{ flex: 1, backgroundColor: Colors.SECONDARY_BLACK }}>

      </View>
    </CommonContainer>
  )
}

export default StoryScreen

const styles = StyleSheet.create({})