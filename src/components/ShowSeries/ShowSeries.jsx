import React, { useState, useEffect } from 'react';
import { bringSeries } from "../../services/apiCalls";
import { useSelector, useDispatch } from "react-redux";
import './ShowSeries.scss'
import { useNavigate } from 'react-router-dom';
import Menu from "../../components/Menu/Menu";
import { serieData, addSerie } from "../../containers/Series/seriesSlice";

const ShowSeries = () => {


    const navigate = useNavigate();
    const dispatch = useDispatch();

    //Hooks
    const [series, setSeries] = useState([]);

    useEffect(() => {
        if (series.length === 0) {
            bringSeries()
                .then((series) => {
                    setSeries(series);
                })
                .catch((error) => console.log(error));
        }
    }, []);

    const clickedSerie = (serie) => {
        //Guardo la serie seleccionada en redux.
        console.log(serie)

        dispatch(addSerie({ ...serie, details: serie }));

        setTimeout(() => {
            navigate("/serie");
        }, 750);
    };

    if (series.length === 0) {
        return <div className="homeDesign">soy Home</div>;
    } else {



        return (
            <div className='ShowSeriesDesign'>

                <div className="containerDesign">
                    <div className="homeDesign">
                        {series.map((serie) => {
                            return (
                                <div
                                    onClick={() => clickedSerie(serie)}
                                    key={serie.id}
                                    className="movieShow">
                                    <img
                                        className="moviePic"
                                        src={"https://image.tmdb.org/t/p/w200/" + serie.poster_path}
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
export default ShowSeries;