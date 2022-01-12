import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authorization/auth-slice";
import { usersApi, filterSlice } from "./todos/todoSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const middleware = () => {};

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    // [usersApi.reducerPath]: usersApi.reducer,
    [authSlice.name]: persistReducer(authPersistConfig, authSlice.reducer),
    [filterSlice.name]: filterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
  // middleware: getDefaultMiddleware => [
  //   ...getDefaultMiddleware(),
  //   usersApi.middleware,
  // ],
});

export const persistor = persistStore(store);
