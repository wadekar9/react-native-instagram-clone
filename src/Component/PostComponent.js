import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import { Colors, DEVICE_STYLES, Fonts, moderateScale } from '../Config/Theme';
import FastImage from 'react-native-fast-image';
import { DemoUser, DemoPost } from '../Assets/Images';
import { MoreIcon, VerifiedBadgeIcon, HeartOutlineIcon, MessangerOutlineIcon, CommentOutlineIcon, SaveOutlineIcon } from '../Assets/Icons';

const dempPostArr = [
  DemoPost, DemoPost, DemoPost
]

const PostComponent = () => {

  const imageContainer = ({ item, index }) => {
    return (
      <View style={styles.postMediaContainer}>
        <FastImage
          source={item}
          style={{
            height: '100%',
            width: '100%',
            aspectRatio: 1
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.postHeaderStyle}>
        <View style={{ flex: 0.1 }}>
          <FastImage
            source={DemoUser}
            style={{
              width: moderateScale(32),
              height: moderateScale(32),
              borderRadius: moderateScale(32 / 2),
              aspectRatio: 1
            }}
          />
        </View>
        <View style={{ flex: 0.9, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ flex: 0.88 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-start' }}>
              <Text style={{ fontFamily: Fonts.SemiBold, fontSize: moderateScale(12.5), color: Colors.SECONDARY_BLACK, textAlign: 'left', textTransform: 'lowercase', marginRight: moderateScale(3.5) }}>wadekar</Text>
              <VerifiedBadgeIcon />
            </View>
            <Text style={{ fontFamily: Fonts.Regular, fontSize: moderateScale(10.2), color: Colors.SECONDARY_BLACK, textAlign: 'left', textTransform: 'capitalize' }}>Tokyo, Japan</Text>
          </View>
          <View style={{ flex: 0.12, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity>
              <MoreIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.postMediaContainer}>
        <FlatList
          data={dempPostArr}
          horizontal
          pagingEnabled
          snapToInterval={DEVICE_STYLES.SCREEN_WIDTH}
          decelerationRate={'fast'}
          keyExtractor={(_, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={imageContainer}
          legacyImplementation={true}
          maxToRenderPerBatch={1}
          initialNumToRender={1}
          bouncesZoom={false}
        />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',paddingVertical : moderateScale(10) }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', flex: 0.32 }}>
          <HeartOutlineIcon />
          <CommentOutlineIcon />
          <MessangerOutlineIcon />
        </View>
        <View style={{ flex: 0.68, alignItems: 'flex-end', justifyContent: 'center', paddingRight: moderateScale(10) }}>
          <SaveOutlineIcon />
        </View>
      </View>
    </View>
  )
}

export default memo(PostComponent);

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  postHeaderStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: moderateScale(54),
    paddingHorizontal: moderateScale(8)
  },
  postMediaContainer: {
    width: DEVICE_STYLES.SCREEN_WIDTH,
    height: undefined,
    aspectRatio: 1,
    backgroundColor: 'red'
  }
})