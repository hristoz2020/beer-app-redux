export const BASE_URL = "https://api.punkapi.com/v2";
export const BEERS = "/beers"
const RANDOM = "/random";
export const PAGE = "?page=";
export const PER_PAGE = "&per_page=";
export const BEER_NAME = "?beer_name=";

export const GET_BEERS = BASE_URL + BEERS;
export const GET_RANDOM_BEER = BASE_URL + BEERS + RANDOM;
export const GET_BEER_BY_ID = BASE_URL + BEERS + "/";
export const GET_BEERS_PAGINATION = BASE_URL + BEERS + PAGE;
