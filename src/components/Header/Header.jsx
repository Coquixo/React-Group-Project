import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { userData } from "../../containers/User/userSlice";
import { addSearch } from "../../containers/Films/filmsSlice";
import './Header.scss'
import { useNavigate } from 'react-router-dom';
import { searchMovies } from '../../services/apiCalls';





const Header = () => {


    const navigate = useNavigate();
    const userReduxCredentials = useSelector(userData);
    const dispatch = useDispatch();

    //Hooks

    // const [criteria, setCriteria] = useState('');

    //Handlers

    // const criteriaHandler = (e) => {

    //     setCriteria(e.target.value);
    // }

    //Life-cycle functions

    // useEffect(() => {

    //     if (criteria !== '') {
    //         //llamamos a la función de búsqueda....

    //         searchMovies(criteria)
    //             .then(result => {
    //                 console.log("que ha pasado???? ", result);

    //                 //Ahora que tengo las películas...las guardo en redux....
    //                 dispatch(addSearch({ search: result }))
    //             })
    //             .catch(error => console.log((error)));
    //     }
    // }, [criteria]);
    console.log(userReduxCredentials)
    if (userReduxCredentials?.credentials?.jwt !== undefined) {
        //Esta comparativa viene a decirnos que SI tenemos un token

        return (
            <div className='headerDesign'>
                {/* <div className='divInputDesign'>
                    <input className="inputDesign" type="text" name="criteria" placeholder="search a film" onChange={(e) => criteriaHandler(e)} />
                </div> */}
                <div onClick={() => navigate("/profile")} className="linkDesign">{userReduxCredentials?.credentials?.name}</div>
                <div onClick={() => navigate("/")} className="linkDesign">Home</div>
            </div>
        )
    } else {
        //Ya que no tenemos un token, no estamos logeados, por lo tanto si damos opcion a logearnos o registrarnos

        return (
            <div className='headerDesign'>
                {/* <div className='divInputDesign'>
                    <input className="inputDesign" type="text" name="criteria" placeholder="search a film" onChange={(e) => criteriaHandler(e)} />
                </div> */}

                <div onClick={() => navigate('/login')} className="linkDesign">Login</div>
                <div onClick={() => navigate('/register')} className="linkDesign">Register</div>
            </div>
        )
    }


}
export default Header;


