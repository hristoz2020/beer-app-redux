import { configureStore } from "@reduxjs/toolkit";
import paginationBeersReducer from "./slices/paginationBeersSlice";
import beersReducer from "./slices/beersSlice";
import randomBeerReducer from "./slices/randomBeerSlice";
import favoriteBeersReducer from "./slices/favoriteBeersSlice";

export const store = configureStore({
	reducer: {
		beers: beersReducer,
		paginationBeers: paginationBeersReducer,
		randomBeer: randomBeerReducer,
		favoriteBeers: favoriteBeersReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
