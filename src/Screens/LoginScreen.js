import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { createRef, useState } from 'react';
import FastImage from 'react-native-fast-image';
import CommonContainer from '../Component/CommonContainer';
import { InstagramName } from '../Assets/Images/index';
import Icon, { Icons } from '../Config/Icons';
import { Colors, Fonts, moderateScale } from '../Config/Theme'
import { StackActions, useNavigation } from '@react-navigation/native';

const LoginInput = ({ value, onChangeValue, isPassword, placeholder, keyBoard, inputRef, onSubmit, autoComplete }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        ref={inputRef}
        value={value}
        onChangeText={onChangeValue}
        onSubmitEditing={onSubmit}
        secureTextEntry={isPassword}
        autoCapitalize={'none'}
        autoComplete={autoComplete}
        autoCorrect={false}
        placeholder={placeholder}
        placeholderTextColor={Colors.LIGHT_GRAY}
        keyboardType={keyBoard}
        style={styles.inputContainerText}
      />
    </View>
  )
}

const LoginScreen = () => {

  const navigation = useNavigation();

  const passRef = createRef();
  const [details, setDetails] = useState({
    email: '',
    password: ''
  });

  const handleValidation = () => {
    navigation.dispatch(StackActions.replace('BottomNavigator'))
  }

  return (
    <CommonContainer>
      <ScrollView
        contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', flex: 1, padding: moderateScale(15) }}
        showsVerticalScrollIndicator={false}
        keyboardDismissMode={true}
        keyboardShouldPersistTaps={'always'}
      >
        <FastImage
          source={InstagramName}
          style={{
            width: '60%',
            height: undefined,
            aspectRatio: 2
          }}
          resizeMode={FastImage.resizeMode.contain}
        />

        <View style={{ width: '100%' }}>
          <LoginInput
            value={details.email}
            onChangeValue={(e) => setDetails((prev) => ({ ...prev, email: e }))}
            keyBoard={'email-address'}
            autoComplete={'email'}
            placeholder={'Enter your register mail'}
            onSubmit={() => passRef.current.focus()}
          />

          <LoginInput
            inputRef={passRef}
            value={details.password}
            onChangeValue={(e) => setDetails((prev) => ({ ...prev, password: e }))}
            isPassword={true}
            autoComplete={'password'}
            placeholder={'Password'}
            onSubmit={() => console.log(details)}
          />

          <TouchableOpacity
            accessibilityRole='button'
            accessibilityLabel='forgot_button'
            activeOpacity={0.7}
            style={{ marginVertical: moderateScale(5), alignSelf: 'flex-end' }}
            onPress={() => console.log('forgot')}
          >
            <Text style={styles.forgotButtonText}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttonContainer, { opacity: (details.email.length && details.password.length) ? 1 : 0.7 }]}
            disabled={(details.email.length && details.password.length) ? false : true}
            activeOpacity={0.9}
            accessibilityLabel={'loginButton'}
            accessibilityRole={'button'}
            onPress={() => handleValidation()}
          >
            <Text style={styles.buttonContainerText}>Log in</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.facebookButtonContainer}
            accessibilityLabel={'loginWithFacebook'}
            accessibilityRole={'button'}
          >
            <Icon
              type={Icons.Ionicons}
              name={'logo-facebook'}
              size={moderateScale(17)}
              color={Colors.SECONDARY_COLOR}
            />
            <Text style={styles.facebookButtonContainerText}>Log in with facebook</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.devider} />

            <Text style={styles.orTextStyle} >OR</Text>
          </View>

          <View style={styles.bottomContainer}>
            <Text style={[styles.bottomContainerText, { color: Colors.GRAY }]}>Don't have an account?</Text>
            <Text
              accessibilityRole={'text'}
              onPress={() => console.log('ppp')}
              style={[styles.bottomContainerText, { color: Colors.SECONDARY_COLOR, marginLeft: moderateScale(3) }]}
            >
              Sign up.
            </Text>
          </View>
        </View>
      </ScrollView>
    </CommonContainer>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.LIGHT_GRAY,
    borderRadius: moderateScale(5),
    paddingHorizontal: moderateScale(8),
    marginVertical: moderateScale(8)
  },
  inputContainerText: {
    flex: 1,
    fontFamily: Fonts.Regular,
    fontSize: moderateScale(14.5),
    color: Colors.SECONDARY_BLACK,
    height : moderateScale(44)
  },
  forgotButtonText: {
    fontFamily: Fonts.Medium,
    fontSize: moderateScale(12),
    color: Colors.SECONDARY_COLOR
  },
  buttonContainer: {
    backgroundColor: Colors.SECONDARY_COLOR,
    marginVertical: moderateScale(18),
    alignItems: 'center',
    justifyContent: 'center',
    height : moderateScale(44),
    borderRadius: moderateScale(4.5)
  },
  buttonContainerText: {
    fontFamily: Fonts.SemiBold,
    color: Colors.WHITE,
    fontSize: moderateScale(14)
  },
  facebookButtonContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: moderateScale(10)
  },
  facebookButtonContainerText: {
    fontFamily: Fonts.SemiBold,
    fontSize: moderateScale(13.5),
    color: Colors.SECONDARY_COLOR,
    marginLeft: moderateScale(8)
  },
  devider: {
    height: StyleSheet.hairlineWidth + 0.5,
    backgroundColor: Colors.LIGHT_GRAY,
    width: '100%',
    marginVertical: moderateScale(22)
  },
  orTextStyle: {
    fontFamily: Fonts.SemiBold,
    fontSize: moderateScale(12),
    color: Colors.GRAY,
    position: 'absolute',
    backgroundColor: Colors.WHITE,
    paddingHorizontal: moderateScale(25)
  },
  bottomContainer: {
    marginVertical: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  bottomContainerText: {
    fontFamily: Fonts.Regular,
    fontSize: moderateScale(14)
  }
})