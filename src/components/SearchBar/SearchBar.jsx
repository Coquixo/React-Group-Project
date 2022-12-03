import React, { useState, useEffect } from "react";
import { addSearch, cleanSearch } from "../../containers/Films/filmsSlice";
import { searchMovies } from "../../services/apiCalls";
import { useDispatch } from "react-redux";
import './SearchBar.scss'


const SearchBar = () => {

    const dispatch = useDispatch();

    //HOOK
    const [criteria, setCriteria] = useState('');


    //HANDLER
    const criteriaHandler = (e) => {
        setCriteria(e.target.value);
    }



    useEffect(() => {

        if (criteria !== '') {

            //Debounce....
            const bring = setTimeout(() => {
                searchMovies(criteria)
                    .then(res => {
                        console.log("que ha pasado???? ", res);

                        //Ahora que tengo las películas...las guardo en redux....
                        dispatch(addSearch({ details: res}))
                        console.log("ESTEESELDELSEARCH",res)
                    })
                    .catch(error => console.log((error)));
            }, 350);
            return () => clearTimeout(bring);

        } else if (criteria === '') {
            //Guardo en RDX pelis vacías...
            dispatch(cleanSearch({ details: {} }))
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