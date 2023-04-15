import { StyleSheet, Text, View, useWindowDimensions, Dimensions, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import CommonContainer from '../Component/CommonContainer';
import { Colors, Fonts, moderateScale } from '../Config/Theme';
import { InstagramName, DemoUser } from '../Assets/Images/index';
import PostComponent from '../Component/PostComponent';
import { HeartOutlineIcon, CameraOutlineIcon, MessangerOutlineIcon } from '../Assets/Icons/index';
import React from 'react';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';

const { PRIMARY_WHITE_COLOR, SECONDARY_BLACK} = Colors;

const CustomHeader = ({navigation}) => {

	return (
		<View style={styles.customHeaderContainer}>
			<View style={{ flex: 0.8, flexDirection: 'row', alignItems: 'center' }}>
				<View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
					<FastImage
						source={InstagramName}
						style={{
							height: moderateScale(28),
							width: moderateScale(108),
							top: moderateScale(3)
						}}
						resizeMode={FastImage.resizeMode.contain}
					/>
				</View>
			</View>
			<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', flex: 0.2 }}>
				<TouchableOpacity
					activeOpacity={0.9}
					accessibilityRole={'button'}
					onPress={() =>  navigation.navigate('NotificationScreen')}
				>
					<HeartOutlineIcon />
				</TouchableOpacity>
				<TouchableOpacity
					activeOpacity={0.9}
					accessibilityRole={'button'}
					onPress={() =>  navigation.navigate('ChatScreen')}
				>
					<MessangerOutlineIcon />
				</TouchableOpacity>
			</View>
		</View>
	)
}

const HomeScreen = () => {

	const navigation = useNavigation()

	const storyListContainer = () => {
		return(
			<View style={{padding: moderateScale(5),justifyContent: 'space-between',alignItems: 'center'}}>
				<View>
					<FastImage
						source={DemoUser}
						style={{
							height : moderateScale(62),
							width : moderateScale(62),
							borderRadius : moderateScale(62/2),
							aspectRatio : 1
						}}
						resizeMode={FastImage.resizeMode.cover}
					/>
				</View>
				<Text style={styles.storyNameStyle}>Your StosStos</Text>
			</View>
		)
	}

	return (
		<CommonContainer>
			<CustomHeader navigation={navigation} />
			<View style={styles.storiesContainer}>
				<FlatList
					data={[...new Array(10)]}
					horizontal
					contentContainerStyle={{alignItems: 'center',paddingHorizontal : moderateScale(5)}}
					showsHorizontalScrollIndicator={false}
					legacyImplementation={true}
					refreshing={false}
					renderItem={storyListContainer}
					ItemSeparatorComponent={() => <View style={{margin: moderateScale(5)}} />}
				/>
			</View>
			<View style={{flex : 1}}>
				<FlatList
					data={[...new Array(3)]}
					initialNumToRender={1}
					keyExtractor={(_, index) => index.toString()}
					showsVerticalScrollIndicator={false}
					refreshing={false}
					renderItem={({item, index}) => {
						return(
							<PostComponent key={index} data={item} />
						)
					}}
				/>
			</View>
		</CommonContainer>
	)
}

export default HomeScreen

const styles = StyleSheet.create({
	customHeaderContainer: {
		height: moderateScale(44),
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: PRIMARY_WHITE_COLOR,
		paddingHorizontal: moderateScale(10)
	},
	storiesContainer : {
		// height : moderateScale(98),
		paddingVertical : moderateScale(5),
		borderTopWidth : 1.2,
		borderBottomWidth : 1.2,
		borderColor : Colors.LIGHT_GRAY
	},
	storyNameStyle : {
		textAlign : 'center',
		fontFamily : Fonts.Regular,
		fontSize : moderateScale(12),
		color : SECONDARY_BLACK,
		flexWrap : 'nowrap',
		marginTop : moderateScale(3)
	}
})