import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";

import "./Home.scss";
import { useDispatch } from "react-redux";
import { fetchasyncMovies, fetchasyncShows } from "../../features/movies/movieSlice";
function Home() {
    // const movieText = "Harry";
    const dispatch = useDispatch();
    const movie = "Harry";
    const show = "Friend"
    useEffect(() => {
        // const fetchMovies = async () => {

        // };
        dispatch(fetchasyncMovies(movie))
        dispatch(fetchasyncShows(show))

        // fetchMovies();
    }, [dispatch]);
    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing />
        </div>
    );
}

export default Home;
