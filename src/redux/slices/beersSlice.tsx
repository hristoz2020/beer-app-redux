import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Beer } from "../../types/beerTypes";

interface BeerState {
	beers: Beer[];
}

const initialState: BeerState = {
	beers: [],
};

export const beerSlice = createSlice({
	name: "beers",
	initialState,
	reducers: {
		setBeers: (state, action: PayloadAction<Beer[]>) => {
			state.beers = action.payload;
		},
	},
});

export const { setBeers } = beerSlice.actions;
export default beerSlice.reducer;
