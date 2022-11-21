import React from 'react';
import './Header.scss'
import { useNavigate } from 'react-router-dom';





const Header = () => {


    const navigate = useNavigate();




    return (
        <div className='headerDesign'>

            <div>AquiVaElnombre</div>
            <div onClick={() => navigate('/loginForm')} className="linkDesign">Login</div>
            <div onClick={() => navigate('/registerForm')} className="linkDesign">Register</div>


        </div>
    )

}

export default Header;