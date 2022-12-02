import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  View,
} from 'react-native';
import {ReactNode} from 'react';
import {COLORS} from '../../../config/constants';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../../config/global-styles';
import {IMAGES} from '../../../assets';
interface baseProps {
  children?: ReactNode;
  backgroundColor?: string;
  backgroundImage?: String;
  withBaseViewPadding?: boolean;
}
const BaseView = ({
  children,
  backgroundColor,
  backgroundImage,
  withBaseViewPadding = true,
}: baseProps) => {
  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      style={{
        backgroundColor: backgroundColor ? backgroundColor : COLORS.white,
      }}
    >
      <KeyboardAvoidingView
        // behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{
          paddingTop:
            Platform.OS === 'ios' && withBaseViewPadding
              ? heightPercentageToDP(2)
              : null,
          flex: 1,
          backgroundColor: backgroundColor ? backgroundColor : COLORS.white,
        }}
      >
        {children}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default BaseView;

var styles = StyleSheet.create({
  backgroundImage: {
    zIndex: 0,
    position: 'absolute',
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(100),
  },
});
