import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IFilm } from '../../types/schema';
import { Films } from '../../services/filmApi';

interface filmListInterface {
  films: IFilm[];
  film: IFilm | null;
  loading: boolean;
  errorState: boolean;
  error: string | undefined;
}

const initialState: filmListInterface = {
  films: [],
  film: null,
  loading: false,
  errorState: false,
  error: '',
};

export const fetchFilms = createAsyncThunk('fetchFilms', async () => {
  const res = await Films.getFilms();
  return res.data.results;
});

export const fetchFilm = createAsyncThunk('fetchFilm', async (id: number) => {
  const res = await Films.getFilm(id);
  return res.data;
});

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFilms.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      state.loading = false;
      state.films = action.payload;
    });
    builder.addCase(fetchFilms.rejected, (state, action) => {
      state.loading = false;
      state.errorState = true;
      state.error = action.error.message;
    });

    builder.addCase(fetchFilm.fulfilled, (state, action) => {
      state.film = action.payload;
    });
  },
});

export default filmsSlice.reducer;
