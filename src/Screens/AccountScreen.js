import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react';
import CommonComtainer from '../Component/CommonContainer';
import ProfileScreenBottomView from '../Component/ProfileScreenBottomView';
import { MenuOutlineIcon, PlusIcon, SaveOutlineIcon, StarMenuIcon, SettingIcon, ProfilePlusIcon, FacebookIcon } from '../Assets/Icons/index';
import { DemoUser } from '../Assets/Images/index';
import Icon, { Icons } from '../Config/Icons';
import { Colors, Fonts, moderateScale } from '../Config/Theme';
import FastImage from 'react-native-fast-image';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';

const bottomSheetContent = [
	{
		icon: () => <SaveOutlineIcon />,
		labelName: 'Saved'
	},
	{
		icon: () => <StarMenuIcon />,
		labelName: 'Closed Friends'
	},
	{
		icon: () => <ProfilePlusIcon />,
		labelName: 'Discover People'
	},
	{
		icon: () => <FacebookIcon />,
		labelName: 'Open Facebook'
	},
	{
		icon: () => <SettingIcon />,
		labelName: 'Settings'
	}
]

const AccountScreen = () => {

	const navigation = useNavigation();
	const sheetRef = useRef(null);

	const [numberDetails, setNumberDetails] = useState([
		{
			count: 59,
			label: 'Posts'
		},
		{
			count: 880,
			label: 'Followers'
		},
		{
			count: 133,
			label: 'Following'
		}
	])

	const screenHeader = () => {
		return (
			<View style={{ flexDirection: 'row', height: moderateScale(44), alignItems: 'center' }}>
				<View style={{ flex: 0.85 }} />
				<View style={{ flex: 0.15, alignItems: 'center', justifyContent: 'center' }}>
					<TouchableOpacity
						onPress={() => sheetRef.current.open()}
					>
						<MenuOutlineIcon />
					</TouchableOpacity>
				</View>
				<View style={styles.headerProfileContainer}>
					<TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
						<View style={{ marginHorizontal: moderateScale(4), top: 1 }}>
							<Icon
								name={'lock'}
								size={moderateScale(14)}
								color={Colors.BLACK}
								type={Icons.FontAwesome}
							/>
						</View>
						<Text style={{ fontFamily: Fonts.SemiBold, fontSize: moderateScale(16), color: Colors.SECONDARY_BLACK }}>jacjob_on</Text>
						<View style={{ marginHorizontal: moderateScale(3) }}>
							<Icon
								name={'chevron-down'}
								size={moderateScale(15)}
								color={Colors.BLACK}
								type={Icons.Feather}
							/>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		)
	}

	const highlightContainer = () => {
		return (
			<View>
				<TouchableOpacity
					activeOpacity={0.8}
					style={styles.highlightThumbailContainer}
				>
					<FastImage
						style={{
							height: moderateScale(56),
							width: moderateScale(56),
							aspectRatio: 1,
							borderRadius: moderateScale(56 / 2)
						}}
						source={DemoUser}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					activeOpacity={0.8}
					style={{ alignItems: 'center', justifyContent: 'center', marginVertical: moderateScale(3.5) }}
				>
					<Text style={styles.highlightLabel}>Friends</Text>
				</TouchableOpacity>
			</View>
		)
	}

	const BottomSheetComponent = () => {
		return (
			<RBSheet
				ref={sheetRef}
				animationType={'slide'}
				closeOnDragDown={true}
				closeOnPressMask={true}
				closeOnPressBack={true}
				dragFromTopOnly={true}
				openDuration={300}
				closeDuration={300}
				keyboardAvoidingViewEnabled={true}
				height={moderateScale(280)}
				minClosingHeight={moderateScale(230)}
				customStyles={{
					container: {
						backgroundColor: Colors.WHITE,
						borderTopLeftRadius: moderateScale(12),
						borderTopRightRadius: moderateScale(12)
					},
					draggableIcon: {
						backgroundColor: Colors.SECONDARY_BLACK
					},
					wrapper: {
						backgroundColor: 'rgba(0,0,0,0)'
					}
				}}
			>
				<View style={{ flex: 1 }}>
					{
						bottomSheetContent.map((element, index) => {

							const ElementIcon = element.icon

							return (
								<TouchableOpacity
									key={index}
									activeOpacity={0.7}
									style={{ flexDirection: 'row', alignItems: 'center', height: moderateScale(49) }}
								>
									<View style={{ flex: 0.15, alignItems: 'center', justifyContent: 'center' }}>
										<ElementIcon />
									</View>
									<View style={{ flex: 0.85 }}>
										<Text style={{ fontFamily: Fonts.Regular, fontSize: moderateScale(15), color: Colors.SECONDARY_BLACK }}>{element.labelName}</Text>
									</View>
								</TouchableOpacity>
							)
						})
					}
				</View>
			</RBSheet>
		)
	}

	return (
		<CommonComtainer>
			{screenHeader()}
			<View style={{ flex: 1 }}>
				<ScrollView
					style={{ flex: 1 }}
					showsVerticalScrollIndicator={false}
				>
					<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginVertical: moderateScale(4) }}>
						<View style={{ flex: 0.30, alignItems: 'center', justifyContent: 'center' }}>
							<View style={styles.profileContainer}>
								<FastImage
									source={DemoUser}
									style={{
										height: moderateScale(86),
										width: moderateScale(86),
										aspectRatio: 1,
										borderRadius: moderateScale(86 / 2)
									}}
								/>
							</View>
						</View>
						<View style={{ flex: 0.7, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
							{
								numberDetails.map((element, index) => {
									return (
										<View key={index} style={{ alignItems: 'center', justifyContent: 'center' }}>
											<Text style={{ fontFamily: Fonts.SemiBold, fontSize: moderateScale(16), color: Colors.SECONDARY_BLACK, letterSpacing: moderateScale(0.2), textAlign: 'center' }}>{element.count}</Text>
											<Text style={{ fontFamily: Fonts.Regular, fontSize: moderateScale(13), color: Colors.SECONDARY_BLACK, textAlign: 'center' }}>{element.label}</Text>
										</View>
									)
								})
							}
						</View>
					</View>
					<View style={{ marginVertical: moderateScale(5), marginHorizontal: moderateScale(15) }}>
						<Text style={styles.profileName}>Jacob West</Text>
						<Text style={styles.bioStyle}>Digital goodies designer @pixsellz</Text>
						<Text style={styles.bioStyle}>Everything is designed.</Text>
					</View>
					<View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: moderateScale(10) }}>
						<TouchableOpacity
							activeOpacity={0.7}
							style={styles.buttonContainer}
							onPress={() => navigation.navigate('ProfileSettingScreen')}
						>
							<Text style={{ fontFamily: Fonts.SemiBold, fontSize: moderateScale(12.5), color: Colors.SECONDARY_BLACK, textAlign: 'center' }}>Edit Profile</Text>
						</TouchableOpacity>
					</View>
					<View>
						<FlatList
							horizontal={true}
							data={[...new Array(8)]}
							renderItem={highlightContainer}
							showsHorizontalScrollIndicator={false}
							keyExtractor={(_, index) => index.toString()}
							contentContainerStyle={{ paddingHorizontal: moderateScale(12), paddingTop: moderateScale(5) }}
							ItemSeparatorComponent={() => <View style={{ margin: moderateScale(8) }} />}
							ListHeaderComponent={() => {
								return (
									<View style={{ alignItems: 'center', justifyContent: 'center', marginRight: moderateScale(15) }}>
										<TouchableOpacity
											activeOpacity={0.8}
											style={[styles.highlightThumbailContainer]}>
											<PlusIcon />
										</TouchableOpacity>

										<TouchableOpacity
											activeOpacity={0.8}
											style={{ alignItems: 'center', justifyContent: 'center', marginVertical: moderateScale(3.5) }}
										>
											<Text style={styles.highlightLabel}>New</Text>
										</TouchableOpacity>
									</View>
								)
							}}
						/>
					</View>
				</ScrollView>
				<View style={{ borderTopWidth: 0.9, borderColor: Colors.SECONDARY_GRAY }} />
				<ProfileScreenBottomView />
			</View>

			<BottomSheetComponent />
		</CommonComtainer>
	)
}

export default AccountScreen

const styles = StyleSheet.create({
	headerProfileContainer: {
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0
	},
	profileContainer: {
		height: moderateScale(96),
		width: moderateScale(96),
		borderWidth: moderateScale(1.3),
		borderColor: '#C7C7CC',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: moderateScale(96 / 2)
	},
	bioStyle: {
		fontFamily: Fonts.Regular,
		fontSize: moderateScale(12),
		color: Colors.SECONDARY_BLACK
	},
	profileName: {
		fontFamily: Fonts.SemiBold,
		fontSize: moderateScale(12),
		color: Colors.SECONDARY_BLACK
	},
	buttonContainer: {
		width: '93%',
		height: moderateScale(29),
		borderRadius: moderateScale(5),
		borderWidth: 1,
		borderColor: Colors.GRAY,
		alignItems: 'center',
		justifyContent: 'center'
	},
	highlightThumbailContainer: {
		height: moderateScale(64),
		width: moderateScale(64),
		borderRadius: moderateScale(64 / 2),
		borderWidth: 1,
		borderColor: Colors.SECONDARY_GRAY,
		alignItems: 'center',
		justifyContent: 'center'
	},
	highlightLabel: {
		fontFamily: Fonts.Regular,
		fontSize: moderateScale(12),
		color: Colors.SECONDARY_BLACK,
		textAlign: 'center',
		textTransform: 'capitalize'
	}
})