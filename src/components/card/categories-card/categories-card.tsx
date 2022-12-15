import React, {useState} from 'react';
import {ActivityIndicator, Pressable, Text, View} from 'react-native';

import {useTranslation} from 'react-i18next';
import i18n from 'i18next';

import {useNavigation} from '@react-navigation/native';
import styles from './style';
import {COLORS} from '../../../config/constants';
interface postCardProps {
  checked?: boolean;
  text?: string;
  onPress?: () => void;
  id?: string;
}
const CategoriesCard = ({checked, text, onPress, id}: postCardProps) => {
  const isRTL = false;
  const [hasFinishedLoadingImage, setHasFinishedLoadingImage] =
    useState<boolean>(false);
  const [imageLoadError, setImageLoadError] = useState<boolean>(false);
  return (
    <Pressable
      key={id}
      style={styles(false, checked, null).container}
      onPress={onPress}>
      <Text style={styles(isRTL, checked, null).title}> {text} </Text>
    </Pressable>
  );
};

export default CategoriesCard;
