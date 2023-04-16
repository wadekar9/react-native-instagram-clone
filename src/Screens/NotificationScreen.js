import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import CommonContainer from '../Component/CommonContainer';
import { Colors, Fonts, moderateScale } from '../Config/Theme';
import { DemoImage, DemoUser, DemoPost } from '../Assets/Images/index';
import FastImage from 'react-native-fast-image';

const NotificationScreen = () => {

  const notificationData = [
    {
      label: 'New',
      notificationType: 1,
      data: [
        {
          id: 1,
          isFollowAction: false,
          isFollowing: false,
          isPostAction: true,
          postMedia: DemoPost,
          isPostVideo: false,
          isMultiUser: false,
          userName: ['karennne'],
          userImage: [DemoUser, DemoUser, DemoUser],
          message: 'liked your photo.',
          duration: '1h',
        }
      ]
    },
    {
      label: 'Today',
      notificationType: 2,
      data: [
        {
          id: 1,
          isFollowAction: false,
          isFollowing: false,
          isPostAction: true,
          postMedia: DemoPost,
          isPostVideo: false,
          message: 'and 26 others liked your photo.',
          userName: ['kiero_d', 'zackjohn'],
          isMultiUser: true,
          userImage: [
            DemoUser,
            DemoUser,
            DemoUser
          ],
          duration: '3h',
        }
      ]
    },
    {
      label: 'This Week',
      notificationType: 3,
      data: [
        {
          id: 1,
          isFollowAction: true,
          isFollowing: true,
          isPostAction: false,
          postMedia: DemoPost,
          isPostVideo: false,
          message: 'mentioned you in a comment: @jacob_w exactly..',
          userName: ['craig_love'],
          isMultiUser: false,
          userImage: [
            DemoUser,
            DemoUser,
            DemoUser
          ],
          duration: '2d',
        },
        {
          id: 2,
          isFollowAction: true,
          isFollowing: true,
          isPostAction: false,
          postMedia: DemoPost,
          isPostVideo: false,
          message: 'started following you.',
          userName: ['martini_rond'],
          isMultiUser: false,
          userImage: [
            DemoUser,
            DemoUser,
            DemoUser
          ],
          duration: '3d',
        },
        {
          id: 3,
          isFollowAction: true,
          isFollowing: false,
          isPostAction: false,
          postMedia: DemoPost,
          isPostVideo: false,
          message: 'started following you.',
          userName: ['maxjacobson'],
          isMultiUser: false,
          userImage: [
            DemoUser,
            DemoUser,
            DemoUser
          ],
          duration: '3d',
        },
        {
          id: 4,
          isFollowAction: true,
          isFollowing: false,
          isPostAction: false,
          postMedia: DemoPost,
          isPostVideo: false,
          message: 'started following you.',
          userName: ['mis_potter'],
          isMultiUser: false,
          userImage: [
            DemoUser,
            DemoUser,
            DemoUser
          ],
          duration: '3d',
        }
      ]
    },
    {
      label: 'This Month',
      notificationType: 4,
      data: [
        {
          id: 1,
          isFollowAction: true,
          isFollowing: true,
          isPostAction: false,
          postMedia: DemoPost,
          isPostVideo: false,
          message: 'started following you.',
          userName: ['mis_potter'],
          isMultiUser: false,
          userImage: [
            DemoUser,
            DemoUser,
            DemoUser
          ],
          duration: '3d',
        },
        {
          id: 2,
          isFollowAction: false,
          isFollowing: false,
          isPostAction: true,
          postMedia: DemoPost,
          isPostVideo: false,
          isMultiUser: false,
          userName: ['karennne'],
          userImage: [DemoUser, DemoUser, DemoUser],
          message: 'liked your photo.',
          duration: '1h',
        },
        {
          id: 3,
          isFollowAction: false,
          isFollowing: false,
          isPostAction: true,
          postMedia: DemoPost,
          isPostVideo: false,
          message: 'and 26 others liked your photo.',
          userName: ['kiero_d', 'zackjohn'],
          isMultiUser: true,
          userImage: [
            DemoUser,
            DemoUser,
            DemoUser
          ],
          duration: '3h',
        },
        {
          id: 4,
          isFollowAction: true,
          isFollowing: false,
          isPostAction: false,
          postMedia: DemoPost,
          isPostVideo: false,
          message: 'started following you.',
          userName: ['mis_potter'],
          isMultiUser: false,
          userImage: [
            DemoUser,
            DemoUser,
            DemoUser
          ],
          duration: '3d',
        }
      ]
    }
  ]

  const NotificationContainer = ({ type, data }) => {

    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: moderateScale(10) }}>
        <View style={{ flex: 0.16 }}>
          {
            (data.isMultiUser)
          }
          <FastImage
            source={data.userImage[0]}
            style={{
              height: moderateScale(44),
              width: moderateScale(44),
              borderRadius: moderateScale(44 / 2),
              aspectRatio: 1
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>
        <View style={{ flex: 0.84, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ flex: 0.65, flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
            <Text style={{ fontFamily: Fonts.SemiBold, color: Colors.SECONDARY_BLACK, fontSize: moderateScale(13), maxWidth: '95%' }}>{data.userName.join(',')}&nbsp;<Text style={{ fontFamily: Fonts.Regular }}>{data.message}</Text><Text style={{ fontFamily: Fonts.Regular, color: Colors.SECONDARY_GRAY }}>&nbsp;{data.duration}</Text></Text>
          </View>
          <View style={{ flex: 0.35, alignItems: 'center', justifyContent: 'center' }}>

            {
              (data.isFollowAction) ?
                <TouchableOpacity
                  activeOpacity={0.8}
                  accessibilityRole={'button'}
                  style={[styles.followBtnContainer, { backgroundColor: (data.isFollowing) ? Colors.WHITE : Colors.SECONDARY_COLOR, borderColor: (data.isFollowing) ? Colors.LIGHT_GRAY : Colors.SECONDARY_COLOR, }]}
                >
                  <Text style={[styles.followBtnContainerText, { color: (data.isFollowing) ? Colors.BLACK : Colors.WHITE }]}>
                    {
                      (data.isFollowing) ? 'Message' : 'Follow'
                    }
                  </Text>
                </TouchableOpacity>
                :
                <FastImage
                  source={data.postMedia}
                  style={{
                    height: moderateScale(44),
                    width: moderateScale(44),
                    aspectRatio: 1
                  }}
                  resizeMode={FastImage.resizeMode.cover}
                />
            }
          </View>
        </View>
      </View>
    )
  }

  return (
    <CommonContainer>
      <FlatList
        data={notificationData}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={styles.listContainer}>
              <View style={{ marginBottom: moderateScale(10) }}>
                <Text style={styles.labelStyle}>{item.label}</Text>
              </View>

              {
                item.data.map((element, index) => {
                  return (
                    <NotificationContainer data={element} type={item.notificationType} key={index} />
                  )
                })
              }
            </View>
          )
        }}
      />
    </CommonContainer>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({
  listContainer: {
    borderBottomWidth: 0.8,
    borderColor: Colors.LIGHT_GRAY,
    paddingLeft: moderateScale(15),
    paddingRight : moderateScale(8),
    paddingTop: moderateScale(8),
    paddingBottom: 0
  },
  labelStyle: {
    fontFamily: Fonts.SemiBold,
    fontSize: moderateScale(15),
    color: Colors.SECONDARY_BLACK
  },
  followBtnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: moderateScale(28),
    borderRadius: moderateScale(4),
    borderWidth: 1,
    width: '90%'
  },
  followBtnContainerText: {
    fontFamily : Fonts.SemiBold,
    fontSize : moderateScale(13.5)
  }
})