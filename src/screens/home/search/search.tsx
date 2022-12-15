import React, {useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {
  Image,
  ScrollView,
  View,
  FlatList,
  Platform,
  SafeAreaView,
} from 'react-native';
import {
  CategoriesCard,
  CustomText,
  ProductCard,
  UserCard,
  StoreCard,
  HeaderBack,
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
const SearchPage = ({navigation}) => {
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
  const [Stores, setStores] = React.useState<any>([
    {id: 0, title: 'Amazon', description: '2% cashback'},
    {id: 1, title: 'Silk Maison', description: '2% cashback'},
    {id: 2, title: 'Muji', description: '3% cashback'},
    {id: 3, title: 'Silk Maison', description: '6% cashback'},
    {id: 4, title: 'Muji', description: '1% cashback'},
    {id: 5, title: 'Muji', description: '4% cashback'},
    {id: 6, title: 'Amazon', description: '2% cashback'},
    {id: 7, title: 'Silk Maison', description: '2% cashback'},
    {id: 8, title: 'Muji', description: '3% cashback'},
    {id: 9, title: 'Silk Maison', description: '6% cashback'},
    {id: 10, title: 'Muji', description: '1% cashback'},
    {id: 11, title: 'Muji', description: '4% cashback'},
    {id: 12, title: 'Amazon', description: '2% cashback'},
    {id: 13, title: 'Silk Maison', description: '2% cashback'},
    {id: 14, title: 'Muji', description: '3% cashback'},
    {id: 15, title: 'Silk Maison', description: '6% cashback'},
    {id: 16, title: 'Muji', description: '1% cashback'},
    {id: 17, title: 'Muji', description: '4% cashback'},
  ]);
  const isRTL = i18next.language === 'ar';

  const renderItem = ({item}: any) => (
    <StoreCard fullname={item.title} description={item.description} />
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
      <HeaderBack title={t('Results (1200)')} noBack={false} />
      <ScrollView
        style={{
          height: '60%',
          width: '100%',
          backgroundColor: COLORS.white,
          padding: 10,
          alignSelf: 'center',
          alignContent: 'center',
        }}>
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
            keyExtractor={(item, index) => index?.toString()}
            removeClippedSubviews={Platform.OS === 'ios' ? false : true}
          />
        </View>
        <SafeAreaView>
          <FlatList
            data={Stores}
            renderItem={renderItem}
            keyExtractor={item => item?.id}
          />
        </SafeAreaView>
      </ScrollView>
    </SafeAreaProvider>
  );
};
export default SearchPage;
