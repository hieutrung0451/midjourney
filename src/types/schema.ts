export interface ICard {
  id: number;
  title: string;
  channel_name: string;
  image: string;
  channel_avatar: string;
  dateNow: string;
  createAt: string;
  view: string;
  videoTime: string;
}

export interface IFilm {
  episode_id: number;
  title: string;
  opening_crawl: string;
  director: string;
  characters: [CharacterType];
  planets: [PlanetType];
  starships: [StarshipType];
  vehicles: [VehicleType];
  species: [SpecieType];
  created: string;
  edited: string;
  url: string;
}

export interface CharacterType {
  character: string;
}

export interface PlanetType {
  planet: string;
}

export interface StarshipType {
  starship: string;
}

export interface VehicleType {
  vehicle: string;
}

export interface SpecieType {
  specie: string;
}
