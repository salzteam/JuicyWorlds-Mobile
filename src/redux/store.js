import AsyncStorage from '@react-native-async-storage/async-storage';

import { configureStore } from "@reduxjs/toolkit";
// import regSlice from "./reducers/regSlice"
import { persistStore, persistReducer } from "redux-persist";
import reducers from "./reducers";
import logger from "redux-logger";

const persistConfig = {
  key: "JuicyWorld",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true, serializableCheck: false }).concat(logger),
});

export const persistedStore = persistStore(store);
export default store;