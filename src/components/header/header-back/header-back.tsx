import React, {useState} from 'react';
import {Pressable, StyleSheet, View, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {
  fontValue,
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../../config/global-styles';
import {COLORS} from '../../../config/constants';
import {useNavigation} from '@react-navigation/native';
import i18n from 'i18next';
import {CustomText} from '../../shared';
import moment from 'moment';
import {icons} from '../../../assets';
import i18next from 'i18next';

interface headerBack {
  noBack?: boolean;
  title?: string;
  noLine?: boolean;
  onPressLogout?: () => {};
}
const HeaderBack = ({noBack, title, onPressLogout}: headerBack) => {
  const navigation = useNavigation();
  const isRTL = i18n.language === 'ar' || i18next.language === 'ur';

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.HeaderWithTitle}>
          {!noBack && (
            <View>
              <Pressable
                style={styles.backLogo}
                onPress={() => {
                  navigation.goBack();
                }}>
                <Feather
                  name={isRTL ? 'arrow-right' : 'arrow-left'}
                  size={fontValue(30)}
                  color={COLORS.black}
                  style={{
                    alignSelf: 'center',
                    marginTop: 10.5,
                  }}
                />
              </Pressable>
            </View>
          )}

          {title && (
            <View style={styles.title}>
              <CustomText type={'bold'} style={styles.text}>
                {title}
              </CustomText>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default HeaderBack;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    height: heightPercentageToDP(8),
    width: widthPercentageToDP(100),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: heightPercentageToDP(1),
    paddingHorizontal: widthPercentageToDP(4),
  },
  left: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  HeaderWithTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  backLogo: {
    color: COLORS.black,
    width: 50,
    height: 50,
    borderRadius: 40,
  },
  logo: {
    height: fontValue(45),
  },
  title: {
    paddingHorizontal: widthPercentageToDP(4),
    color: COLORS.blue,
    alignSelf: 'center',
  },
  text: {
    fontSize: fontValue(20),
    textAlign: 'left',
    width: widthPercentageToDP(55),
    color: COLORS.black,
  },
});
