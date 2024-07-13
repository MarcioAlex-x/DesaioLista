import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './features/contacts/ContactsSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;
