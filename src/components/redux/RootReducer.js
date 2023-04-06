import { combineReducers } from '@reduxjs/toolkit';

import contactsReducer from './contacts/ContactsSlice';
import filterReducer from './filter/FilterSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
