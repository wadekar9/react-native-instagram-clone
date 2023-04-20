import { StyleSheet, Text, TouchableOpacity, View, Animated, ScrollView } from 'react-native'
import React, { PureComponent, useEffect, useState } from 'react';
import { Fonts, Colors, moderateScale, DEVICE_STYLES } from '../Config/Theme';
import CommonContainer from '../Component/CommonContainer';
import { CameraRoll, useCameraRoll } from '@react-native-camera-roll/camera-roll';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import { taekMediaPermission } from '../Utilies/mediaPermission';
import { DemoPost, DemoUser } from '../Assets/Images/index';
import { GalleryOutlineIcon, CheckFillIcon, CheckOutlineIcon } from '../Assets/Icons/index';

class CustomSwitch extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      active: 0,
      xTabPost: 0,
      xTabReel: 0,
      switchTranslateX: new Animated.Value(0)
    }
  }

  handleSwitchAnimation = (side) => {

    const { switchTranslateX } = this.state;

    Animated.timing(switchTranslateX, {
      toValue: side,
      useNativeDriver: true,
      duration: 200,
      // easing : true
    }).start()

  }

  componentDidUpdate() {
    this.props.onChangeType(this.state.active)
  }

  render() {

    return (
      <View style={styles.headerSubContainer}>

        <Animated.View style={[styles.switcherContaienr, { transform: [{ translateX: this.state.switchTranslateX }] }]} />

        <TouchableOpacity
          style={styles.switchContainer}
          activeOpacity={0.7}
          onPress={() => this.setState({ active: 0 }, () => {
            this.handleSwitchAnimation(this.state.xTabPost)
          })}
          onLayout={(e) => this.setState({ xTabPost: e.nativeEvent.layout.x })}
        >
          <Text style={[styles.switchContainerText, { color: this.state.active == 0 ? '#fff' : '#000' }]}>Post</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.switchContainer}
          activeOpacity={0.7}
          onPress={() => this.setState({ active: 1 }, () => {
            this.handleSwitchAnimation(this.state.xTabReel)
          })}
          onLayout={(e) => this.setState({ xTabReel: e.nativeEvent.layout.x })}
        >
          <Text style={[styles.switchContainerText, { color: this.state.active == 1 ? '#fff' : '#000' }]}>Reel</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const AddStoryScreen = () => {

  const navigation = useNavigation();

  const [galleryType, setGalleryType] = useState(1)
  const [multiple, setMultiple] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [type, setType] = useState(1);

  useEffect(() => {
    taekMediaPermission().then((res) => {
      console.log(res)
      onGetPhotoClick();
    })
    .catch((err) => {
      console.log(err);
    })
  },[]);

  const onGetPhotoClick = async () => {

    CameraRoll.getPhotos ({
      assetType: 'Photos',
      first : 10,
      fromTime : 10
    })
      .then((Response) => {
        const data = Response.edges

        console.log('const data = Response.edges', Response)

        const imageData = [];

        data.forEach((ele) => {
          imageData.push(ele.node.image.uri);
        })

        setPhotos([...imageData]);

      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <CommonContainer>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ fontFamily: Fonts.Regular, fontSize: moderateScale(15.5), color: Colors.SECONDARY_BLACK }}>Cancel</Text>
        </TouchableOpacity>

        <CustomSwitch
          onChangeType={(e) => setType(e)}
        />

        <TouchableOpacity>
          <Text style={{ fontFamily: Fonts.SemiBold, fontSize: moderateScale(15.5), color: Colors.SECONDARY_COLOR }}>Next</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        <View style={{ width: '100%', height: undefined, aspectRatio: 1 }}>
          <FastImage
            source={DemoPost}
            style={{
              width: '100%',
              height: '100%',
              aspectRatio: 1
            }}
            resizeMode={'contain'}
          />
          {/* <TouchableOpacity
            activeOpacity={0.8}
            accessibilityRole={'button'}
            onPress={() =>  setMultiple(!multiple)}
            style={[styles.imageCornerContainer, { backgroundColor : multiple ? Colors.SECONDARY_COLOR : 'rgba(38, 38, 38, 0.8)', left: 10 }]}
          >
            <GalleryOutlineIcon />
          </TouchableOpacity> */}
          <TouchableOpacity
            activeOpacity={0.8}
            accessibilityRole={'button'}
            onPress={() =>  setMultiple(!multiple)}
            style={[styles.imageCornerContainer, { backgroundColor : multiple ? Colors.SECONDARY_COLOR : 'rgba(38, 38, 38, 0.8)', right: 10 }]}
          >
            <GalleryOutlineIcon />
            <Text style={{ textTransform: 'uppercase', fontFamily: Fonts.SemiBold, fontSize: moderateScale(11), color: '#fff' }}>Select Multiple</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex : 1}}>
            <View style={{flex : 1}}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                bounces={false}
                bouncesZoom={false}
              >
                <View style={{flexDirection : 'row',flexWrap : 'wrap'}}>
                  {
                    [...new Array(15)].map((ele,index) => {
                      return(
                        <View
                          key={index}
                          style={{
                            width : DEVICE_STYLES.SCREEN_WIDTH/4,
                            height : undefined,
                            aspectRatio : 1,
                            borderWidth : 0.8,
                            borderColor : Colors.WHITE
                          }}
                        >
                          <FastImage
                            source={DemoUser}
                            style={{
                              height : '100%',
                              width : '100%'
                            }}
                          />

                          <TouchableOpacity
                            activeOpacity={0.6}
                            accessibilityRole={'button'}

                            style={{position : 'absolute',top : 5,right : 5,alignItems : 'center',justifyContent:'center'}}
                          >
                            {
                              (true && (index % 2 != 0)) ? <CheckFillIcon /> : <CheckOutlineIcon />
                            }
                          </TouchableOpacity>
                        </View>
                      )
                    })
                  }
                </View>
              </ScrollView>
            </View>
            <View style={styles.botttomContainer}>
              <TouchableOpacity
                style={styles.botttomSubContainer}
                activeOpacity={0.5}
                onPress={() => setGalleryType(1)}
              >
                <Text style={{fontFamily : Fonts.SemiBold, fontSize : moderateScale(15.5),color : (galleryType == 1) ? Colors.SECONDARY_BLACK : 'rgba(0,0,0,0.4)'}}>Library</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.botttomSubContainer}
                activeOpacity={0.5}
                onPress={() => setGalleryType(2)}
              >
                <Text style={{fontFamily : Fonts.SemiBold, fontSize : moderateScale(15.5),color : (galleryType == 2) ? Colors.SECONDARY_BLACK : 'rgba(0,0,0,0.4)'}}>Photo</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.botttomSubContainer}
                activeOpacity={0.5}
                onPress={() => setGalleryType(3)}
              >
                <Text style={{fontFamily : Fonts.SemiBold, fontSize : moderateScale(15.5),color : (galleryType == 3) ? Colors.SECONDARY_BLACK : 'rgba(0,0,0,0.4)'}}>Video</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    </CommonContainer>
  )

}

export default AddStoryScreen

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.PRIMARY_WHITE_COLOR,
    height: moderateScale(44),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(15)
  },
  headerSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '40%',
    height: moderateScale(36),
    borderRadius: moderateScale(36 / 2),
    overflow: 'hidden',
    borderWidth: 1.2,
    borderColor: Colors.ALTRA_DARK_GRAY
  },
  switchContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // zIndex : 1000
  },
  switchContainerText: {
    fontFamily: Fonts.SemiBold,
    fontSize: moderateScale(13),
    textAlign: 'center'
  },
  switcherContaienr: {
    position: 'absolute',
    width: '48%',
    height: '90%',
    // left: 1.3,
    // right: 1.3,
    backgroundColor: Colors.TEXT_COLOR,
    borderRadius: moderateScale(30 / 2),
    alignSelf: 'center'
  },
  imageCornerContainer: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: moderateScale(32),
    width: '38%',
    borderRadius: moderateScale(32 / 2),
    overflow: 'hidden'
  },
  botttomContainer : {
    height : moderateScale(44),
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between',
    backgroundColor : Colors.WHITE
  },
  botttomSubContainer : {
    alignItems : 'center',
    justifyContent : 'center',
    flex : 1
  }
})