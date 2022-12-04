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
    const navigate = useNavigate();//Necesario para navegar

    //Hooks
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        console.log("soy las orders de redux", ordersFromRdx)
        if (orders.length === 0) {
            bringOrders(idUser,jwt)
                .then((orders) => {
                    setOrders(orders);
                })
                .catch((error) => console.log(error));
        }
    }, []);

    //VARIABLE NUEVA
    const order = ordersFromRdx;
    const email = credentials?.credentials?.email;
    const idUser = credentials?.credentials?.id_user;
    const jwt = credentials?.credentials?.jwt;
    const body = { email, order };



    const returnHome = () => {

        console.log("AQUI ESTA EL ID DE USER!!", idUser);
        console.log("AQUI ESTA EL order", order)
        console.log("AQUI ESTA EL JWT", jwt)
        console.log("AQUI ESTA EL BODY", body)
        navigate("/");
    }

    if (orders.length === 0) {
        return <div className="orderDesign">soy Orders</div>;
    } else if (ordersFromRdx.orders.length > 0) {

        console.log("Estoy dentro", ordersFromRdx)
        console.log("Devuelveme", ordersFromRdx.orders)
        return (
            <div className="containerDesign">

                <div className="homeDesign">
                    {ordersFromRdx.orders.map((order) => {
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