import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import FastImage from 'react-native-fast-image';
import MainSplashScreen from 'react-native-splash-screen';
import CommonContainer from '../Component/CommonContainer';
import { Colors } from '../Config/Theme';
import { BrandLogo } from '../Assets/Images/index'
import { StackActions, useNavigation } from '@react-navigation/native';

const SplashScreen = () => {

	const navigation = useNavigation();

	useEffect(() => {
		MainSplashScreen.hide();

		setTimeout(() => {
			navigation.dispatch(StackActions.replace('LoginScreen'))
		},2000)
	},[]);

	return (
		<CommonContainer>
			<View style={{flex: 1,alignItems: 'center',justifyContent:'center'}}>
				<FastImage
					source={BrandLogo}
					resizeMode={FastImage.resizeMode.contain}
					style={{
						width : '25%',
						height : undefined,
						aspectRatio : 1
					}}
				/>
			</View>

			<ActivityIndicator
				size={'large'}
				color={Colors.SECONDARY_COLOR}
				style={{
					position : 'absolute',
					bottom : 50,
					alignSelf : 'center'
				}}
			/>
		</CommonContainer>
	)
}

export default SplashScreen

const styles = StyleSheet.create({})