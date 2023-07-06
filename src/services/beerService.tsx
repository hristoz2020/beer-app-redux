import {
	BASE_URL,
	BEERS,
	BEER_NAME,
	GET_BEERS,
	GET_BEER_BY_ID,
	GET_RANDOM_BEER,
	GET_BEERS_PAGINATION,
	PER_PAGE,
} from "./config";

export const paginationBeers = async (page: number, perPage: number) => {
	let response = await fetch(
		GET_BEERS_PAGINATION + page + PER_PAGE + perPage
	);

	return response.json();
};

export const getSingleBeer = async (id: string | undefined) => {
	let response = await fetch(GET_BEER_BY_ID + id);

	return response.json();
};

export const getRandomBeer = async () => {
	let response = await fetch(GET_RANDOM_BEER);

	return response.json();
};

export const getBeerByName = async (name: string) => {
	let response = await fetch(BASE_URL + BEERS + BEER_NAME + name);

	return response.json();
};

export const getBeers = async () => {
	let response = await fetch(GET_BEERS);

	return response.json();
};
