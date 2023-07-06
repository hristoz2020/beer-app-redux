import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Beer } from "../../types/beerTypes";

interface BeerState {
	randomBeer: Beer[];
}

const initialState: BeerState = {
	randomBeer: [],
};

export const randomBeerSlice = createSlice({
	name: "randomBeer",
	initialState,
	reducers: {
		setRandomBeer: (state, action: PayloadAction<Beer[]>) => {
			state.randomBeer = action.payload;
		},
	},
});

export const { setRandomBeer } = randomBeerSlice.actions;
export default randomBeerSlice.reducer;
