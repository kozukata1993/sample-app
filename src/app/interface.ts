export interface Pokemon {
  id?: string;
  name: string;
  name_ja?: string;
  detailUrl: string;
}

export interface Response {
  count: number;
  next: string;
  previous: null;
  results: {
    name: string;
    url: string;
  }[];
}

export interface PokemonDetail {
  id: string;
  name: string;
  weight: number;
  status: {
    name: string;
    base_stat: number;
  }[];
  types: string[];
}
