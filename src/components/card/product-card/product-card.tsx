import React from 'react';
import {View, Image, Pressable} from 'react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import { CustomText } from '../../shared';
interface userCardProps {
  onPress?: () => {};
  fullname?: string;
  description?: string;
  image?: string;
  style?: Object;
}
const ProductCard = ({
  onPress,
  fullname,
  description,
  image,
  style,
}: userCardProps) => {
  return (
    <View>
      <View style={styles().container}>
        <Pressable style={styles().buttonDetail}>
          <CustomText type={'bold'} style={styles().textDetail}>Details</CustomText>
        </Pressable>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <View style={styles().borderGradientImage}>
          <Image
            style={styles().imageCompany}
            source={{
              uri: 'https://ardgowanhospice.org.uk/wp-content/uploads/2018/09/1920x1080-brands-amazon-logo.jpg',
            }}
          />
        </View>
        <View style={{marginVertical: 5}}>
          <CustomText type={'bold'} style={styles().name}>Name</CustomText>
          <CustomText type={'bold'} style={styles().description}>Description</CustomText>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
