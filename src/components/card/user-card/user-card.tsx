import React, {useState} from 'react';
import {View, Image} from 'react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import {CustomText} from '../../shared';
import {logout} from '../../../assets/icons';

interface userCardProps {
  text?: string;
  onPress?: () => {};
  fullname?: string;
  description?: string;
  image?: string;
  style?: Object;
}
const UserCard = ({
  onPress,
  fullname,
  description,
  image,
  style,
}: userCardProps) => {
  const [colors, setColors] = useState([
    '#FFCC00',
    '#FF3399',
    '#9966FF',
    '#00CCFF',
  ]);

  return (
    <View style={styles().container}>
      <View style={styles().imageData}>
        <LinearGradient colors={colors} style={styles().borderGradientImage}>
          <Image style={styles().imageProfile} source={{uri: image}} />
        </LinearGradient>
      </View>
      <View style={styles().profileData}>
        <View style={styles().container}>
          <LinearGradient colors={colors} style={styles().borderGradient}>
            <CustomText style={styles().fullname}>{fullname}</CustomText>
          </LinearGradient>
          <Image style={styles().logout} source={logout} />
        </View>
        <View style={styles().container}>
          <LinearGradient colors={colors} style={styles().borderGradient}>
            <CustomText style={styles().description} type={'bold'}>
              {description}
            </CustomText>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

export default UserCard;
