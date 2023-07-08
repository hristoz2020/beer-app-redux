import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GET_BEER_BY_ID } from "../../services/config";
import { Beer } from "../../types/beerTypes";

interface singleBeerState {
	beer: Beer[];
	isLoading: boolean;
}

const initialState: singleBeerState = {
	beer: [],
	isLoading: false,
};

export const getSingleBeer = createAsyncThunk(
	"beers/getSingleBeer",
	async (id: string | undefined, thunkAPI) => {
		const response = await fetch(`${GET_BEER_BY_ID}${id}`, {
			method: "GET",
		});
		const data = await response.json();
		return data;
	}
);

export const singleBeerSlice = createSlice({
	name: "singleBeer",
	initialState,
	reducers: {
		resetSingleBeer: (state, action) => {
			state.isLoading = false;
			state.beer = action.payload;
		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(getSingleBeer.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getSingleBeer.fulfilled, (state, action) => {
				state.beer = action.payload;
				state.isLoading = false
			})
			.addCase(getSingleBeer.rejected, (state, action) => {
				state.isLoading = false;
			});
	},
});

export const { resetSingleBeer } = singleBeerSlice.actions;
export default singleBeerSlice.reducer;
