import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GET_RANDOM_BEER } from "../../services/config";
import { Beer } from "../../types/beerTypes";

interface BeerState {
	randomBeer: Beer[];
	isLoading: boolean;
}

const initialState: BeerState = {
	randomBeer: [],
	isLoading: false,
};

export const getRandomBeer = createAsyncThunk(
	"beers/pagination",
	async (thunkAPI) => {
		const response = await fetch(`${GET_RANDOM_BEER}`, {
			method: "GET",
		});
		const data = await response.json();
		return data;
	}
);

export const randomBeerSlice = createSlice({
	name: "randomBeer",
	initialState,
	reducers: {},

	extraReducers: (builder) => {
		builder
			.addCase(getRandomBeer.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getRandomBeer.fulfilled, (state, action) => {
				state.randomBeer = action.payload;
				state.isLoading = false;
			})
			.addCase(getRandomBeer.rejected, (state, action) => {
				state.isLoading = false;
			});
	},
});

export default randomBeerSlice.reducer;
