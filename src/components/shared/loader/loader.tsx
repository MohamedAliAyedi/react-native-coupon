import React from 'react';
import {ReactNativeModal} from 'react-native-modal';
import {ActivityIndicator, Dimensions} from 'react-native';
import {COLORS} from '../../../config/constants';
import {fontValue} from '../../../config/global-styles';

const Loader = ({isVisible}) => {
  return (
    <ReactNativeModal
      useNativeDriverForBackdrop
      animationOut={'fadeOut'}
      backdropColor="transparent"
      animationIn={'fadeIn'}
      deviceHeight={Dimensions.get('screen').height}
      deviceWidth={Dimensions.get('screen').width}
      isVisible={isVisible}
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      statusBarTranslucent
    >
      <ActivityIndicator size={fontValue(30)} color={COLORS.orange} />
    </ReactNativeModal>
  );
};
export default Loader;
