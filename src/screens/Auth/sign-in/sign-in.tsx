import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import {useTranslation} from 'react-i18next';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {COLORS} from '../../../config/constants';
import IconCancel from 'react-native-vector-icons/MaterialIcons';
import {regexPhoneNumber} from '../../../config/utils';
import {
  fontValue,
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../../config/global-styles';
import {CustomText, MainButton} from '../../../components';

const SignIn = ({navigation}: any) => {
  const {t} = useTranslation();
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  return (
    <>
      <SafeAreaProvider>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: COLORS.white,
            height: heightPercentageToDP(100),
            width: widthPercentageToDP(100),
          }}>
          <View style={styles.container}>
            <View>
              <View style={styles.viewHeader}>
                <Pressable
                  onPress={() => {
                    navigation.navigate('tabsContainer');
                  }}></Pressable>
                <CustomText
                  type={'regular'}
                  numberOfLines={1}
                  style={styles.Title}>
                  {t('Log in')}
                </CustomText>
              </View>
              <TouchableOpacity
                activeOpacity={1}
                style={{height: heightPercentageToDP(4) || 10, width: '100%'}}
              />

              <View style={styles.flexRtl}>
                <CustomText type="bold" style={{color: COLORS.grey}}>
                  {t('Email address')}
                </CustomText>
              </View>
              <View
                style={[
                  styles.flexRtl,
                  styles.ViewInput(
                    regexPhoneNumber(login?.email),
                    login?.email.length > 0,
                  ),
                ]}>
                <View style={styles.viewTextInput}>
                  <TextInput
                    multiline={true}
                    numberOfLines={1}
                    placeholder={t('Email')}
                    onChangeText={text => {
                      setLogin({...login, email: text});
                    }}
                    value={login?.email}
                    maxLength={12}
                    keyboardType={'email-address'}
                    style={styles.Input}
                  />
                </View>
                <View style={styles.ViewCancel}>
                  {login?.email?.length > 0 ? (
                    <Pressable onPress={() => {}}>
                      <IconCancel
                        name="cancel"
                        size={fontValue(26)}
                        color={COLORS.greyCell}
                      />
                    </Pressable>
                  ) : null}
                </View>
              </View>
              <TouchableOpacity
                activeOpacity={1}
                style={{height: heightPercentageToDP(2) || 10}}
              />
              <View style={styles.flexRtl}>
                <CustomText type="bold" style={{color: COLORS.grey}}>
                  {t('Password')}
                </CustomText>
              </View>
              <View
                style={[
                  styles.flexRtl,
                  styles.ViewInput(
                    regexPhoneNumber(login?.password),
                    login?.password.length > 0,
                  ),
                ]}>
                <View style={styles.viewTextInput}>
                  <TextInput
                    placeholder={t('Password')}
                    onChangeText={text => {
                      setLogin({...login, password: text});
                    }}
                    value={login?.password}
                    maxLength={12}
                    secureTextEntry={true}
                    style={styles.Input}
                  />
                </View>
                <View style={styles.ViewCancel}>
                  {login?.password.length > 0 ? (
                    <Pressable onPress={() => {}} >
                      <IconCancel
                        name="cancel"
                        size={fontValue(26)}
                        color={COLORS.greyCell}
                      />
                    </Pressable>
                  ) : null}
                </View>
              </View>
            </View>
            <View style={styles.ViewEnd}>
              <View style={styles.button}>
                <MainButton
                  type={'primary'}
                  text={t('Log in')}
                  onPress={() => {
                    return navigation.navigate('register');
                  }}
                />
              </View>
              <View style={styles.bottomView}>
                <Pressable
                  onPress={() => navigation.navigate('sign-up-visitor')}
                  style={{alignSelf: 'center', marginBottom: 10}}>
                  <CustomText type="regular" style={{color: `${COLORS.primary}`}}>
                    {t('I forget my password')}
                  </CustomText>
                </Pressable>
              </View>
            </View>
            <View style={styles.flexRtl}>
              <View style={styles.hairline} />
              <Text style={styles.loginButtonBelowText1}>{t('Or')}</Text>
              <View style={styles.hairline} />
            </View>
            <View>
              <TouchableOpacity
                activeOpacity={1}
                style={{height: heightPercentageToDP(2) || 10, width: '100%'}}
              />
              <MainButton
                type={'facebook'}
                text={t('Login with Facebook')}
                onPress={() => {return navigation.navigate('register');}}
              />
              <TouchableOpacity
                activeOpacity={1}
                style={{height: heightPercentageToDP(2) || 10, width: '100%'}}
              />
              <MainButton
                type={'google'}
                text={t('Login with Google')}
                onPress={() => {return navigation.navigate('register');}}
              />
              <TouchableOpacity
                activeOpacity={1}
                style={{height: heightPercentageToDP(2) || 10, width: '100%'}}
              />
              <MainButton
                type={'apple'}
                text={t('Login with Apple')}
                onPress={() => { return navigation.navigate('register');}}
              />
            </View>
          </View>
        </View>
      </SafeAreaProvider>
    </>
  );
};
export default SignIn;
