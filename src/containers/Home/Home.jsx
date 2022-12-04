import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { bringMovies } from "../../services/apiCalls";
import { useSelector, useDispatch } from "react-redux";
import { filmData, addFilm } from "../Films/filmsSlice";


import "./Home.scss";
import SearchBar from "../../components/SearchBar/SearchBar";


const Home = () => {

  const filmsFromRdx = useSelector(filmData);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //Hooks
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    
    if (movies.length === 0) {
      bringMovies()
        .then((movies) => {
          setMovies(movies);
        })
        .catch((error) => console.error(error));
    }
  }, []);

  const clickedMovie = (movie) => {
    

    dispatch(addFilm({ ...movie, details: movie }));

    setTimeout(() => {
      navigate("/film");
    }, 750);
  };

  if (movies.length === 0) {
    return <div className="homeDesign">soy Home</div>;
  } else if(filmsFromRdx.details.length > 0){

  
    return (


      <div className="containerDesign">

        <SearchBar />
        <h1 className="titleDesign">Just one click away from your favorite movie!</h1>
        <div className="homeDesign">
          {filmsFromRdx.details.map((movie) => {
            return (
              <div
                onClick={() => clickedMovie(movie)}
                className="movieShow">
                <img
                  className="moviePic"
                  src={movie.image}
                />
                <p className="pOfHome">{movie.articleIdArticle}</p>
                
              </div>
            );
          })}
        </div>

      </div>



    )


  } else  {
    return (


      <div className="containerDesign">

        <SearchBar />
        <h1 className="titleDesign">Just one click away from your favorite movie!</h1>
        <div className="homeDesign">
          {movies.map((movie) => {
            return (
              <div
                onClick={() => clickedMovie(movie)}
                className="movieShow">
                <img
                  className="moviePic"
                  src={movie.image}
                />
                 <p className="pOfHome">{movie.articleIdArticle}</p>
              </div>
            );
          })}
        </div>

      </div>



    )
  } 
}
  ;
export default Home;
