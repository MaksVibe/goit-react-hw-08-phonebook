import { createAction, nanoid } from "@reduxjs/toolkit";

const addContacts = createAction("contacts/items_add", (contacts) => ({
  payload: {
    ...contacts,
    id: nanoid(),
  },
}));

const deleteContacts = createAction("contacts/items_delete");
const changeFilter = createAction("contacts/filter_change");

export { addContacts, deleteContacts, changeFilter };
