import React, {useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {
  ScrollView,
  View,
  FlatList,
  Platform,
  SafeAreaView,
} from 'react-native';
import {
  CategoriesCard,
  CustomText,
  StoreCard,
  HeaderBack,
} from '../../../components';
import styles from './style';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import i18next from 'i18next';
import { GetCategoriesHK } from '../../../services';

// @ts-ignore
const SearchPage = ({navigation}) => {
  const {t} = useTranslation();
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
        style={styles().scrollingContaier}>
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
            data={data?.data.entries}
            renderItem={renderItem}
            keyExtractor={item => item?.id}
          />
        </SafeAreaView>
      </ScrollView>
    </SafeAreaProvider>
  );
};
export default SearchPage;
