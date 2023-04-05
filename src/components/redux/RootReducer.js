import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import contactsReducer from './contacts/ContactsSlice';
import filterReducer from './filter/FilterSlice';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: 'contacts',
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;
