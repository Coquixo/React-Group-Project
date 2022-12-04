import React, { useState, useEffect } from 'react';
import "./UserOrder.scss";
import { useSelector } from "react-redux";
import { orderData } from "./orderSlice";
import { userData } from "../userSlice";
import { useNavigate } from 'react-router-dom';
import { bringOrders, rentMovie } from "../../../services/apiCalls";

const UserOrder = () => {

    const ordersFromRdx = useSelector(orderData);
    const credentials = useSelector(userData);
    const navigate = useNavigate();

    //Hooks
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        
        if (orders.length === 0) {
            bringOrders(idUser,jwt)
                .then((orders) => {
                    setOrders(orders);
                })
                .catch((error) => console.error(error));
        }
    }, []);

 
    const order = ordersFromRdx;
    const email = credentials?.credentials?.email;
    const idUser = credentials?.credentials?.id_user;
    const jwt = credentials?.credentials?.jwt;
    const body = { email, order };



    const returnHome = () => {

        navigate("/");
    }

    if (orders.length === 0) {
        return <div className="orderDesign">soy Orders</div>;
    } else if (orders.length > 0) {

        return (
            <div className="containerDesign">

                <div className="orderDesign">
                    {orders.map((order) => {
                        return (
                            <div
                                onClick={() => returnHome(order)}
                                className="orderShow">
                                <div className='moviesNumber'>
                                    <p className='pMovies'>Movie's number:</p>
                                    {order.articleIdArticle}
                                    
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>



        )
    } else {
        return (


            <div className="containerDesign">

                <div className="homeDesign">
                    {orders.map((order) => {
                        return (
                            <div
                                onClick={() => returnHome(order)}
                                className="movieShow">
                                <img
                                    className="moviePic"
                                    src={order.image}
                                />
                            </div>
                        );
                    })}
                </div>

            </div>



        )
    }

}
export default UserOrder;