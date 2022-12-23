import React, {useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {GetCategoriesHK} from '../../../services/categories';
import {GetBannerHK} from '../../../services/ads';
import {images} from '../../../config/constants';
import {
  Image,
  ScrollView,
  View,
  FlatList,
  Platform,
  SafeAreaView,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {
  CategoriesCard,
  CustomText,
  ProductCard,
  UserCard,
  StoreCard,
} from '../../../components';
import styles from './style';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
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
  const {data, isLoading, isError} = GetCategoriesHK();
  const {dataBanner, isLoadingBanner, isErrorBanner} = GetBannerHK();
  const isRTL = i18next.language === 'ar';
  const renderItem = ({item}: any) => (
    <StoreCard
      fullname={item.Category}
      description={item.API}
      onPress={() => {
        navigation.replace('searchPage');
      }}
    />
  );

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
        image={images.profile}
      />
      <ScrollView style={styles().scrollingContaier}>
        <Image
          style={styles().imageSlider}
          source={{
            uri: isLoadingBanner ? images.bgColor : dataBanner?.message,
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
        <View style={{transform: [{scaleX: -1}], marginBottom: 30}}>
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
            keyExtractor={(item, index) => `${index}`}
            removeClippedSubviews={Platform.OS === 'ios' ? false : true}
          />
        </View>
        <SafeAreaView>
          <FlatList
            data={data?.slice(0,5)}
            renderItem={renderItem}
            initialNumToRender={3}
            keyExtractor={(item, index) => `c_${index}`}
          />
        </SafeAreaView>
        <Pressable
          style={styles().buttonLoading}
          onPress={() => {
            navigation.replace('searchPage');
          }}>
          <CustomText style={styles().textLoadingButton}>{t(`Load More`)}</CustomText>
        </Pressable>
      </ScrollView>
    </SafeAreaProvider>
  );
};
export default MainPage;
