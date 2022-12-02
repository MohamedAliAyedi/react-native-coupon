import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {fontValue, heightPercentageToDP} from '../../../config/global-styles';
import {COLORS} from '../../../config/constants';
import LinearGradient from 'react-native-linear-gradient';
import {CustomText} from '../../shared';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface mainButtonProps {
  text?: string;
  bgColor?: string;
  onPress?: () => {};
  type?: 'primary' | 'ghost' | 'disabled' | 'facebook' | 'google' | 'apple';
  disabled?: boolean;
  style?: Object;
  notifItem?: boolean;
}
const MainButton = ({
  onPress,
  text,
  bgColor,
  type,
  disabled,
  style,
  notifItem,
}: mainButtonProps) => {
  const checkType = type => {
    switch (type) {
      case 'primary':
        return 'primary';
      case 'ghost':
        return 'ghost';
      case 'facebook':
        return 'facebook';
      case 'google':
        return 'google';
      case 'apple':
        return 'apple';
      case 'disabled':
        return 'disabled';
      default:
        return 'primary';
    }
  };
  return (
    <Pressable
      disabled={disabled | (checkType(type) === 'disabled')}
      onPress={onPress}
      style={{...styles.container(checkType(type), disabled), ...style}}>
      <LinearGradient
        useAngle
        angle={90}
        style={styles.linear}
        colors={
          checkType(type) === 'disabled'
            ? ['#9E9E9E', '#D2D2D2']
            : checkType(type) === 'facebook'
            ? ['#1877F2', '#1877F2']
            : checkType(type) === 'google'
            ? ['#FFFFFF', '#FFFFFF']
            : checkType(type) === 'apple'
            ? ['#000000', '#000000']
            : [COLORS.orange, COLORS.orange]
        }>
        <View>
          {checkType(type) === 'facebook' ? (
            <FontAwesome5
              name={'facebook'}
              style={{fontSize: 21, margin: 5}}
              color={COLORS.white}
            />
          ) : checkType(type) === 'google' ? (
            <FontAwesome5
              name={'google'}
              style={{fontSize: 21, margin: 5}}
              color={COLORS.black}
            />
          ) : checkType(type) === 'apple' ? (
            <FontAwesome5
              name={'apple'}
              style={{fontSize: 21, margin: 5}}
              color={COLORS.white}
            />
          ) : null}
        </View>
        <CustomText type={'semiBold'} style={styles.text(type)}>
          {text}
        </CustomText>
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: (type: any, disabled: any) => {
    return {
      opacity: disabled ? 0.6 : 1,
      borderRadius: type === 'ghost' ? fontValue(13) : fontValue(10),
      borderWidth:
        type === 'ghost' || type === 'google' ? fontValue(1.5) : null,
      borderColor: type === 'google' ? COLORS.lightGrey : COLORS.white,
      width: '100%',
      height: heightPercentageToDP(7),
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    };
  },
  linear: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: (type: any) => {
    return {
      color:
        type === 'primary' || type === 'disabled'
          ? COLORS.white
          : type === 'facebook'
          ? '#FFFFFF'
          : type === 'google'
          ? '#161616'
          : type === 'apple'
          ? '#FFFFFF'
          : '#FFFFFF',
      width: '40%',
      textAlign: 'center',
      fontSize: fontValue(16),
    };
  },
});
export default MainButton;
