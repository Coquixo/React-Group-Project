import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; 
import { userData, login } from "../userSlice"; 
import { errorCheck } from "../../../services/errorManage";
import "./Login.scss";

import EyeIcon from "../../../components/icons/EyeIcon";
import EyeSlashIcon from "../../../components/icons/EyeSlashIcon";



const Login = () => {


  const dataBase = "http://localhost:3001/";

 
  const navigate = useNavigate(); 

  const dispatch = useDispatch(); 

  const userReduxCredentials = useSelector(userData); 

  //Hooks 
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [userError, setUserError] = useState({
    emailError: "",
    passwordError: "",
  });


  const [passwordShown, setPasswordShown] = useState(false);

  // HANDLERS
  const inputHandler = (e) => {
    
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const errorHandler = (field, value, type) => {
    let error = "";
    error = errorCheck(value, type);
    setUserError((prevState) => ({
      ...prevState,
      [field + "Error"]: error,
    }));
  };

  //Life cycle-methods:
  useEffect(() => {
    

    if (userReduxCredentials?.credentials?.jwt !== undefined) {
     
      navigate("/"); 
    }
  }, []);

  const logMe = async (user) => {
    try {

      let resultado = await axios.post(dataBase + "auth/login", {
        email: user.email,
        password: user.password
      });
   

      if (resultado.data.message === "Password or email is incorrect") {
        console.error("Usuario o contraseña incorrecto")
      } else {

        dispatch(login({ credentials: resultado.data }));

        setTimeout(() => {

          navigate("/profile");
        }, 300);
      }

    } catch (error) {
      
      console.error(error)

    }

  };


  //PASSWORD-EYE
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="loginDesign">
      <div className="inputsContainer">
        <h1 className="loginTittleDesign">PLEASE ENTER YOUR DETAILS TO LOGIN</h1>
        <div>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            onChange={(e) => inputHandler(e)}
            onInput={(e) => errorHandler(e.target.name, e.target.value, "email")}
            className={
              userError.emailError === ""
                ? "inputLogin"
                : "inputLogin inputLoginError"
            }
          />
          <div className="errorMessage">{userError.emailError}</div>
        </div>
        <div className="inputLogin">
          <input
            type={passwordShown ? "text" : "password"}
            name="password"
            placeholder="password"
            onChange={(e) => inputHandler(e)}
            onInput={(e) =>
              errorHandler(e.target.name, e.target.value, "password")
            }
            className={
              userError.passwordError === ""
                ? "inputDesign"
                : "inputDesign inputLoginError"
            }
          />
          {passwordShown ? (
            <EyeSlashIcon classes="eyeIcon" onClick={togglePassword} />
          ) : (
            <EyeIcon classes="eyeIcon" onClick={togglePassword} />
          )}
        </div>
        <div className="errorMessage">{userError.passwordError}</div>
      </div>
      <div onClick={() => logMe(user)} className="buttonDesign">
        Login me!
      </div>
    </div>
  );
};

export default Login;
