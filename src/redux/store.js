import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./authorization/auth-slice";
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
    auth: persistReducer(authPersistConfig, authSliceReducer),
    // [usersApi.reducerPath]: usersApi.reducer,
    // [filterSlice.name]: filterSlice.reducer,
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
