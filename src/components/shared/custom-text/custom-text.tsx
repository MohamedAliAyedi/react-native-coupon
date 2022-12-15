import React from 'react';
import {Text, ViewStyle} from 'react-native';
import {COLORS, FONT} from '../../../config/constants';
import {ReactNode} from 'react';
import {fontValue} from '../../../config/global-styles';
import i18n from 'i18next';
import i18next from 'i18next';

interface textProps {
  numberOfLines?: number;
  style?: any;
  type?: 'regular' | 'bold' | 'semiBold' | 'medium' | 'light' | 'black';
  children?: any;
}
const CustomText = ({numberOfLines, style, type, children}: textProps) => {
  const checkType = () => {
    switch (type) {
      case 'regular':
        return FONT.regular;
      case 'bold':
        return FONT.bold;
      case 'semiBold':
        return FONT.semiBold;
      case 'medium':
        return FONT.medium;
      case 'light':
        return FONT.light;
      case 'black':
        return FONT.black;
      default:
        return FONT.regular;
    }
  };
  return (
    <Text
      numberOfLines={numberOfLines}
      style={{
        fontSize: fontValue(16),
        color: COLORS.black,
        fontFamily: checkType(),
        textAlign: 'left',
        ...style,
      }}>
      {children}
    </Text>
  );
};

export default CustomText;
