import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CommonContainer from '../Component/CommonContainer';
import CommonInputComponent from '../Component/CommonInputComponent';
import { Fonts, Colors, moderateScale } from '../Config/Theme';
import { DemoUser } from '../Assets/Images/index';
import React, { useState } from 'react';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';

const ProfileSettingScreen = () => {

	const navigation = useNavigation();
	const [details, setDetails] = useState({
		name: '',
		userName: '',
		website: '',
		bio: '',
		email: '',
		phone: '',
		gender: ''
	})

	return (
		<CommonContainer>
			<View style={styles.headerContainer}>
				<TouchableOpacity
					activeOpacity={0.8}
					onPress={() => navigation.goBack()}
				>
					<Text style={{ fontSize: moderateScale(16), color: Colors.SECONDARY_BLACK, fontFamily: Fonts.Regular }}>Cancel</Text>
				</TouchableOpacity>
				<Text style={{ fontSize: moderateScale(16), color: Colors.SECONDARY_BLACK, fontFamily: Fonts.SemiBold }}>Edit Profile</Text>
				<TouchableOpacity
					activeOpacity={0.8}
					onPress={() => navigation.goBack()}
				>
					<Text style={{ fontSize: moderateScale(16), color: Colors.SECONDARY_COLOR, fontFamily: Fonts.SemiBold }}>Done</Text>
				</TouchableOpacity>
			</View>
			<View style={{ flex: 1 }}>
				<ScrollView
					showsVerticalScrollIndicator={false}
				>
					<View style={{ alignItems: 'center', justifyContent: 'space-evenly', height: moderateScale(160) }}>
						<View style={{ height: moderateScale(95), width: moderateScale(95), borderRadius: moderateScale(95 / 2), overflow: 'hidden' }}>
							<FastImage
								source={DemoUser}
								style={{
									height: '100%',
									width: '100%',
									borderRadius: moderateScale(95 / 2)
								}}
								resizeMode={FastImage.resizeMode.cover}
							/>
						</View>
						<TouchableOpacity>
							<Text style={{ fontFamily: Fonts.SemiBold, color: Colors.SECONDARY_COLOR, fontSize: moderateScale(13) }}>
								Change Profile Photo
							</Text>
						</TouchableOpacity>
					</View>
					<View style={{ borderTopWidth: 0.6, borderBottomWidth: 0.6, borderColor: Colors.LIGHT_GRAY, paddingHorizontal: moderateScale(15), paddingVertical: moderateScale(5) }}>
						<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
							<View style={{ flex: 0.28, alignItems: 'flex-start', justifyContent: 'center' }}>
								<Text style={styles.labelStyle}>Name</Text>
							</View>
							<View style={{ flex: 0.72 }}>
								<CommonInputComponent
									value={details.name}
									bottomLine={true}
									onChange={(e) => setDetails((prev) => ({ ...prev, name: e }))}
									placeholder={'Enter your name'}
								/>
							</View>
						</View>
						<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
							<View style={{ flex: 0.28, alignItems: 'flex-start', justifyContent: 'center' }}>
								<Text style={styles.labelStyle}>Username</Text>
							</View>
							<View style={{ flex: 0.72 }}>
								<CommonInputComponent
									value={details.userName}
									bottomLine={true}
									onChange={(e) => setDetails((prev) => ({ ...prev, userName: e }))}
									placeholder={'Enter your username'}
								/>
							</View>
						</View>
						<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
							<View style={{ flex: 0.28, alignItems: 'flex-start', justifyContent: 'center' }}>
								<Text style={styles.labelStyle}>Website</Text>
							</View>
							<View style={{ flex: 0.72 }}>
								<CommonInputComponent
									value={details.website}
									bottomLine={true}
									onChange={(e) => setDetails((prev) => ({ ...prev, website: e }))}
									placeholder={'Enter your website'}
								/>
							</View>
						</View>
						<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
							<View style={{ flex: 0.28, alignItems: 'flex-start', justifyContent: 'center' }}>
								<Text style={styles.labelStyle}>Bio</Text>
							</View>
							<View style={{ flex: 0.72 }}>
								<CommonInputComponent
									value={details.bio}
									onChange={(e) => setDetails((prev) => ({ ...prev, bio: e }))}
									placeholder={'Enter your bios'}
								/>
							</View>
						</View>
					</View>
					<View style={{ alignItems: 'flex-start', justifyContent: 'center', height: moderateScale(49), paddingHorizontal: moderateScale(15) }}>
						<TouchableOpacity>
							<Text style={{ fontFamily: Fonts.Regular, fontSize: moderateScale(14.5), color: Colors.SECONDARY_COLOR }}>Switch to Professional Account</Text>
						</TouchableOpacity>
					</View>
					<View style={{ paddingHorizontal: moderateScale(15) }}>
						<View style={{ paddingVertical: moderateScale(10) }}>
							<Text style={{ fontFamily: Fonts.SemiBold, fontSize: moderateScale(15), color: Colors.SECONDARY_BLACK, textAlign: 'left' }}>Private Information</Text>
						</View>
						<View>
							<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
								<View style={{ flex: 0.28, alignItems: 'flex-start', justifyContent: 'center' }}>
									<Text style={styles.labelStyle}>Email</Text>
								</View>
								<View style={{ flex: 0.72 }}>
									<CommonInputComponent
										value={details.email}
										bottomLine={true}
										onChange={(e) => setDetails((prev) => ({ ...prev, email: e }))}
										placeholder={'Enter your email'}
									/>
								</View>
							</View>
							<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
								<View style={{ flex: 0.28, alignItems: 'flex-start', justifyContent: 'center' }}>
									<Text style={styles.labelStyle}>Phone</Text>
								</View>
								<View style={{ flex: 0.72 }}>
									<CommonInputComponent
										value={details.phone}
										bottomLine={true}
										onChange={(e) => setDetails((prev) => ({ ...prev, phone: e }))}
										placeholder={'Enter your phone number'}
									/>
								</View>
							</View>
							<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
								<View style={{ flex: 0.28, alignItems: 'flex-start', justifyContent: 'center' }}>
									<Text style={styles.labelStyle}>Gender</Text>
								</View>
								<View style={{ flex: 0.72 }}>
									<CommonInputComponent
										value={details.gender}
										bottomLine={true}
										onChange={(e) => setDetails((prev) => ({ ...prev, gender: e }))}
										placeholder={'Select your gender'}
									/>
								</View>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		</CommonContainer>
	)
}

export default ProfileSettingScreen

const styles = StyleSheet.create({
	headerContainer: {
		backgroundColor: Colors.PRIMARY_WHITE_COLOR,
		height: moderateScale(44),
		paddingHorizontal: moderateScale(12),
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	labelStyle: {
		fontFamily: Fonts.Regular,
		fontSize: moderateScale(15),
		color: Colors.SECONDARY_BLACK
	}
})