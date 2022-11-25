import React, { useState, useEffect } from 'react';
import { bringMovies } from "../../services/apiCalls";
import { useSelector, useDispatch } from "react-redux";
import './ShowMovies.scss'
import { useNavigate } from 'react-router-dom';
import Menu from "../../components/Menu/Menu";
import { filmData, addFilm } from "../../containers/Films/filmsSlice";

const ShowMovies = () => {


    const navigate = useNavigate();
    const dispatch = useDispatch();

    //Hooks
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (movies.length === 0) {
            bringMovies()
                .then((movies) => {
                    setMovies(movies);
                })
                .catch((error) => console.log(error));
        }
    }, []);

    const clickedMovie = (movie) => {
        //Guardo la película seleccionada en redux.

        dispatch(addFilm({ ...movie, details: movie }));

        setTimeout(() => {
            navigate("/film");
        }, 750);
    };

    if (movies.length === 0) {
        return <div className="homeDesign">soy Home</div>;
    } else {



        return (
            <div className='ShowMoviesDesign'>

                <div className="containerDesign">
                    <div className="homeDesign">
                        {movies.map((movie) => {
                            return (
                                <div
                                    onClick={() => clickedMovie(movie)}
                                    key={movie.id}
                                    className="movieShow">
                                    <img
                                        className="moviePic"
                                        src={"https://image.tmdb.org/t/p/w200/" + movie.poster_path}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <Menu />
                </div>


            </div>
        )

    }
}
export default ShowMovies;