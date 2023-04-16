import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react';
import ReactNativeModal from 'react-native-modal';
import FastImage from 'react-native-fast-image';
import { Colors, moderateScale, DEVICE_STYLES, Fonts } from '../Config/Theme';
import { Rectangle, Rectangle2, Rectangle1, Rectangle3, Rectangle6, Rectangle7, Rectangle5, Rectangle11, Rectangle12, Rectangle13 } from '../Assets/Images/index'
import { VideoIcon, GalleryIcon, VerifiedBadgeIcon, MiniHeartIcon, ProfileMiniIcon, SendMiniIcon, MoreMiniIcon } from '../Assets/Icons/index';
import CommonContainer from '../Component/CommonContainer';
import SearchBarComponent from '../Component/SearchBarComponent';

const SearchScreen = () => {

    const [searchValue, setSearchValue] = useState('');
    const [modalVisiable, setModalVisiable] = useState(false);
    const [modalData, setModalData] = useState({
        image: Rectangle,
        isVideo: false,
        isMultiple: false
    });

    const imageData = [
        {
            image: Rectangle,
            isVideo: false,
            isMultiple: false
        },
        {
            image: Rectangle1,
            isVideo: false,
            isMultiple: false
        },
        {
            image: Rectangle2,
            isVideo: true,
            isMultiple: false
        },
        {
            image: Rectangle3,
            isVideo: false,
            isMultiple: true
        },
        {
            image: Rectangle5,
            isVideo: true,
            isMultiple: false
        },
        {
            image: Rectangle7,
            isVideo: false,
            isMultiple: false
        },
        {
            image: Rectangle6,
            isVideo: false,
            isMultiple: false
        },
        {
            image: Rectangle11,
            isVideo: false,
            isMultiple: false
        },
        {
            image: Rectangle12,
            isVideo: true,
            isMultiple: false
        },
        {
            image: Rectangle13,
            isVideo: false,
            isMultiple: true
        },
        {
            image: Rectangle,
            isVideo: false,
            isMultiple: false
        },
        {
            image: Rectangle1,
            isVideo: false,
            isMultiple: false
        },
        {
            image: Rectangle2,
            isVideo: true,
            isMultiple: false
        },
        {
            image: Rectangle3,
            isVideo: false,
            isMultiple: true
        },
        {
            image: Rectangle5,
            isVideo: true,
            isMultiple: false
        },
        {
            image: Rectangle,
            isVideo: false,
            isMultiple: false
        },
        {
            image: Rectangle1,
            isVideo: false,
            isMultiple: false
        },
        {
            image: Rectangle2,
            isVideo: true,
            isMultiple: false
        },
        {
            image: Rectangle3,
            isVideo: false,
            isMultiple: true
        },
        {
            image: Rectangle5,
            isVideo: true,
            isMultiple: false
        },
        {
            image: Rectangle6,
            isVideo: false,
            isMultiple: false
        },
        {
            image: Rectangle11,
            isVideo: false,
            isMultiple: false
        },
        {
            image: Rectangle12,
            isVideo: true,
            isMultiple: false
        },
        {
            image: Rectangle13,
            isVideo: false,
            isMultiple: true
        },
    ];

    const toggalModal = () => setModalVisiable(!modalVisiable);

    return (
        <CommonContainer>
            <View style={styles.searchBarContainer}>
                <SearchBarComponent
                    search={searchValue}
                    onChangeSearch={(e) => setSearchValue(e)}
                />
            </View>
            <View style={{ flex: 1 }}>
                <ScrollView
                    style={{
                        height: '100%',
                        width: '100%'
                    }}
                    showsVerticalScrollIndicator={false}
                    overScrollMode={'never'}
                >
                    <View style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'white',
                        flexWrap: 'wrap',
                        flexDirection: 'row'
                    }}>
                        {
                            imageData.map((postElement, index) => {
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        activeOpacity={0.8}
                                        onPressIn={() => {
                                            setModalData(postElement)
                                            toggalModal()
                                        }}
                                        onPressOut={() => toggalModal()}
                                        style={{ height: undefined, width: DEVICE_STYLES.SCREEN_WIDTH / 3, aspectRatio: 1 }}
                                    >
                                        <View style={{ height: '100%', width: '100%' }}>
                                            <FastImage
                                                source={postElement.image}
                                                style={{
                                                    height: '100%',
                                                    width: '100%',
                                                }}
                                                resizeMode={FastImage.resizeMode.cover}
                                            />
                                        </View>
                                        <View style={{ position: 'absolute', top: moderateScale(10), right: moderateScale(10) }}>
                                            {
                                                (postElement.isMultiple) ? <GalleryIcon /> : null
                                            }
                                            {
                                                (postElement.isVideo) ? <VideoIcon /> : null
                                            }
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </ScrollView>
            </View>

            <ReactNativeModal
                isVisible={modalVisiable}
                animationIn={'zoomIn'}
                animationOut={'zoomOut'}
                backdropOpacity={0.6}
                deviceHeight={DEVICE_STYLES.SCREEN_HEIGHT}
                deviceWidth={DEVICE_STYLES.SCREEN_WIDTH}
                style={{ flex: 1 }}
                statusBarTranslucent
            >
                <View style={styles.modalContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', height: moderateScale(50), paddingHorizontal: moderateScale(10) }}>
                        <FastImage
                            source={modalData.image}
                            style={{
                                height: moderateScale(40),
                                width: moderateScale(40),
                                borderRadius: moderateScale(20)
                            }}
                            resizeMode={FastImage.resizeMode.cover}
                        />
                        <View style={{ flex: 1, marginLeft: moderateScale(8) }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-start' }}>
                                <Text style={{ fontFamily: Fonts.SemiBold, fontSize: moderateScale(12.5), color: Colors.SECONDARY_BLACK, textAlign: 'left', textTransform: 'lowercase', marginRight: moderateScale(3.5) }}>wadekar</Text>
                                <VerifiedBadgeIcon />
                            </View>
                            <Text style={{ fontFamily: Fonts.Regular, fontSize: moderateScale(10.2), color: Colors.SECONDARY_BLACK, textAlign: 'left', textTransform: 'capitalize' }}>Tokyo, Japan</Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', height: undefined, aspectRatio: 1 }}>
                        <FastImage
                            source={modalData.image}
                            style={{
                                width: '100%',
                                height: '100%',
                                aspectRatio: 1
                            }}
                            resizeMode={FastImage.resizeMode.cover}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', height: moderateScale(48), paddingHorizontal: moderateScale(10) }}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.postMiniIconContainer}
                        >
                            <MiniHeartIcon />
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.postMiniIconContainer}
                        >
                            <ProfileMiniIcon />
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.postMiniIconContainer}
                        >
                            <SendMiniIcon />
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.postMiniIconContainer}
                        >
                            <MoreMiniIcon />
                        </TouchableOpacity>
                    </View>
                </View>
            </ReactNativeModal>
        </CommonContainer>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    searchBarContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: moderateScale(58),
        borderBottomWidth: 1,
        borderBottomColor: Colors.LIGHT_GRAY
    },
    modalContainer: {
        backgroundColor: Colors.WHITE,
        borderRadius: moderateScale(12),
        overflow: 'hidden'
    },
    postMiniIconContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch'
    }
})