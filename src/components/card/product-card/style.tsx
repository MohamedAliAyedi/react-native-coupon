import {StyleSheet} from 'react-native';
import {
  fontValue,
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../../config/global-styles';
import {COLORS} from '../../../config/constants';

const styles = (fakeData?: any) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: 163,
      height: 168,
      alignSelf: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#F3F3F3',
      borderRadius: 20
    },
    imageCompany: {
      resizeMode: 'cover',
      height: 45,
      width: 45,
      borderRadius: 50,
      alignSelf: 'center',
    },
    borderGradientImage: {
      height: 'auto',
      width: 'auto',
      padding: 2,
      borderRadius: 50,
      justifyContent: 'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 11,
      },
      shadowOpacity: 0.55,
      shadowRadius: 14.78,
      
      elevation: 22,
    },
    borderGradient: {
      padding: 2,
      borderRadius: 40,
      marginVertical: 5
    },
    name: {
      color: COLORS.black,
      fontSize: fontValue(16)
    },
    description: {
      color: '#9966FF',
      fontSize: fontValue(16)
    },
    profileData: {
      //backgroundColor: 'blue', 
      width: '70%'
    },
    logout: {
      height: 40,
      width: 110,
      borderRadius: 30,
      alignSelf: 'center'
    },
    imageData: {
      width: '30%',
      flexDirection: 'row',
      alignSelf: 'center',
    },
    buttonDetail: {
      backgroundColor: COLORS.white,
      width: 70,
      height: 30,
      borderRadius: 12,
      justifyContent: 'center',
      textAlign: 'center',
      position: 'absolute',
      right: 10,
      bottom: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 11,
      },
      shadowOpacity: 0.55,
      shadowRadius: 14.78,
      
      elevation: 10,
    },
    textDetail: {
      color: COLORS.black,
      fontSize: fontValue(16),
      alignSelf: 'center'
    },
  
  });

export default styles;
