import React, { useRef, useState } from 'react';
import FastImage from 'react-native-fast-image';
import { CameraIcon, MusicIcon, PersonIcon } from '../Assets/Icons/index';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CommonContainer from '../Component/CommonContainer';
import Icon, { Icons } from '../Config/Icons';
import { DemoImage, DemoUser } from '../Assets/Images/index';
import { Colors, DEVICE_STYLES, Fonts, moderateScale } from '../Config/Theme';
import Video from 'react-native-video';

const ReelScreen = () => {

	const videoPlayerRef = useRef(null);
	const [isPaused, setIsPaused] = useState(false);
	const [videos, setVideos] = useState([
		{
			id: 1,
			user_name: 'technical.guruji',
			user_image: DemoUser,
			music_name: 'zingaat',
			music_logo: DemoImage,
			total_num_of_tag_people: 4,
			reel_description: 'Hii',
			reel_likes: '2.4M',
			reel_total_num_of_comment: '2,109',
			reel_total_num_of_share: '1,383',
			video_url: require('../Assets/Videos/reel1.mp4'),
			video_poster: 'https://images.pexels.com/photos/910086/pexels-photo-910086.jpeg?auto=compress&cs=tinysrgb&w=800'
		},
		{
			id: 2,
			user_name: 'technical.guruji',
			user_image: DemoUser,
			music_name: 'zingaat',
			music_logo: DemoImage,
			total_num_of_tag_people: 4,
			reel_description: 'Hii',
			reel_likes: '2.4M',
			reel_total_num_of_comment: '2,109',
			reel_total_num_of_share: '1,383',
			video_url: require('../Assets/Videos/reel2.mp4'),
			video_poster: 'https://images.pexels.com/photos/4784323/pexels-photo-4784323.jpeg?auto=compress&cs=tinysrgb&w=800'
		},
		{
			id: 3,
			user_name: 'technical.guruji',
			user_image: DemoUser,
			music_name: 'zingaat',
			music_logo: DemoImage,
			total_num_of_tag_people: 4,
			reel_description: 'Hii',
			reel_likes: '2.4M',
			reel_total_num_of_comment: '2,109',
			reel_total_num_of_share: '1,383',
			video_url: require('../Assets/Videos/reel3.mp4'),
			video_poster: 'https://images.pexels.com/photos/7794451/pexels-photo-7794451.jpeg?auto=compress&cs=tinysrgb&w=800'
		},
		{
			id: 4,
			user_name: 'technical.guruji',
			user_image: DemoUser,
			music_name: 'zingaat',
			music_logo: DemoImage,
			total_num_of_tag_people: 4,
			reel_description: 'Hii',
			reel_likes: '2.4M',
			reel_total_num_of_comment: '2,109',
			reel_total_num_of_share: '1,383',
			video_url: require('../Assets/Videos/reel4.mp4'),
			video_poster: 'https://images.pexels.com/photos/804605/pexels-photo-804605.jpeg?auto=compress&cs=tinysrgb&w=800'
		},
		{
			id: 5,
			user_name: 'technical.guruji',
			user_image: DemoUser,
			music_name: 'zingaat',
			music_logo: DemoImage,
			total_num_of_tag_people: 7,
			reel_description: 'Hii',
			reel_likes: '2.4M',
			reel_total_num_of_comment: '2,109',
			reel_total_num_of_share: '1,383',
			video_url: require('../Assets/Videos/reel5.mp4'),
			video_poster: 'https://images.pexels.com/photos/8218377/pexels-photo-8218377.jpeg?auto=compress&cs=tinysrgb&w=800'
		}
	])

	const VideoCover = () => {
		return (
			<View style={styles.videoCoverContainer}>
				<View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
					<View style={{ flex: 0.8 }}>
						<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
							<View style={{ flex: 0.15, alignItems: 'center', justifyContent: 'center' }}>
								<FastImage
									source={DemoUser}
									style={{
										height: moderateScale(35),
										width: moderateScale(35),
										aspectRatio: 1,
										borderRadius: moderateScale(35 / 2)
									}}
									resizeMode={'cover'}
								/>
							</View>
							<View style={{ flex: 0.85, flexDirection: 'row', alignItems: 'center' }}>
								<View style={{ marginHorizontal: moderateScale(5) }}>
									<Text style={styles.userNameStyle}>uiux.alenjarndo</Text>
								</View>
								<TouchableOpacity
									style={styles.followBtnContainer}
									activeOpacity={0.8}
									accessibilityRole={'button'}
									onPress={() => console.log('Followoww')}
								>
									<Text style={styles.followBtnContainerText}>Follow</Text>
								</TouchableOpacity>
							</View>
						</View>

						<View style={{ marginTop: moderateScale(8) }}>
							<Text style={styles.description}>Designers......</Text>
						</View>

						<View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', marginTop: moderateScale(8), marginBottom: moderateScale(5) }}>
							<View style={styles.roundContainer}>
								<MusicIcon />
								<Text style={styles.roundContainerText}>Tum Tum</Text>
							</View>
							<View style={styles.roundContainer}>
								<PersonIcon />
								<Text style={styles.roundContainerText}>7 People</Text>
							</View>
						</View>
					</View>
					<View style={{ flex: 0.2, alignItems: 'center', paddingVertical: moderateScale(5) }}>
						<View style={styles.boxContainer}>
							<Icon
								size={moderateScale(25)}
								color={Colors.LIKE_COLOR}
								type={Icons.AntDesign}
								name={'heart'}
							/>
							<Text style={styles.boxNumberStyle}>2.4M</Text>
						</View>
						<View style={styles.boxContainer}>
							<Icon
								size={moderateScale(28)}
								color={Colors.WHITE}
								type={Icons.Ionicons}
								name={'ios-chatbubble-outline'}
							/>
							<Text style={styles.boxNumberStyle}>2,130</Text>
						</View>
						<View style={styles.boxContainer}>
							<Icon
								size={moderateScale(26)}
								color={Colors.WHITE}
								type={Icons.Feather}
								name={'send'}
							/>
							<Text style={styles.boxNumberStyle}>5,897</Text>
						</View>
						<View>
							<View style={{ marginVertical: moderateScale(10) }}>
								<Icon
									size={moderateScale(26)}
									color={Colors.WHITE}
									type={Icons.Feather}
									name={'more-vertical'}
								/>
							</View>
							<View style={{ marginTop: moderateScale(10) }}>
								<View
									style={styles.miniImageContainer}
								>
									<FastImage
										source={DemoUser}
										style={{
											height: '100%',
											width: '100%'
										}}
										resizeMode={'cover'}
									/>
								</View>
							</View>
						</View>
					</View>
				</View>
			</View>
		)
	}

	return (
		<CommonContainer
			barStyle={'light-content'}
			bgColor={Colors.BLACK}
		>
			<View style={{ flex: 1, backgroundColor: Colors.BLACK }}>
				<View style={{ flex: 1 }}>
					{/* <View style={styles.headerStyle}>
						<View>
							<Text style={styles.reelHeader}>Reels</Text>
						</View>
						<View>
							<CameraIcon />
						</View>
					</View> */}

					<View style={{flex : 1,height: DEVICE_STYLES.SCREEN_HEIGHT - moderateScale(50),width: DEVICE_STYLES.SCREEN_WIDTH}}>
						<FlatList
							data={videos}
							keyExtractor={(_, index) => index.toString()}
							showsVerticalScrollIndicator={false}
							pagingEnabled={true}
							alwaysBounceVertical={false}
							scrollEventThrottle={15}
							snapToAlignment={'center'}
							snapToInterval={DEVICE_STYLES.SCREEN_HEIGHT - moderateScale(50)}
							decelerationRate={'fast'}
							maxToRenderPerBatch={1}
							legacyImplementation={1}
							initialNumToRender={1}
							// windowSize={1}
							renderItem={({ item, index }) => {
								return (
									<TouchableOpacity
										activeOpacity={1}
										accessibilityRole={'switch'}
										onPress={() => setIsPaused(!isPaused)}
										style={{flex : 1,height: DEVICE_STYLES.SCREEN_HEIGHT - moderateScale(50),width: DEVICE_STYLES.SCREEN_WIDTH}}
									>
										<Video
											ref={videoPlayerRef}
											source={item.video_url}
											// source={{ uri: item.video_url }}
											accessibilityRole={'adjustable'}
											repeat={true}
											paused={isPaused}
											playInBackground={false}
											playWhenInactive={false}
											resizeMode={'cover'}
											posterResizeMode={'cover'}
											poster={item.video_poster}
											style={{
												height: DEVICE_STYLES.SCREEN_HEIGHT - moderateScale(50),
												width: DEVICE_STYLES.SCREEN_WIDTH
											}}
											onVideoSeek={(e) => console.log(e, 'seeking')}
											onBuffer={(e) => console.log('Buuuufer', e.isBuffering)}
											onError={(e) => console.log('errroring', e.error)}
											// onProgress={(e) => console.log(e.currentTime,e.playableDuration,e.seekableDuration)}
										/>

										<VideoCover  />
									</TouchableOpacity>
								)
							}}
						/>
					</View>
				</View>
			</View>
		</CommonContainer>
	)
}

export default ReelScreen

const styles = StyleSheet.create({
	reelHeader: {
		fontFamily: Fonts.Bold,
		fontSize: moderateScale(19),
		color: Colors.WHITE,
		textAlign: 'left'
	},
	followBtnContainer: {
		marginHorizontal: moderateScale(5),
		borderWidth: 1.2,
		borderColor: Colors.WHITE,
		paddingVertical: moderateScale(3),
		paddingHorizontal: moderateScale(15),
		borderRadius: moderateScale(10)
	},
	followBtnContainerText: {
		fontFamily: Fonts.Bold,
		fontSize: moderateScale(13),
		color: Colors.WHITE,
		textAlign: 'center'
	},
	userNameStyle: {
		fontFamily: Fonts.SemiBold,
		fontSize: moderateScale(14.5),
		color: Colors.WHITE,
		textAlign: 'left'
	},
	description: {
		fontFamily: Fonts.Regular,
		fontSize: moderateScale(14),
		color: Colors.WHITE,
		textAlign: 'left',
		flexWrap: 'wrap'
	},
	roundContainer: {
		backgroundColor: 'rgba(38, 38, 38, 0.7)',
		paddingVertical: moderateScale(5),
		paddingHorizontal: moderateScale(8),
		borderRadius: moderateScale(15),
		marginHorizontal: moderateScale(2),
		flexDirection: 'row',
		alignItems: 'center'
	},
	roundContainerText: {
		fontFamily: Fonts.Medium,
		fontSize: moderateScale(11.4),
		color: Colors.WHITE,
		textAlign: 'left',
		marginLeft: moderateScale(5)
	},
	boxContainer: {
		alignItems: 'center',
		justifyContent: 'space-around',
		alignSelf: 'center',
		width: '85%',
		height: undefined,
		aspectRatio: 1,
		marginVertical: moderateScale(5)
	},
	miniImageContainer: {
		width: moderateScale(30),
		height: undefined,
		aspectRatio: 1,
		borderRadius: moderateScale(4),
		overflow: 'hidden',
		borderWidth: 1,
		borderColor: '#fff'
	},
	boxNumberStyle: {
		fontFamily: Fonts.Medium,
		fontSize: moderateScale(12),
		color: Colors.WHITE,
		marginVertical: moderateScale(3.4)
	},
	headerStyle: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: moderateScale(10),
		position: 'absolute',
		width: '100%',
		zIndex: 1000
	},
	videoCoverContainer: {
		flex: 1,
		justifyContent: 'flex-end',
		position: 'absolute',
		height: '100%',
		width: '100%',
		padding: moderateScale(10),
		paddingRight: 0
	}
})