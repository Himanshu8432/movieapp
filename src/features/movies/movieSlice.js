import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../common/apis/MovieApi";
import { APIKey } from "../../common/apis/MovieApiKey";
export const fetchasyncMovies = createAsyncThunk('movies/fetchasyncMovies', async (term) => {

    const response = await MovieApi.get(
        `?apiKey=${APIKey}&s=${term}&type=movie`);
    return response.data;
    // .catch((err) => {
    //     console.log("Err:", err);
    // });
    // dispatch(addMovies(response.data))
})
export const fetchasyncShows = createAsyncThunk('movies/fetchasyncShows', async (term) => {
    // const seriesText = "Friends";
    const response = await MovieApi.get(
        `?apiKey=${APIKey}&s=${term}&type=series`);
    return response.data;
    // .catch((err) => {
    //     console.log("Err:", err);
    // });
    // dispatch(addMovies(response.data))
})
export const fetchasyncMoviesorShowDetails = createAsyncThunk('movies/fetchasyncMoviesorShowDetails', async (id) => {
    // const seriesText = "Friends";
    const response = await MovieApi.get(
        `?apiKey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
    // .catch((err) => {
    //     console.log("Err:", err);
    // });
    // dispatch(addMovies(response.data))
})
const initialState = {
    movies: {},
    shows: {},
    selectMovieorShow: {}
}
const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {

        removeSelectedMovieorShow: (state) => {
            state.selectMovieorShow = {}
        }
    },
    extraReducers: {
        [fetchasyncMovies.pending]: () => {
            console.log("pending")
        },
        [fetchasyncMovies.fulfilled]: (state, { payload }) => {
            console.log("fullfilled")
            return { ...state, movies: payload }
        },
        [fetchasyncMovies.rejected]: () => {
            console.log("rejected");

        },
        [fetchasyncShows.fulfilled]: (state, { payload }) => {
            console.log("fullfilled")
            return { ...state, shows: payload }
        },
        [fetchasyncMoviesorShowDetails.fulfilled]: (state, { payload }) => {
            console.log("FETCHED SUCCESSFULLY")
            return { ...state, selectMovieorShow: payload }
        },
    }
})
export const { removeSelectedMovieorShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getSelectedMovieorShow = (state) => state.movies.selectMovieorShow

export default movieSlice.reducer;