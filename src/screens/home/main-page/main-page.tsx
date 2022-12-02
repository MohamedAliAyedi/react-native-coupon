import React, {useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {Image, ScrollView, View, FlatList, Platform} from 'react-native';
import {
  CategoriesCard,
  CustomText,
  ProductCard,
  UserCard,
} from '../../../components';
import styles from './style';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {COLORS} from '../../../config/constants';
import i18next from 'i18next';

// @ts-ignore
const MainPage = ({navigation}) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const [itemChosed, setItemChosed] = React.useState<number>(0);
  const flatListRef = useRef<FlatList>(null);
  const [TEMP_DATA, setTEMP_DATA] = React.useState<any>([
    {id: 0, name: 'All'},
    {id: 1, name: 'Fashion'},
    {id: 2, name: 'Health & Beauty'},
    {id: 3, name: 'Electronics'},
    {id: 4, name: 'House'},
    {id: 5, name: 'Health & Beauty'},
  ]);
  const isRTL = i18next.language === 'ar';

  const fetchListCategorie = ({item, index}: any) => {
    return (
      <CategoriesCard
        key={index}
        text={item.name}
        checked={itemChosed == index ? true : false}
        onPress={() => {
          setItemChosed(index);
        }}
      />
    );
  };

  return (
    <SafeAreaProvider
      initialMetrics={initialWindowMetrics}
      style={styles().mainBody}>
      <UserCard
        fullname={'Dali Ayadi'}
        description={'+216 27 313 347 | Tunisia'}
        image={'https://avatars.githubusercontent.com/u/46815881?v=4'}
      />
      <ScrollView
        style={{
          height: '60%',
          width: '100%',
          backgroundColor: COLORS.white,
          padding: 10,
          alignSelf: 'center',
          alignContent: 'center',
        }}>
        <Image
          style={styles().imageSlider}
          source={{
            uri: 'https://www.webmonkey.com/wp-content/uploads/2020/07/purple-color-codes.webp',
          }}
        />
        <CustomText type={'bold'} style={styles().title}>
          {t('Featured')}
        </CustomText>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <ProductCard />
          <ProductCard />
        </View>
        <CustomText type={'bold'} style={styles().title}>
          {t('All Store')}
        </CustomText>
        <View style={{transform: [{scaleX: -1}], marginBottom: 80}}>
          <FlatList
            scrollToOverflowEnabled={true}
            onScrollToIndexFailed={error => {
              flatListRef.current?.scrollToOffset({
                offset: error.averageItemLength * error.index,
                animated: false,
              });
              setTimeout(() => {}, 100);
            }}
            scrollEventThrottle={250}
            showsHorizontalScrollIndicator={false}
            data={TEMP_DATA}
            ref={flatListRef}
            horizontal
            inverted={!isRTL}
            renderItem={fetchListCategorie}
            decelerationRate={'normal'}
            keyExtractor={(item, index) => index?.toString()}
            removeClippedSubviews={Platform.OS === 'ios' ? false : true}
          />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};
export default MainPage;
