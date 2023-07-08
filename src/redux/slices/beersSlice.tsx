import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GET_BEERS } from "../../services/config";
import { Beer } from "../../types/beerTypes";

interface BeerState {
	beers: Beer[];
	isLoading: boolean;
}

const initialState: BeerState = {
	beers: [],
	isLoading: false,
};

export const getBeers = createAsyncThunk("beers/get", async (thunkAPI) => {
	const response = await fetch(GET_BEERS, {
		method: "GET",
	});
	const data = await response.json();
	return data;
});

export const beersSlice = createSlice({
	name: "beers",
	initialState,
	reducers: {},

	extraReducers: (builder) => {
		builder
			.addCase(getBeers.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getBeers.fulfilled, (state, action) => {
				state.beers = action.payload;
			})
			.addCase(getBeers.rejected, (state, action) => {
				state.isLoading = false;
			});
	},
});

export default beersSlice.reducer;
