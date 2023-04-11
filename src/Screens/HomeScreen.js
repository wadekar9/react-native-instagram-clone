import { StyleSheet, Text, View, useWindowDimensions, Dimensions, ScrollView, FlatList } from 'react-native'
import CommonContainer from '../Component/CommonContainer';
import { Colors, Fonts, moderateScale } from '../Config/Theme';
import { InstagramName } from '../Assets/Images/index';
import { IGTVIcon, CameraOutlineIcon, MessangerOutlineIcon } from '../Assets/Icons/index';
import React from 'react';
import FastImage from 'react-native-fast-image';

const { PRIMARY_WHITE_COLOR, SECONDARY_BLACK} = Colors;

const CustomHeader = () => {
	return (
		<View style={styles.customHeaderContainer}>
			<View style={{ flex: 0.8, flexDirection: 'row', alignItems: 'center' }}>
				<CameraOutlineIcon />
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<FastImage
						source={InstagramName}
						style={{
							height: moderateScale(28),
							width: moderateScale(108),
							left: moderateScale(22),
							top: moderateScale(3)
						}}
						resizeMode={FastImage.resizeMode.contain}
					/>
				</View>
			</View>
			<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', flex: 0.2 }}>
				<IGTVIcon />
				<MessangerOutlineIcon />
			</View>
		</View>
	)
}

const HomeScreen = () => {

	const storyListContainer = () => {
		return(
			<View style={{width: moderateScale(62),height: moderateScale(81),backgroundColor:'green',justifyContent: 'space-between',alignItems: 'center'}}>
				<View style={{width : moderateScale(62), height: moderateScale(62), aspectRatio : 1,backgroundColor:'pink'}}>

				</View>
				<Text style={styles.storyNameStyle}>Your StosStos</Text>
			</View>
		)
	}

	return (
		<CommonContainer>
			<CustomHeader />
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
		height : moderateScale(98),
		backgroundColor : 'red'
	},
	storyNameStyle : {
		textAlign : 'center',
		fontFamily : Fonts.Regular,
		fontSize : moderateScale(12),
		color : SECONDARY_BLACK,
		flexWrap : 'nowrap'
	}
})