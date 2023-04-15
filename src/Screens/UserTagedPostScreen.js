import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react';
import { DEVICE_STYLES, moderateScale } from '../Config/Theme';
import CommonContainer from '../Component/CommonContainer';
import FastImage from 'react-native-fast-image';
import { DemoImage } from '../Assets/Images';


const UserTagedPostScreen = () => {
  return (
    <CommonContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: '100%',
          height: '100%',
        }}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            flexWrap: 'wrap',
            flexDirection: 'row'
          }}>
          {
            [...new Array(7)].map((_, index) => {
              return (
                <View
                  key={index}
                  style={styles.listContainer}
                >
                  <FastImage
                    source={DemoImage}
                    style={{
                      height: '100%',
                      width: '100%'
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                  />
                </View>
              )
            })
          }
        </View>
      </ScrollView>
    </CommonContainer>
  )
}

export default UserTagedPostScreen;

const styles = StyleSheet.create({
  listContainer: {
    width: DEVICE_STYLES.SCREEN_WIDTH / 3,
    height: moderateScale(124),
    aspectRatio: 1,
    backgroundColor: 'green'
  }
})