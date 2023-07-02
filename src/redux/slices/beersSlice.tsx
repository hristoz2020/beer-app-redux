import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	beers: [],
};

export const beerSlice = createSlice({
	name: "beers",
	initialState,
	reducers: {
		setBeers: (state, action) => {
			state.beers = action.payload;
		},
	},
});

export const { setBeers } = beerSlice.actions;
export default beerSlice.reducer;
