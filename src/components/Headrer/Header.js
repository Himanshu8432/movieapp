import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchasyncMovies, fetchasyncShows } from '../../features/movies/movieSlice'
import user from "../../images/user.png"
import './Header.scss'

function Header() {
    const [Term, setTerm] = useState("")
    const dispatch = useDispatch()
    const SubmitHandler = (e) => {
        e.preventDefault();
        if (Term === "") return (
            alert("enter some text"))


        dispatch(fetchasyncMovies(Term))
        dispatch(fetchasyncShows(Term))
        console.log(Term)
        setTerm(" ")
    }
    return (
        <div className='header'>

            <div className='logo'>
                <Link to="/">Movie APP
                </Link>
            </div>
            <div className="search-bar">
                <form onSubmit={SubmitHandler}>
                    <input type="text" value={Term} placeholder="search movies or shows"
                        onChange={(e) => { setTerm(e.target.value) }}  ></input>
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </div>

            <div className='user-Image'>
                <img src={user} alt="user" />

            </div></div>
    )
}

export default Header