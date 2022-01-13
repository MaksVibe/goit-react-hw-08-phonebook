import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { addContacts, deleteContacts, changeFilter } from "./contacts-actions";

const itemsReducer = createReducer([], (builder) => {
  builder
    .addCase(addContacts, (state, action) => [...state, action.payload])
    .addCase(deleteContacts, (state, action) =>
      state.filter((contact) => contact.id !== action.payload)
    );
});

const filterReducer = createReducer("", (builder) => {
  builder.addCase(changeFilter, (state, action) => action.payload);
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
export default contactsReducer;
