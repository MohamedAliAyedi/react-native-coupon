import {StyleSheet} from 'react-native';
import {
  fontValue,
  heightPercentageToDP,
} from '../../../config/global-styles';
import {COLORS} from '../../../config/constants';

const styles = (fakeData?: any) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: '100%',
      alignSelf: 'center',
      alignContent: 'center',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: COLORS.white,
    },
    mainBody: {
      alignItems: 'center',
      backgroundColor: COLORS.white,
      position: 'relative',
      paddingTop: 30,
    },
    textCategories: {
      alignSelf: 'center',
      paddingTop: 8,
      fontSize: 16,
    },
    ListProductCard: {
      alignSelf: 'center',
      alignContent: 'center',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    contentContainerStyle: {
      width: 'auto',
      height: 'auto',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignSelf: 'center',
      alignContent: 'center',
      alignItems: 'flex-start',
      paddingBottom: fakeData > 8 ? heightPercentageToDP(8) : 0,
    },
    categorieContainer: {
      height: '50%',
      backgroundColor: COLORS.white,
      transform: [{scaleX: -1}],
    },
    centeredView: {
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      alignSelf: 'center',
      width: '90%',
      height: '100%',
    },
    modalView: {
      borderRadius: 10,
      alignItems: 'center',
      width: '100%',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      backgroundColor: COLORS.white,
    },
    imageSlider: {
      width: '100%',
      height: 150,
      resizeMode: 'cover',
      borderRadius: 10,
    },
    title: {
      marginVertical: 10,
      fontSize: fontValue(23),
    },
    scrollingContaier: {
      height: '60%',
      width: '100%',
      backgroundColor: COLORS.white,
      padding: 10,
      alignSelf: 'center',
      alignContent: 'center',
    },
    buttonLoading: {
      textTransform: 'capitalize',
      paddingHorizontal: 10,
      backgroundColor: COLORS.primary,
      color: COLORS.white,
      borderRadius: 20,
      marginTop: 10,
      marginBottom: 30,
      width: '50%',
      height: heightPercentageToDP(5),
      alignSelf: 'center',
    },
    textLoadingButton: {
      paddingTop: 5,
      color: COLORS.white,
      textAlign: 'center',
      justifyContent: 'center'
    }
  });

export default styles;
