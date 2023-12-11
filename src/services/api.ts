import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: 'https://swapi.dev/api/',
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
};

export const Films = {
  getFilms: () => requests.get('films'),
  getFilm: (id: number) => requests.get(`films/${id}`),
};


