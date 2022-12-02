import React, {useRef, useState, useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import styles from './style';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {
  LOADER_START_ACTION,
  LOADER_STOP_ACTION,
} from '../../../redux/actions';
import {BaseView, CustomText, HeaderBack} from '../../../components';
import {numberRegex} from '../../../config/constants';

const VerifictionCode = ({navigation}: any) => {
  const {t} = useTranslation();
  const [code, setCode] = useState('0000');
  const [error, setError] = useState(false);
  const [numberPhone, setNumberPhone] = useState('+216 27 313 347');
  const CELL_COUNT = 4;
  const [seconds, setSeconds] = useState(60);
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const timerRef = useRef(0);
  const reload = () => {
    setSeconds(60);
    setCode('1111');
  };
  useEffect(() => {
    if (seconds > 0) {
      //timerRef.current = setTimeout(() => {
      setTimeout(() => {
        setSeconds(prevState => prevState - 1);
      }, 1000);
    }
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [seconds]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (value.length == 4) {
      if (value?.trim() === code) {
        dispatch(LOADER_START_ACTION());
        let userINfo = {
          isLoggedIn: true,
          email: 'dali@gmail.com',
          phone: '+216 27 313 347 | Tunisia',
          fullName: 'Dali Ayadi',
        };
        // call API get profile data and Save in Async Storge
        dispatch(LOADER_STOP_ACTION());
        navigation.replace('mainPage');
        setError(false);
      } else {
        setError(true);
        setValue('');
      }
    }
  }, [value]);

  return (
    <BaseView>
      <HeaderBack title={t('Account creation')} noBack={false} />
      <View style={styles.container}>
        <View>
          <View style={styles.viewHeaderContent}>
            <CustomText type={'bold'} style={styles.Title}>
              {t('Verify your phone number')}
            </CustomText>
          </View>
          <CustomText style={styles.sousTitle}>
            {t('We sent you a verification code via SMS on your number ') +
              numberPhone}
          </CustomText>
          <View style={styles.Input}>
            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={value =>
                numberRegex.test(value) ? setValue(value) : null
              }
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFiledRoot}
              keyboardType={'number-pad'}
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}) => (
                <Text
                  key={index}
                  style={[
                    styles.cell,
                    isFocused && styles.focusCell,
                    error && styles.errorCell,
                  ]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            />
          </View>
          {seconds === 0 ? (
            <View>
              <Pressable onPress={reload} style={{alignSelf: 'center'}}>
                <CustomText type={'semiBold'} style={styles.defaultText}>
                  {t('Resend the Code')}
                </CustomText>
              </Pressable>
            </View>
          ) : (
            <View>
              <Pressable onPress={reload} style={{alignSelf: 'center'}}>
                <CustomText type={'semiBold'} style={styles.time}>
                  {t('Code have been sended ')}
                  {seconds.toString().length === 2
                    ? '00:' + seconds + '.'
                    : '00:0' + seconds + ' .'}
                </CustomText>
              </Pressable>
            </View>
          )}
        </View>
      </View>
    </BaseView>
  );
};
export default VerifictionCode;
