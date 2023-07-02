import { configureStore } from "@reduxjs/toolkit";
import beersReducer from "./slices/beersSlice";

export const store = configureStore({
	reducer: {
		beers: beersReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>