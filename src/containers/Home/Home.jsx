import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { bringMovies } from "../../services/apiCalls";
import { useSelector, useDispatch } from "react-redux";
import { userData } from "../User/userSlice";
import { filmData, addFilm } from "../Films/filmsSlice";

import "./Home.scss";
import Menu from "../../components/Menu/Menu";
import ShowMovies from "../../components/ShowMovies/ShowMovies";
import ShowSeries from "../../components/ShowSeries/ShowSeries";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  return (
    // <ShowMovies />
    <ShowSeries />
    
  );
}
  ;
export default Home;
