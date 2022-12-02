import React, {useEffect} from 'react';
import './src/config/i18n';
import moment from 'moment';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import Navigator from './src/config/navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {useTranslation} from 'react-i18next';
import {I18nManager} from 'react-native';
import RNRestart from 'react-native-restart';
moment.locale('en');

const App = () => {
  const {i18n} = useTranslation();

  useEffect(() => {
      if (i18n.language === 'en' && I18nManager.isRTL) {
        i18n.changeLanguage('en');
        I18nManager.forceRTL(false);
        RNRestart.Restart();
      }
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <Navigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
