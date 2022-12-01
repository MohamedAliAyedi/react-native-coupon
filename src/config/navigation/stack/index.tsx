import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  MainPage,
  SignIn,
  Register,
  VerifictionCode
} from '../../../screens';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
          stackAnimation: 'slide_from_right',
        })}
        initialRouteName={'signIn'}
      >
        <Stack.Screen name={'mainPage'}  component={MainPage} />
        <Stack.Screen name={'signIn'} component={SignIn} />
        <Stack.Screen name={'register'} component={Register} />
        <Stack.Screen name={'verifCode'} component={VerifictionCode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
