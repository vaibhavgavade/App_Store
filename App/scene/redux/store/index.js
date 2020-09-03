import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import {createStore, applyMiddleware} from 'redux';
import {combine} from '../store/combine';
import {persistReducer, persistStore} from 'redux-persist';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['reducer'],
};
const PersistReducer = persistReducer(persistConfig, combine);
const store = createStore(PersistReducer, applyMiddleware(thunk));
const persistor = persistStore(store);
export {store, persistor};
