import { StyleSheet, Text, View, useWindowDimensions, Dimensions } from 'react-native'
import React from 'react'

const dime = Dimensions.get('window')

const HomeScreen = () => {

  const dimmmm = useWindowDimensions();

  console.log(dime)
  console.log("popopop",dimmmm)

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})