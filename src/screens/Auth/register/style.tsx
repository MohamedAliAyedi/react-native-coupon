import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONT} from '../../../config/constants';
import { fontValue, heightPercentageToDP, widthPercentageToDP } from '../../../config/global-styles';

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    marginTop: 'auto',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: COLORS.white,
    padding: 20,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: fontValue(30),
    alignSelf: 'center'
  },
  subText: {
    marginTop: 10,
    width: '80%',
    fontSize: fontValue(16),
    textAlign: 'center',
    alignSelf: 'center'
  },
  textInput: {
    borderColor: COLORS.black,
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
  },
  button: {
    textAlign: 'center',
    fontSize: 18,
    color: COLORS.black,
    fontFamily: FONT.black,
  },
  TouchableHighlight: {
    padding: 10,
    bottom: 0,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    color: 'white',
    marginTop: 25,
    borderRadius: 10,
  },
  text: {
      padding: 5,
      fontFamily: FONT.semiBold,
      color: COLORS.black,
      marginBottom: '1%',
      fontSize: 13,
  },
  Input:{
      textAlign: 'left',
      width: '100%',
      fontWeight: '600',
      fontSize: 16,
      fontFamily: FONT.semiBold,
      color: COLORS.black,
  },
  link_underline: {
    textDecorationLine: 'none',
    color: COLORS.black,
    fontFamily: FONT.medium,
    fontSize: 12,
    padding: 14,
    top: 4,
    textAlign: 'center',
  },
  ToastContainer: {
    backgroundColor: COLORS.black,
    transform: [{scaleX: -1}],
    flexDirection: 'row',
    width: '95%',
    borderRadius: 8,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  textButtonStyle: {
    transform: [{scaleX: -1}],
    fontFamily: FONT.medium,
    fontSize: 12,
    height: 5,
  },
  ViewInput: (regix, checked) => {
    return {
      borderColor: regix
        ? COLORS.correctBlue
        : !regix && checked
        ? COLORS.red
        : COLORS.BackgroundInput,
      backgroundColor: checked ? COLORS.white : COLORS.BackgroundInput,
      borderWidth: 2,
      borderRadius: 15,
      alignContent: 'space-between',
      width: '65%',
      alignItems: 'center',
    };
  }, 
  flexRtl: {
      marginRight: 15,
      flexDirection: 'row-reverse',
  }, 
  viewTextInput: {
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'flex-end',
    width: '95%',
    height: heightPercentageToDP(7),
    alignItems: 'center',
  },
  ViewAlert: {
    alignContent: 'space-between',
    width: '95%',
    marginRight: widthPercentageToDP(3.4),
    marginVertical: heightPercentageToDP(7.9),
  },
  textStyle: {},
});
export default styles;
