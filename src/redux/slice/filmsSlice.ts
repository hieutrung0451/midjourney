import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IFilm } from './../../types/schema';
import { Films } from '../../services/filmApi';

interface filmListInterface {
  films: IFilm[];
  film: {};
}

const initialState: filmListInterface = {
  films: [],
  film: {},
};

// Actions
export const fetchFilms = createAsyncThunk('fetchFilms', async () => {
  const res = await Films.getFilms();
  return res.data.results;
});

export const fetchFilm = createAsyncThunk('fetchFilm', async (id: number) => {
  const res = await Films.getFilm(id);

  return res.data;
});

// Reducers
const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      state.films = action.payload;
    });
    builder.addCase(fetchFilm.fulfilled, (state, action) => {
      state.film = action.payload;
    });
  },
});

export default filmsSlice.reducer;
