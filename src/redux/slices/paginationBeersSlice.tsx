import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Beer } from "../../types/beerTypes";

interface paginationBeerState {
	paginationBeers: Beer[];
}

const initialState: paginationBeerState = {
	paginationBeers: [],
};

export const paginationBeerSlice = createSlice({
	name: "paginationBeers",
	initialState,
	reducers: {
		setPaginationBeers: (state, action: PayloadAction<Beer[]>) => {
			state.paginationBeers = action.payload;
		},
	},
});

export const { setPaginationBeers } = paginationBeerSlice.actions;
export default paginationBeerSlice.reducer;
