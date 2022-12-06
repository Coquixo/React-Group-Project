import React from 'react';
import { useSelector } from "react-redux";
import { userData } from "../../containers/User/userSlice";
import './Header.scss'
import { useNavigate } from 'react-router-dom';






const Header = () => {


    const navigate = useNavigate();
    const userReduxCredentials = useSelector(userData);




    if (userReduxCredentials?.credentials?.jwt !== undefined) {


        return (
            <div className='headerDesign'>
                <div onClick={() => navigate("/")} className="linkDesign">Home</div>
                <div className='titleDesign1' onClick={() => navigate('/')}>Pop-up Films</div>
                <div onClick={() => navigate("/profile")} className="linkDesign">{userReduxCredentials?.credentials?.name}</div>
            </div>
        )
    } else {


        return (
            <div className='headerDesign'>

                <div onClick={() => navigate('/login')} className="linkDesign">Login</div>
                <div className='titleDesign1' onClick={() => navigate('/')}>Pop-up </div>
                <div onClick={() => navigate('/register')} className="linkDesign">Sign In</div>
            </div>
        )
    }


}
export default Header;


