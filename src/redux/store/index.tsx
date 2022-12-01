import {applyMiddleware, compose, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import RootReducer from '../reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, RootReducer);
let store = createStore(persistedReducer, {}, compose(applyMiddleware(thunk)));
let nope_store = createStore(RootReducer);

let persistor = persistStore(store);
export {store, persistor, nope_store};
