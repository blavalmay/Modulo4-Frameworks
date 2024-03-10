export interface characterResultsApi {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {};
  location: {};
  image: string;
  episode: string;
  url: string;
  created: string;
}

export interface characterApi {
  info: {};
  results: characterResultsApi[];
}