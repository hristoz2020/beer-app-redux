const baseUrl: string = "https://api.punkapi.com/v2";

export const paginationBeers = async (page: number, perPage: number) => {
	let response = await fetch(
		`${baseUrl}/beers?page=${page}&per_page=${perPage}`
	);

	return response.json();
};

export const getSingleBeer = async (id: string | undefined) => {
	let response = await fetch(`${baseUrl}/beers/${id}`);

	return response.json();
};

export const getRandomBeer = async () => {
	let response = await fetch(`${baseUrl}/beers/random`);

	return response.json();
};

export const getBeerByName = async (name: string) => {
	let response = await fetch(`${baseUrl}/beers?beer_name=${name}`);

	return response.json();
};


export const getBeers = async () => {
	let response = await fetch(`${baseUrl}/beers`);

	return response.json();
};
