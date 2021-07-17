import { configureStore } from "@reduxjs/toolkit";
import { contactsReducers } from "./contacts/";

const store = configureStore({
  reducer: {
    contacts: contactsReducers,
  },
});

export default store;
