import React, { useState, useEffect } from 'react';
import "./Films.scss";
import { useSelector, useDispatch } from "react-redux";
import { filmData } from "./filmsSlice";
import { addOrder, orderData } from "../User/UserOrder/orderSlice";
import { userData } from "../User/userSlice";
import { useNavigate } from 'react-router-dom';
import { rentMovie } from '../../services/apiCalls';
import axios from "axios";

const Film = () => {

    const dispatch = useDispatch();
    const selectedFilm = useSelector(filmData);
    const credentials = useSelector(userData);
    const navigate = useNavigate();//Necesario para navegar
    const ordersFromRdx = useSelector(orderData);

    //VARIABLE NUEVA
    const title = selectedFilm?.title;
    const email = credentials?.credentials?.email;
    const idUser = credentials?.credentials?.id_user;
    const jwt = credentials?.credentials?.jwt;
    const body = { email, title };
    const dataBase = "http://localhost:3001";

    const watchMe = async(body,jwt) => {

        
        console.log("AQUI ESTA EL ORDER")
        console.log("AQUI ESTA EL ID DE USER!!", idUser);
        console.log("AQUI ESTA EL TITLE DE SELECTED FILM", title)
        console.log("AQUI ESTA EL JWT", jwt)
        console.log("AQUI ESTA EL BODY", body)
        let res = await axios.post(dataBase + "/orders/newOrderMovie", body, {
            headers: { Authorization: `Bearer ${jwt}` },
          });
          console.log("Estoy dentro de rentMovie", res);
          console.log(res.data);
          
          console.log("ESTO ES LA RESPUESTA",res.data.resp);
        dispatch(addOrder({ orders: res.data.resp }));
        navigate("/userOrder")//De momento solo va a home.
        return res;

    }




    const returnHome = () => {
        navigate("/");
    }

    if (selectedFilm?.id_movie !== undefined) {

        return (
            <div className="filmDesign">
                {selectedFilm?.title}
                <img className="filmPic" src={selectedFilm?.image} />

                {credentials?.credentials?.jwt !== undefined &&

                    <div onClick={() => watchMe(body, jwt)} className='buttonDesign'>
                        Rent me!
                    </div>

                }
                <div onClick={() => returnHome()} className='buttonDesign'>
                    Volver a Home
                </div>

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