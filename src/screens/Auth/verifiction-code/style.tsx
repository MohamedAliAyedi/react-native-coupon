import {StyleSheet} from 'react-native';
import {FONT, COLORS} from '../../../config/constants';
import {
  fontValue,
  widthPercentageToDP,
  heightPercentageToDP,
} from '../../../config/global-styles';
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: heightPercentageToDP(2),
    paddingHorizontal: widthPercentageToDP(10),
    width: widthPercentageToDP(100),
    paddingBottom: heightPercentageToDP(3),
    backgroundColor: COLORS.white,
    alignItems: 'center',
  },
  header: {
    height: '55%',
  },
  viewHeader: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  viewHeaderLoge: {
    paddingTop: heightPercentageToDP(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewHeaderContent: {
    paddingTop: heightPercentageToDP(3),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Title: {
    fontSize: fontValue(23),
    color: COLORS.darkBlue,
    fontStyle: 'normal',
    fontWeight: '700',
    width: widthPercentageToDP(80),
    textAlign: 'center',
  },
  IconGoBack: {
    transform: [{scaleX: 1}],
    marginVertical: heightPercentageToDP(0.9),
  },
  sousTitle: {
    marginTop: heightPercentageToDP(4.8),
    marginHorizontal: widthPercentageToDP(0.3),
    fontSize: fontValue(14),
    textAlign: 'center',
  },
  verifRTL: {
    textAlign: 'left',
  },
  phoneRTL: {
    textAlign: 'left',
    fontSize: fontValue(13),
    fontStyle: 'normal',
    marginTop: heightPercentageToDP(0.5),
  },
  ViewTextVerification: {
    marginTop: heightPercentageToDP(0.9),
    marginHorizontal: widthPercentageToDP(6),
  },
  ViewEnd: {
    alignContent: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: widthPercentageToDP(0.1),
  },
  time: {
    color: COLORS.black,
    fontFamily: FONT.semiBold,
    fontSize: fontValue(17),
    fontWeight: '600',
  },
  Input: {
    height: heightPercentageToDP(18),
    backgroundColor: COLORS.white,
    borderRadius: 20,
    marginVertical: heightPercentageToDP(4.8),
    textAlign: 'left',
  },
  verificationText: {
    fontSize: fontValue(14),
    fontFamily: FONT.semiBold,
    color: COLORS.blueCell,
    marginTop: widthPercentageToDP(3),
    marginHorizontal: widthPercentageToDP(7),
    textAlign: 'left',
  },
  codeFiledRoot: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    paddingBottom: heightPercentageToDP(6),
  },
  Tire: {
    fontFamily: FONT.regular,
    width: 44,
    height: 3,
    backgroundColor: COLORS.backgroundGrey,
    alignSelf: 'center',
  },
  defaultText: {
    color: COLORS.black,
    fontSize: fontValue(17),
    fontFamily: FONT.medium,
    fontWeight: 'normal',
  },
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 70,
    height: 45,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: COLORS.lightGrey,
    backgroundColor: COLORS.lightGrey,
    textAlign: 'center',
  },
  focusCell: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
  },
  errorCell: {
    borderColor: '#EC2626',
    backgroundColor: '#FFEDED',
  },
});
