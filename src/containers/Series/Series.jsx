import React, { useState, useEffect } from 'react';
import "./Series.scss";
import { useSelector } from "react-redux";
import { serieData } from "./seriesSlice";
import { userData } from "../User/userSlice";
import { useNavigate } from 'react-router-dom';

const Serie = () => {

    const selectedSerie = useSelector(serieData);
    const credentials = useSelector(userData);
    const navigate = useNavigate();//Necesario para navegar

    const watchMe = () => {
        console.log("ALQUILADO!!");
        navigate("/")//De momento solo va a home.
    }


    const returnHome = () => {
        console.log(selectedSerie);
        navigate("/");
    }

    if (selectedSerie?.id !== undefined) {

        return (
            <div className="serieDesign">
                {selectedSerie?.title}
                <img className="seriePic" src={"https://image.tmdb.org/t/p/w200/" + selectedSerie?.poster_path} />

                {credentials?.credentials?.token !== undefined &&

                    <div onClick={() => watchMe()} className='buttonDesign'>
                        Watch me!
                    </div>

                }

            </div>
        )

    } else {
        return (
            <div className="serieDesign">
                <div>Ha Habido un error</div>
                <div onClick={() => returnHome()} className='buttonDesign'>
                    Volver a Home
                </div>

            </div>


        )
    }


}
export default Serie;