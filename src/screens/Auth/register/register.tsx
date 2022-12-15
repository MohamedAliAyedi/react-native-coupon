import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './style';
import {useTranslation} from 'react-i18next';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {COLORS} from '../../../config/constants';
import {useDispatch} from 'react-redux';
import {LOADER_START_ACTION, LOADER_STOP_ACTION} from '../../../redux/actions';
import {CountryPicker} from 'react-native-country-codes-picker';
import {regexPhoneNumber} from '../../../config/utils';
import {CustomText, HeaderBack, MainButton} from '../../../components';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Register = ({navigation}: any) => {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('+216');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <>
      <SafeAreaProvider>
        <HeaderBack title={t('Account creation')} noBack={false} />
        <View style={styles.loginContainer}>
          <CustomText type={'bold'} style={styles.title}>
            {t('Enter your phone number')}
          </CustomText>
          <CustomText type={'regular'} style={styles.subText}>
            {t(
              'You will receive an OTP on this phone number to activate your account',
            )}
          </CustomText>
          <Text style={styles.text}></Text>
          <View
            style={{display: 'flex', flexDirection: 'row', marginBottom: 20}}>
            <TouchableOpacity
              onPress={() => setShow(true)}
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '30%',
                height: 50,
                backgroundColor: COLORS.white,
                borderWidth: 2,
                borderRadius: 10,
                borderColor: COLORS.primary,
                padding: 10,
              }}>
              <Text
                style={{
                  color: COLORS.black,
                  fontSize: 20,
                }}>
                {countryCode}
              </Text>
              <FontAwesome5
                name={'angle-down'}
                style={{fontSize: 21, margin: 5}}
                color={COLORS.grey}
              />
            </TouchableOpacity>
            <View
              style={[
                styles.flexRtl,
                styles.ViewInput(
                  regexPhoneNumber(phoneNumber),
                  phoneNumber.length > 0,
                ),
              ]}>
              <View style={styles.viewTextInput}>
                <TextInput
                  multiline={true}
                  numberOfLines={1}
                  placeholder={t('Phone number')}
                  onChangeText={text => {
                    setPhoneNumber(text);
                  }}
                  value={phoneNumber}
                  maxLength={12}
                  keyboardType={'numeric'}
                  style={styles.Input}
                />
              </View>
            </View>
          </View>
          <MainButton
            text={'Send SMS'}
            type={'primary'}
            onPress={() => {
              dispatch(LOADER_START_ACTION());
              navigation.navigate('verifCode');
              dispatch(LOADER_STOP_ACTION());
              return true;
            }}
          />
        </View>
        <CountryPicker
          show={show}
          pickerButtonOnPress={item => {
            setCountryCode(item.dial_code);
            setShow(false);
          }}
          enableModalAvoiding={true}
          inputPlaceholder={'Search a country'}
          searchMessage={'No country with this name found'}
          style={{
            modal: {
              height: 500,
              backgroundColor: 'white',
            },
            textInput: {
              height: 40,
              borderRadius: 20,
            },
            countryButtonStyles: {
              height: 60,
              backgroundColor: 'white',
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
              borderBottomWidth: 1,
              borderColor: COLORS.lightGrey,
            },
            flag: {
              display: 'none',
            },
            dialCode: {
              justifyContent: 'center',
              paddingLeft: 90,
            },
            countryName: {
              color: COLORS.black,
              fontSize: 16,
            },
          }}
        />
      </SafeAreaProvider>
    </>
  );
};
export default Register;
