import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Colors, Fonts, moderateScale } from '../Config/Theme';
import { MiniSearchIcon } from '../Assets/Icons/index';

const SearchBarComponent = ({
  search,
  onChangeSearch
}) => {
  return (
    <View style={styles.container}>
      <MiniSearchIcon />
      <View style={{flex : 1,justifyContent: 'center',marginLeft : moderateScale(3)}}>
        <TextInput
          value={search}
          onChangeText={(e) => onChangeSearch(e)}
          keyboardType={'default'}
          placeholder='Search'
          accessibilityRole={'search'}
          returnKeyType={'search'}
          placeholderTextColor={'rgba(60, 60, 67, 0.6)'}
          textBreakStrategy={'highQuality'}
          style={styles.inputStyle}
        />
      </View>
    </View>
  )
}

export default SearchBarComponent

const styles = StyleSheet.create({
  container : {
    backgroundColor : 'rgba(118, 118, 128, 0.12)',
    height : moderateScale(40),
    borderRadius : moderateScale(10),
    width : '97%',
    flexDirection : 'row',
    alignItems : 'center',
    paddingHorizontal : moderateScale(8),
    overflow : 'hidden'
  },
  inputStyle : {
    fontFamily : Fonts.Regular,
    fontSize : moderateScale(16),
    color : Colors.SECONDARY_BLACK,
    height : moderateScale(40)
  }
})