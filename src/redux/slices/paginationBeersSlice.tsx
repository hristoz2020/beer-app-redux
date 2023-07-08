import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
	BASE_URL,
	BEERS,
	BEER_NAME,
	GET_BEERS_PAGINATION,
	PER_PAGE,
} from "../../services/config";
import { Beer } from "../../types/beerTypes";

interface paginationBeerState {
	paginationBeers: Beer[];
	isLoading: boolean;
}

const initialState: paginationBeerState = {
	paginationBeers: [],
	isLoading: false,
};

export const paginationBeers = createAsyncThunk(
	"beers/pagination",
	async (
		{
			pageNumber,
			beersPerPage,
		}: { pageNumber: number; beersPerPage: number },
		thunkAPI
	) => {
		const response = await fetch(
			`${GET_BEERS_PAGINATION}${pageNumber}${PER_PAGE}${beersPerPage}`,
			{
				method: "GET",
			}
		);
		const data = await response.json();
		return data;
	}
);

export const searchBeers = createAsyncThunk(
	"beers/search",
	async (beerName: string, thunkAPI) => {
		const response = await fetch(
			`${BASE_URL}${BEERS}${BEER_NAME}${beerName}`,
			{
				method: "GET",
			}
		);
		const data = await response.json();
		return data;
	}
);

export const paginationBeerSlice = createSlice({
	name: "paginationBeers",
	initialState,
	reducers: {},

	extraReducers: (builder) => {
		builder
			.addCase(paginationBeers.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(paginationBeers.fulfilled, (state, action) => {
				state.paginationBeers = action.payload;
			})
			.addCase(paginationBeers.rejected, (state, action) => {
				state.isLoading = false;
			});

		builder
			.addCase(searchBeers.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(searchBeers.fulfilled, (state, action) => {
				state.paginationBeers = action.payload;
			})
			.addCase(searchBeers.rejected, (state, action) => {
				state.isLoading = false;
			});
	},
});

export default paginationBeerSlice.reducer;
