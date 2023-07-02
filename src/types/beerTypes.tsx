export type Beer = {
	id: number;
	name: string;
	tagline: string;
	first_brewed: string;
	image_url: string;
	abv: number;
	ibu: number;
	target_fg: number;
	target_og: number;
	ebc: number;
	srm: number;
	ph: number;
	attenuation_level: number;
	volume: ValueAndUnit;
	boil_volume: ValueAndUnit;
	method: Method;
	ingredients: Ingredients,
	food_pairing: string[];
	brewers_tips: string;
	contributed_by: string;
};

type ValueAndUnit = {
	value: number;
	unit: string;
};

type Fermentation = {
	temp: ValueAndUnit;
};

type Method = {
	mash_temp: ValueAndUnit[];
	fermentation: Fermentation;
	twist: null | string;
};

type Malt = {
	name: string;
	amount: ValueAndUnit;
};

type Hops = {
	name: string;
	amount: ValueAndUnit;
	add: string;
	attribute: string;
};

type Ingredients = {
    malt: Malt[];
    hops: Hops[];
    yeast: string;
}