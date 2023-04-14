import { FlatList, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native'
import React, { memo, useCallback, useState } from 'react'
import { Colors, DEVICE_STYLES, Fonts, moderateScale } from '../Config/Theme';
import FastImage from 'react-native-fast-image';
import { DemoUser, DemoPost } from '../Assets/Images';
import { MoreIcon, VerifiedBadgeIcon, HeartOutlineIcon, MessangerOutlineIcon, CommentOutlineIcon, SaveOutlineIcon } from '../Assets/Icons';

const dempPostArr = [
  DemoPost, DemoPost, DemoPost
]

const PostComponent = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewCallBack = useCallback((item) => {
    setCurrentIndex(item.viewableItems[0]?.index)
  },[]);

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

  const paginationDotComponent = () => {
    return (
      <View style={{ width: '100%', alignItems: 'center', position: 'absolute' }}>
        <View style={styles.paginationDotComponentContainer}>
          {
            dempPostArr.map((_, index) => {
              return <View key={index} style={[styles.dotContainer, { backgroundColor: currentIndex == index ? Colors.SECONDARY_COLOR : 'rgba(0,0,0,0.15)' }]} />
            })
          }
        </View>
      </View>
    )
  }

  const paginationNumberComponent = () => {
    return(
      <View style={styles.paginationNumberContainer}>
        <Text style={{fontFamily: Fonts.Regular, fontSize: moderateScale(12),color: Colors.WHITE}}>
          {`${currentIndex+1}/${dempPostArr.length}`}
        </Text>
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
          bouncesZoom={false}
          initialNumToRender={1}
          maxToRenderPerBatch={1}
          decelerationRate={'fast'}
          legacyImplementation={true}
          renderItem={imageContainer}
          // onViewableItemsChanged={onViewCallBack}
          snapToInterval={DEVICE_STYLES.SCREEN_WIDTH}
          keyExtractor={(_, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
        />
        {paginationNumberComponent()}
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: moderateScale(10) }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', flex: 0.32 }}>
          <HeartOutlineIcon />
          <CommentOutlineIcon />
          <MessangerOutlineIcon />
        </View>
        <View style={{ flex: 0.68, alignItems: 'flex-end', justifyContent: 'center', paddingRight: moderateScale(10) }}>
          <SaveOutlineIcon />
        </View>
        {paginationDotComponent()}
      </View>
      <View style={{ paddingHorizontal: moderateScale(15) }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
          <FastImage
            source={DemoUser}
            style={{
              height: moderateScale(17),
              width: moderateScale(17),
              aspectRatio: 1,
              borderRadius: moderateScale(17 / 2)
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginLeft: moderateScale(8) }}>
            <Text style={[styles.commonTextStyle, { fontFamily: Fonts.Regular }]}>Liked By&nbsp;</Text>
            <Text style={[styles.commonTextStyle, { fontFamily: Fonts.SemiBold }]}>virat_kohli&nbsp;</Text>
            <Text style={[styles.commonTextStyle, { fontFamily: Fonts.Regular }]}>and&nbsp;</Text>
            <Text style={[styles.commonTextStyle, { fontFamily: Fonts.SemiBold }]}>46,800 others&nbsp;</Text>
          </View>
        </View>
        <View style={{ marginVertical: moderateScale(5) }}>
          <Text style={styles.commentStyle}>joshua_l&nbsp;<Text style={{ fontFamily: Fonts.Regular }}>The game in Japan was amazing and I want to share some photos</Text></Text>
        </View>
        <View style={{ marginBottom: moderateScale(8) }}>
          <Text style={styles.textStyle}>15 August</Text>
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
  },
  commentStyle: {
    fontFamily: Fonts.SemiBold,
    color: Colors.SECONDARY_BLACK,
    fontSize: moderateScale(13),
    textAlign: 'left'
  },
  commonTextStyle: {
    fontSize: moderateScale(13),
    color: Colors.SECONDARY_BLACK
  },
  textStyle: {
    fontFamily: Fonts.Regular,
    fontSize: moderateScale(11),
    color: 'rgba(0,0,0,0.4)',
    textAlign: 'left',
    textTransform: 'capitalize'
  },
  dotContainer: {
    height: moderateScale(6),
    width: moderateScale(6),
    borderRadius: moderateScale(3),
    margin: moderateScale(1.4)
  },
  paginationDotComponentContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  paginationNumberContainer : {
    position: 'absolute',
    right: moderateScale(10),
    top : moderateScale(10),
    backgroundColor: 'rgba(18,18,18,0.7)',
    alignItems : 'center',
    justifyContent : 'center',
    width : moderateScale(34),
    height : moderateScale(26),
    borderRadius : moderateScale(13)
  }
})