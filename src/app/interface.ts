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
