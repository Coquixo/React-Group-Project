import React, { useState, useEffect } from 'react';
import "./Films.scss";
import { useSelector } from "react-redux";
import { filmData } from "./filmsSlice";
import { userData } from "../User/userSlice";
import { useNavigate } from 'react-router-dom';

const Film = () => {

    const selectedFilm = useSelector(filmData);
    const credentials = useSelector(userData);
    const navigate = useNavigate();//Necesario para navegar

    const watchMe = () => {
        console.log("ALQUILADO!!");
        navigate("/")//De momento solo va a home.
    }


    const returnHome = () => {
        navigate("/");
    }

    if (selectedFilm?.id !== undefined) {

        return (
            <div className="filmDesign">
                {selectedFilm?.title}
                <img className="filmPic" src={"https://image.tmdb.org/t/p/w200/" + selectedFilm?.poster_path} />

                {credentials?.credentials?.token !== undefined &&

                    <div onClick={() => watchMe()} className='buttonDesign'>
                        Watch me!
                    </div>

                }

            </div>
        )

    } else {
        return (
            <div className="filmDesign">
                <div>Ha Habido un error</div>
                <div onClick={() => returnHome()} className='buttonDesign'>
                    Volver a Home
                </div>

            </div>


        )
    }


}
export default Film;