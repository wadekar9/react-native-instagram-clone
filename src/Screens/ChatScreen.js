import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CommonContainer from '../Component/CommonContainer';
import SearchBarComponent from '../Component/SearchBarComponent';
import { PlusIcon, LeftChevron, CameraOutlineIcon } from '../Assets/Icons/index';
import { Colors, Fonts, moderateScale } from '../Config/Theme';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { DemoUser } from '../Assets/Images';

const ChatScreen = () => {

  const navigation = useNavigation();
  const [search,setSearch] = useState('');

  const chatListContaier = ({item, index}) => {
    return(
      <View style={styles.listContainer}>
        <View>
          <View style={styles.imageContainer}>
            <FastImage
              source={DemoUser}
              style={{
                height : moderateScale(56),
                width : moderateScale(56),
                borderRadius : moderateScale(56/2),
                aspectRatio : 1
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
          </View>
        </View>
        <View style={{flex : 1,alignSelf:'stretch',flexDirection:'row',alignItems:'center',paddingHorizontal: moderateScale(10)}}>
          <View style={{flex : 1,flexDirection : 'row',alignItems:'center'}}>
            <View style={{flex : 1}}>
              <Text style={{fontFamily: Fonts.Regular, fontSize : moderateScale(12.5),color: Colors.SECONDARY_BLACK}}>joshua_l</Text>
              <Text style={{fontFamily: Fonts.Regular, fontSize : moderateScale(12.5),color: Colors.SECONDARY_GRAY}}>Have a nice day, bro!</Text>
            </View>
            <View style={{ justifyContent : 'flex-end',alignSelf:'stretch',right : moderateScale(10)}}>
              <Text style={{fontFamily: Fonts.Regular, fontSize : moderateScale(13), color : Colors.GRAY}}>now</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity>
              <CameraOutlineIcon color={Colors.GRAY} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

  return (
    <CommonContainer>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
        >
          <LeftChevron/>
        </TouchableOpacity>
        <View>
          <Text style={{fontFamily : Fonts.SemiBold,fontSize: moderateScale(16),color: Colors.SECONDARY_BLACK,textTransform:'lowercase'}}>jacob_w</Text>
        </View>
        <TouchableOpacity>
          <PlusIcon />
        </TouchableOpacity>
      </View>
      <View style={{flex : 1}}>
        <View style={{paddingVertical : moderateScale(10),paddingHorizontal: moderateScale(5),alignSelf:'center'}}>
          <SearchBarComponent
            search={search}
            onChangeSearch={setSearch}
          />
        </View>

        <View style={{flex : 1}}>
          <FlatList
            data={[...new Array(10)]}
            contentContainerStyle={{paddingHorizontal: moderateScale(7)}}
            keyExtractor={(_,index) => index.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={chatListContaier}
            ItemSeparatorComponent={() => <View style={{margin : moderateScale(4)}} />}
          />
        </View>
      </View>
    </CommonContainer>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  headerContainer : {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    height : moderateScale(44),
    backgroundColor : Colors.PRIMARY_WHITE_COLOR,
    paddingHorizontal : moderateScale(15)
  },
  listContainer : {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between',
    height : moderateScale(72)
  },
  imageContainer : {
    height : moderateScale(64),
    width : moderateScale(64),
    aspectRatio : 1,
    borderRadius : moderateScale(64/2),
    alignItems : 'center',
    justifyContent : 'center',
    borderWidth : 1,
    borderColor : Colors.SECONDARY_GRAY
  }
})