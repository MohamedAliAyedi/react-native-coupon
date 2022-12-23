import React from 'react';
import {View, Image, Pressable} from 'react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import { CustomText } from '../../shared';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from '../../../config/constants';
interface userCardProps {
  onPress?: () => void;
  fullname?: string;
  description?: string;
  image?: string;
  style?: Object;
}
const StoreCard = ({
  onPress,
  fullname,
  description,
  image,
  style,
}: userCardProps) => {
  const [liked, setLiked] = React.useState<boolean>(false);
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <View style={styles().borderGradientImage}>
          <Image
            style={styles().imageCompany}
            source={{
              uri: 'https://ardgowanhospice.org.uk/wp-content/uploads/2018/09/1920x1080-brands-amazon-logo.jpg',
            }}
          />
        </View>
        <View style={{marginVertical: 5, marginHorizontal: 20}}>
          <CustomText type={'bold'} style={styles().name}>{fullname}</CustomText>
          <CustomText type={'bold'} style={styles().description}>{description}</CustomText>
        </View>
      </View>
      <Pressable onPress={() => {setLiked(!liked)}}>
        <FontAwesome5
              name={ !liked ? 'heart': 'heartbeat'}
              
              style={{fontSize: 21, margin: 5}}
              color={COLORS.black}
              
            />
      </Pressable>
    </View>
  );
};

export default StoreCard;
