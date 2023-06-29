const baseUrl = "https://api.punkapi.com/v2/beers";

export const paginationBeers = async (page: number, perPage: number) => {
    let response = await fetch(
        `https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`
    );

    return response.json();
};

export const getSingleBeer = async (id: number) => {
    let response = await fetch(`${baseUrl}${id}`);

    return response.json();
};

export const getRandomBeer = async () => {
    let response = await fetch(`${baseUrl}/random`);

    return response.json();
};
