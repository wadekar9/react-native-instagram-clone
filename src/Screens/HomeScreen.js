import { StyleSheet, Text, View, useWindowDimensions, Dimensions, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import CommonContainer from '../Component/CommonContainer';
import CustomStatusBar from '../Component/CustomStatusBar';
import { Colors, Fonts, moderateScale } from '../Config/Theme';
import Icon, { Icons } from '../Config/Icons';
import { InstagramName, DemoUser } from '../Assets/Images/index';
import PostComponent from '../Component/PostComponent';
import { HeartOutlineIcon, CameraOutlineIcon, MessangerOutlineIcon } from '../Assets/Icons/index';
import React from 'react';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';

const { PRIMARY_WHITE_COLOR, SECONDARY_BLACK } = Colors;

const CustomHeader = ({ navigation }) => {

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
					onPress={() => navigation.navigate('NotificationScreen')}
				>
					<HeartOutlineIcon />
				</TouchableOpacity>
				<TouchableOpacity
					activeOpacity={0.9}
					accessibilityRole={'button'}
					onPress={() => navigation.navigate('ChatScreen')}
				>
					<MessangerOutlineIcon />
				</TouchableOpacity>
			</View>
		</View>
	)
}

const HomeScreen = () => {

	const navigation = useNavigation()

	const storyListContainer = ({ item, index }) => {
		return (
			<View style={{ padding: moderateScale(5), justifyContent: 'space-between', alignItems: 'center' }}>
				<TouchableOpacity
					style={styles.imageContainer}
					activeOpacity={0.9}
					accessibilityRole={'button'}
					onPress={() => navigation.navigate('StoryScreen')}
				>
					<FastImage
						source={DemoUser}
						style={{
							height: moderateScale(62),
							width: moderateScale(62),
							borderRadius: moderateScale(62 / 2),
							aspectRatio: 1
						}}
						resizeMode={FastImage.resizeMode.cover}
					/>
				</TouchableOpacity>
				<Text style={styles.storyNameStyle}>#{index + 1} Story</Text>
			</View>
		)
	}

	const listHeaderComponent = () => {
		return (
			<View style={{ padding: moderateScale(5), justifyContent: 'space-between', alignItems: 'center' }}>
				<TouchableOpacity
					style={styles.imageContainer}
					activeOpacity={0.9}
					accessibilityRole={'button'}
					onPress={() => navigation.navigate('AddStoryScreen')}
				>
					<FastImage
						source={DemoUser}
						style={{
							height: moderateScale(62),
							width: moderateScale(62),
							borderRadius: moderateScale(62 / 2),
							aspectRatio: 1
						}}
						resizeMode={FastImage.resizeMode.cover}
					/>

					<View style={styles.plusButtonContainer}>
						<Icon
							type={Icons.Octicons}
							size={moderateScale(20)}
							color={Colors.SECONDARY_BLACK}
							name={'plus'}
						/>
					</View>
				</TouchableOpacity>
				<Text style={styles.storyNameStyle}>Your Story</Text>
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
					contentContainerStyle={{ alignItems: 'center', paddingHorizontal: moderateScale(5) }}
					showsHorizontalScrollIndicator={false}
					legacyImplementation={true}
					refreshing={false}
					renderItem={storyListContainer}
					ListHeaderComponent={listHeaderComponent}
					ItemSeparatorComponent={() => <View style={{ margin: moderateScale(5) }} />}
				/>
			</View>
			<View style={{ flex: 1 }}>
				<FlatList
					data={[...new Array(3)]}
					initialNumToRender={1}
					keyExtractor={(_, index) => index.toString()}
					showsVerticalScrollIndicator={false}
					refreshing={false}
					maintainVisibleContentPosition={{
						minIndexForVisible: 1,
						autoscrollToTopThreshold: 17
					}}
					alwaysBounceVertical={false}
					maxToRenderPerBatch={1}
					legacyImplementation={true}
					renderItem={({ item, index }) => {
						return (
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
	storiesContainer: {
		// height : moderateScale(98),
		paddingVertical: moderateScale(5),
		borderTopWidth: 1.2,
		borderBottomWidth: 1.2,
		borderColor: Colors.LIGHT_GRAY
	},
	storyNameStyle: {
		textAlign: 'center',
		fontFamily: Fonts.Regular,
		fontSize: moderateScale(12),
		color: SECONDARY_BLACK,
		flexWrap: 'nowrap',
		marginTop: moderateScale(3)
	},
	imageContainer: {
		height: moderateScale(70),
		width: moderateScale(70),
		aspectRatio: 1,
		borderRadius: moderateScale(70 / 2),
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 1.2,
		borderColor: Colors.LIGHT_GRAY
	},
	plusButtonContainer: {
		height: moderateScale(26),
		width: moderateScale(26),
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: moderateScale(13),
		position: 'absolute',
		bottom: 0,
		right: 0,
		backgroundColor: '#fff',
		borderWidth: 0.5,
		borderColor: Colors.LIGHT_GRAY,
		elevation: 2,
		shadowColor: '#262626'
	}
})