import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import paginationBeersReducer from "./slices/paginationBeersSlice";
import beersReducer from "./slices/beersSlice";
import randomBeerReducer from "./slices/randomBeerSlice";
import favoriteBeersReducer from "./slices/favoriteBeersSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  beers: beersReducer,
  paginationBeers: paginationBeersReducer,
  randomBeer: randomBeerReducer,
  favoriteBeers: favoriteBeersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;