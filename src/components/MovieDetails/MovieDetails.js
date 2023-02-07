import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchasyncMoviesorShowDetails, getSelectedMovieorShow, removeSelectedMovieorShow } from '../../features/movies/movieSlice';
import "./MovieDetails.scss"

function MovieDetails() {
    const { imdbID } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getSelectedMovieorShow)
    useEffect(() => {
        dispatch(fetchasyncMoviesorShowDetails(imdbID))
        return () => {
            dispatch(removeSelectedMovieorShow())
        }
    }, [dispatch, imdbID])
    return (
        <div className="movie-section">
            {Object.keys(data).length === 0 ? (<div>...Loading</div>) : (
                <>
                    <div className="section-left">
                        <div className="movie-title">{data.Title}</div>
                        <div className="movie-rating">
                            <span>IMDB rating <i className="fa fa-star"></i>:{data.imdbRating} </span>
                            <span>IMDB Votes <i className="fa fa-thumbs-up"></i>:{data.imdbVotes} </span>
                            <span>Runtime <i className="fa fa-film"></i>:{data.Runtime} </span>
                            <span>Year <i className="fa fa-calender"></i>:{data.Year} </span>
                        </div>
                        <div className="movie-plot">{data.Plot}</div>
                        <div className="movie-info">
                            <div>
                                <spna>Director</spna>
                                <span>{data.Director}</span>
                            </div>
                            <div>
                                <spna>Stars</spna>
                                <span>{data.Actors}</span>
                            </div>
                            <div>
                                <spna>Generes</spna>
                                <span>{data.Genre}</span>
                            </div>
                            <div>
                                <spna>Languages</spna>
                                <span>{data.Language}</span>
                            </div>
                            <div>
                                <spna>Awards</spna>
                                <span>{data.Awards}</span>
                            </div>
                        </div>
                        <div className="section-right">
                            <img src={data.Poster} alt={data.Title}></img>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default MovieDetails