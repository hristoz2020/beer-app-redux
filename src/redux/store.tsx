import { combineReducers, configureStore } from "@reduxjs/toolkit";
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
import paginationBeersReducer from "./slices/paginationBeersSlice";
import beersReducer from "./slices/beersSlice";
import randomBeerReducer from "./slices/randomBeerSlice";
import favoriteBeersReducer from "./slices/favoriteBeersSlice";
import singleBeerReducer from "./slices/singleBeerSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const persistConfig = {
	key: "root",
	storage,
};

const rootReducer = combineReducers({
	beers: beersReducer,
	paginationBeers: paginationBeersReducer,
	randomBeer: randomBeerReducer,
	favoriteBeers: favoriteBeersReducer,
	singleBeer: singleBeerReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
