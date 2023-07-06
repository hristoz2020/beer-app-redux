import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Beer } from "../../types/beerTypes";

interface favoriteBeersState {
	data: Beer[];
}

const initialState: favoriteBeersState = {
	data: [],
};

export const favoriteBeersSlice = createSlice({
	name: "favoriteBeers",
	initialState,
	reducers: {
		addFavoriteBeer: (state, action: PayloadAction<Beer[]>) => {
			state.data = state.data.concat(action.payload);
		},
		removeFavoriteBeer: (state, action: PayloadAction<Beer>) => {
			state.data = state.data.filter(
				(beer) => beer.id !== action.payload.id
			);
		},
	},
});

export const { addFavoriteBeer, removeFavoriteBeer } =
	favoriteBeersSlice.actions;
export default favoriteBeersSlice.reducer;
