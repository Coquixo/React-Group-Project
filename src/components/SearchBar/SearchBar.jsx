import React, { useState, useEffect } from "react";
import { addSearch } from "../../containers/Films/filmsSlice";
import { searchMovies } from "../../services/apiCalls";
import { useDispatch } from "react-redux";
import './SearchBar.scss'


const SearchBar = () => {

    const [criteria, setCriteria] = useState('');
    const dispatch = useDispatch();

    const criteriaHandler = (e) => {
        setCriteria(e.target.value);
    }

    useEffect(() => {

        if (criteria !== '') {
            //llamamos a la función de búsqueda....

            searchMovies(criteria)
                .then(result => {
                    console.log("que ha pasado???? ", result);

                    //Ahora que tengo las películas...las guardo en redux....
                    dispatch(addSearch({ search: result }))
                })
                .catch(error => console.log((error)));
        }
    }, [criteria]);

    return (
        <div className='divInputDesign'>
            <div className="search-box">
                <button className="btn-search"><i className="fas fa-search"></i></button>
                <input type="text" name="criteria" className="input-search" placeholder="Search a film" onChange={(e) => criteriaHandler(e)} />
            </div>

        </div>
    )




}


export default SearchBar;