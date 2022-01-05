import { configureStore } from "@reduxjs/toolkit";

import { usersApi, filterSlice } from "./todos/todoSlice";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    usersApi.middleware,
  ],
});
