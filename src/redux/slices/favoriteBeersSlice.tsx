import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Beer } from "../../types/beerTypes";

interface favoriteBeersState {
	favoriteBeers: Beer[];
}

const initialState: favoriteBeersState = {
	favoriteBeers: [],
};

export const favoriteBeersSlice = createSlice({
	name: "favoriteBeers",
	initialState,
	reducers: {
		addFavoriteBeer: (state, action: PayloadAction<Beer[]>) => {
			state.favoriteBeers = state.favoriteBeers.concat(action.payload);
		},
		removeFavoriteBeer: (state, action: PayloadAction<Beer>) => {
			state.favoriteBeers = state.favoriteBeers.filter(
				(beer) => beer.id !== action.payload.id
			);
		},
	},
});

export const { addFavoriteBeer, removeFavoriteBeer } =
	favoriteBeersSlice.actions;
export default favoriteBeersSlice.reducer;
