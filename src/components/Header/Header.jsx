import React from 'react';
import './Header.scss'
import { useNavigate } from 'react-router-dom';





const Header = () => {


    const navigate = useNavigate();




    return (
        <div className='headerDesign'>

            
            <div onClick={() => navigate('/login')} className="linkDesign">Login</div>
            <div onClick={() => navigate('/register')} className="linkDesign">Register</div>


        </div>
    )

}

export default Header;