import api from './api';

export const Films = {
  getFilms: () => api.get('films'),
  getFilm: (id: number) => api.get(`films/${id}`),
};
