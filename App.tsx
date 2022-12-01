import React from 'react';
import moment from 'moment';
import {Provider} from 'react-redux';
import {
  View,
  Text,
} from 'react-native';

moment.locale('en');

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <View>
            <Text>Hi there</Text>
          </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
