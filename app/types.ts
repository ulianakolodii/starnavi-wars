export type Hero = {
  id: number;
  name: string;
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: number;
  films: number[];
  species: number[];
  starships: number[];
  vehicles: number[];
  url: string;
  detail?: string;
};

export type HeroesResponse = {
  count: number;
  next: string;
  results: Array<Hero>;
};
