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
  children?: string;
}
const CustomText = ({numberOfLines, style, type, children}: textProps) => {
  const checkType = () => {
    switch (type) {
      case 'regular':
        return 'regular';
      case 'bold':
        return 'bold';
      case 'semiBold':
        return 'semiBold';
      case 'medium':
        return 'medium';
      case 'light':
        return 'light';
      case 'black':
        return 'light';
      default:
        return 'regular';
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
