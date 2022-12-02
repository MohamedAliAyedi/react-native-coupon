import {StyleSheet} from 'react-native';
import {
  fontValue,
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../../config/global-styles';
import {COLORS, FONT} from '../../../config/constants';

const styles = (isRTL?: any, checked?: any, size?: any) =>
  StyleSheet.create({
    full: {
      width: '100%',
      height: '100%',
      backgroundColor: '#0000',
    },
    head:{
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
    isRTL: {
      alignItems: isRTL ? 'flex-end' : 'flex-start',
    },
    container: {
      backgroundColor: checked ? COLORS.primary : '#F3F3F3',
      width: 'auto',
      borderWidth: 1,
      borderColor: checked ? COLORS.orange : '#D0D0D0',
      flexDirection: isRTL ? 'row':'row-reverse',
      borderRadius: 25,
      paddingVertical: 1,
      paddingHorizontal: 10,
      marginHorizontal: 5,
      height: 39,
      transform: [{scaleX: -1}],
    },
    column: {
      flexDirection: 'column',
    },
    row: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      alignItems: 'center',
    },
    center: {
      alignItems: 'center',
    },
    spaceBetween: {
      width: '100%',
      justifyContent: 'space-between',
      alignSelf: 'flex-end',
    },
    image: {
      width: 35,
      height: 35,
      borderRadius: 200 / 2,
      backgroundColor: '#aac341',
    },
    containerImage: {
      width: 80,
      marginHorizontal: 10,
      marginBottom: 15,
    },
    padding: {
      padding: fontValue(size),
    },
    margin: {
      marginHorizontal: fontValue(size),
    },
    containe: {
      position: 'absolute',
      zIndex: 2,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    },
    title: {
      alignSelf: 'center',
      color: checked ? COLORS.white : COLORS.black,
      fontFamily: FONT.medium,
      //color: checked ? COLORS.white : COLORS.grey,
      fontSize: fontValue(14),
      paddingHorizontal: 5,
    },
  });

export default styles;
