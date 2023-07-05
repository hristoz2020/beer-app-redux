import { configureStore } from "@reduxjs/toolkit";
import paginationBeersReducer from "./slices/paginationBeersSlice";
import beersReducer from "./slices/beersSlice";

export const store = configureStore({
	reducer: {
		beers: beersReducer,
		paginationBeers: paginationBeersReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
