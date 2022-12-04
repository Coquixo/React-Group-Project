import React from 'react';
import "./Films.scss";
import { useSelector, useDispatch } from "react-redux";
import { filmData } from "./filmsSlice";
import { addOrder, orderData } from "../User/UserOrder/orderSlice";
import { userData } from "../User/userSlice";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Film = () => {

    const dispatch = useDispatch();
    const selectedFilm = useSelector(filmData);
    const credentials = useSelector(userData);
    const navigate = useNavigate();


    const title = selectedFilm?.title;
    const email = credentials?.credentials?.email;
    const jwt = credentials?.credentials?.jwt;
    const body = { email, title };
    const dataBase = "https://master.d35259stzijjoa.amplifyapp.com";

    const watchMe = async (body, jwt) => {

        let res = await axios.post(dataBase + "/orders/newOrderMovie", body, {
            headers: { Authorization: `Bearer ${jwt}` },
        });


        dispatch(addOrder({ orders: res.data.resp }));
        navigate("/userOrder")
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