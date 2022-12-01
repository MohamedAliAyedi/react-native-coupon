import {combineReducers} from 'redux';
import {userReducer} from './user';
import {loaderReducer} from './loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage,
  // blacklist: ['qteInCart'],
};

const RootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  loader: loaderReducer,
});
export default RootReducer;
