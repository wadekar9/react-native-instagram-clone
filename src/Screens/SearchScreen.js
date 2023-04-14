import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { LiveIcon } from '../Assets/Icons/index';
import { moderateScale } from '../Config/Theme';
import SearchBarComponent from '../Component/SearchBarComponent';
import CommonContainer from '../Component/CommonContainer';

const SearchScreen = () => {
  return (
    <CommonContainer>
      <ScrollView>
        <View style={{flexDirection : 'row',alignItems: 'center',padding: moderateScale(12)}}>
          <View style={{flex : 1}}>
          <SearchBarComponent />
          </View>
          <TouchableOpacity>
            <LiveIcon />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </CommonContainer>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})