import {StyleSheet, ViewStyle} from 'react-native';
import {FONT, COLORS} from '../../../config/constants';
import {
  fontValue,
  widthPercentageToDP,
  heightPercentageToDP,
} from '../../../config/global-styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: heightPercentageToDP(3),
    paddingHorizontal: widthPercentageToDP(5),
    paddingBottom: heightPercentageToDP(3),
  },
  flexRtl: {
      flexDirection: 'row',
  },
  Icon: {
    color: COLORS.darkBlue,
    marginVertical: heightPercentageToDP(0.9),
  },
  viewHeader: {
      paddingTop: heightPercentageToDP(1),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: heightPercentageToDP(7),
  },
  viewHeaderImage: {
      flexDirection: 'row',
      justifyContent: 'center',
  },
  Title: {
    fontSize: fontValue(18),
    color: COLORS.darkBlue,
  },
  TextEnd: {
    fontSize: fontValue(14),
    alignSelf: 'center',
  },
  button: {
    marginTop: heightPercentageToDP(7.4),
  },
  bottomView: {
    marginTop: heightPercentageToDP(2.4),
    width: 'auto',
    textAlign: 'center',
    alignSelf: 'center',
  },
  soustitle: {
      color: COLORS.black,
      marginTop: heightPercentageToDP(4.8),
      fontSize: fontValue(16),
      fontStyle: 'normal',
  },
  ViewInput: (regix: any, checked: any): ViewStyle => {
    return({
      borderColor: regix
        ? COLORS.correctBlue
        : !regix && checked
        ? COLORS.red
        : COLORS.BackgroundInput,
      backgroundColor: checked ? COLORS.white : COLORS.BackgroundInput,
      borderWidth: 2,
      marginTop: heightPercentageToDP(0.8),
      borderRadius: 20,
      alignContent: 'space-between',
      width: '100%',
      alignItems: 'center',
    });
  },
  Input: {
      textAlign: 'left',
      width: '100%',
      fontWeight: '600',
      paddingHorizontal: 10,
      fontSize: fontValue(16),
      fontFamily: FONT.semiBold,
      color: COLORS.black,
  },
  viewTextInput: {
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'flex-end',
    width: '80%',
    height: heightPercentageToDP(7),
    alignItems: 'center',
  },
  ViewAlert: {
    alignContent: 'space-between',
    width: '100%',
    marginRight: widthPercentageToDP(3.4),
    marginVertical: heightPercentageToDP(7.9),
  },
  alert: {
    fontSize: 13,
    fontStyle: 'normal',
    color: COLORS.dark,
    lineHeight: 20,
    width: '90%',
  },
  IconInfo: {
    marginBottom: widthPercentageToDP(2.5),
    width: '10%',
    fontFamily: FONT.bold,
  },

  ViewCancel: {
    width: '17%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  ViewEnd: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  defaultText: {
    color: COLORS.blueCell,
    fontFamily: FONT.bold,
    fontWeight: '700',
  },
  hairline: {
    marginTop: 10,
    backgroundColor: '#A2A2A2',
    height: 1,
    width: '45%'
  },
  loginButtonBelowText1: {
    fontSize: 16,
    width: '10%',
    textAlign: 'center',
    alignSelf: 'center',
    color: COLORS.grey
  },
});
