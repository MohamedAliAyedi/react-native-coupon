import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainPage, SignIn, Register, VerifictionCode} from '../../../screens';
import {useSelector} from 'react-redux';
import {Loader} from '../../../components';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  const loading = useSelector(state => state?.loader.loading);

  return (
    <NavigationContainer
      onReady={async () => {
        await SplashScreen.hide();
      }}>
      <Loader isVisible={loading} />
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
          stackAnimation: 'slide_from_right',
        })}
        initialRouteName={'signIn'}>
        <Stack.Screen name={'mainPage'} component={MainPage} />
        <Stack.Screen name={'signIn'} component={SignIn} />
        <Stack.Screen name={'register'} component={Register} />
        <Stack.Screen name={'verifCode'} component={VerifictionCode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
