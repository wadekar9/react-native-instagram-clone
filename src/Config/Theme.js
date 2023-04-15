import { Platform, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 813;

const scale = size => width / guidelineBaseWidth * size;
const verticalScale = size => height / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

export { scale, verticalScale, moderateScale };

export const Fonts = {
    Heavy: 'SF-Pro-Text-Heavy',
    Bold: 'SF-Pro-Text-Bold',
    SemiBold: 'SF-Pro-Text-Semibold',
    Medium: 'SF-Pro-Text-Medium',
    Light: 'SF-Pro-Text-Light',
    Regular: 'SF-Pro-Text-Regular'
}

export const Colors = {
    PRIMARY_COLOR: '#FFFFFF',
    SECONDARY_COLOR: '#3797EF',
    WHITE: '#FFFFFF',
    BLACK: '#000000',
    PRIMARY_WHITE_COLOR: '#FAFAFA',
    SECONDARY_BLACK: '#262626',
    TEXT_COLOR: '#313543',
    DARK_GRAY: '#484848',
    ALTRA_DARK_GRAY: '#76838f',
    GRAY: 'rgba(0,0,0,0.4)',
    LIGHT_GRAY: '#DEDEDE',
    SECONDARY_GRAY : '#C7C7CC',
    TRANSPARENT : 'rgab(0,0,0,0)'
}

export const DEVICE_STYLES = {
    SCREEN_WIDTH : width,
    SCREEN_HEIGHT : height,
}

export const platform = Platform;