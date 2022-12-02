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
      width: '100%',
      alignSelf: 'center',
      alignContent: 'center',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: COLORS.white,
      paddingBottom: 10
    },
    imageProfile: {
      resizeMode: 'cover',
      height: 100,
      width: 100,
      borderRadius: 50,
      alignSelf: 'center'
    },
    borderGradientImage: {
      height: 'auto',
      width: 'auto',
      padding: 2,
      borderRadius: 50,
      justifyContent: 'center'
    },
    borderGradient: {
      padding: 2,
      borderRadius: 40,
      marginVertical: 5
    },
    fullname: {
      backgroundColor: COLORS.black,
      color: COLORS.white,
      borderRadius: 20,
      paddingHorizontal: 15,
      paddingVertical: 3,
      width: 'auto'
    },
    description: {
      backgroundColor: COLORS.white,
      color: COLORS.black,
      borderRadius: 20,
      paddingHorizontal: 15,
      paddingVertical: 3
    },
    profileData: {
      //backgroundColor: 'blue', 
      width: '70%'
    },
    logout: {
      height: 40,
      width: 110,
      borderRadius: 50,
      alignSelf: 'center'
    },
    imageData: {
      width: '30%',
      flexDirection: 'row',
      alignSelf: 'center',
    }
  
  });

export default styles;
