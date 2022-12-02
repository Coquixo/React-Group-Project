import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; //Son métodos desestructurados que hay que INSTANCIAR(mas abajo)
import { userData, login } from "../userSlice"; // Esto lo importamos desde userSlice. Nos hace falta para el useSelector
//Nos estamos trayendo el ESTADO(el ALMACEN, la zona donde se guarda la info)
import { loginUser } from "../../../services/apiCalls";
import { errorCheck } from "../../../services/errorManage";
import "./Login.scss";

import EyeIcon from "../../../components/icons/EyeIcon";
import EyeSlashIcon from "../../../components/icons/EyeSlashIcon";



const Login = () => {


  const dataBase = "http://localhost:3001/";

  //Instanciamos los métodos desestructurados importados al inicio del archivo:
  const navigate = useNavigate(); //Necesario para navegar

  const dispatch = useDispatch(); //Esto me permitirá usar el dispatch en cualquier momento en la Aplicacion para despachar ACCIONES de REDUX

  const userReduxCredentials = useSelector(userData); //Aqui estamos guardando el ALMACEN de REDUX en userReduxCredentials.

  //Hooks de credenciales de usuario:
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [userError, setUserError] = useState({
    emailError: "",
    passwordError: "",
  });

  //HookPassword
  const [passwordShown, setPasswordShown] = useState(false);

  // HANDLERS
  const inputHandler = (e) => {
    //Aqui setearemos DINAMICAMENTE el BINDEO entre inputs y hook.
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
    console.log(userReduxCredentials);

    if (userReduxCredentials?.credentials?.jwt !== undefined) {
      //Esto quiere decir, que SI que TIENES TOKEN, por lo tanto, navegaremos automaticamente fuera de Login.(Iremos a HOME)
      navigate("/"); // ESTO MISMO, TAMBIEN PODEMOS APLICARLO A LA RESTRICCION SI ALGUIEN QUIERE ENTRAR EN ADMIN
    }
  }, []);

  const logMe = async (user) => {
    try {

      let resultado = await axios.post(dataBase + "auth/login", {
        email: user.email,
        password: user.password
      });
      // return resultado.data;

      if (resultado.data.message === "Password or email is incorrect") {//Aqui estoy intentando compararlo con la base de datos
        console.error("Usuario o contraseña incorrecto")
      } else {

        dispatch(login({ credentials: resultado.data }));
        //Este userReduxCredentials me viene vacio, no funciona
        console.log("Este es el mensaje", resultado.data);

        //Este resultado.data me viene con el message y el jwt, si que funciona
        console.log("USERREDUZX", userReduxCredentials);

        setTimeout(() => {

          navigate("/profile");
        }, 500);
      }

    } catch (error) {
      console.log("CATCHERRORRRR", userReduxCredentials);
      console.log("Este es el mensaje");
      console.log(error)

    }

  };


  //Una vez que el backend nos da el Token, que tenemos que hacer? GUARDARLO en REDUX(Para que el Header, que tb esta conectado a REDUX, lo lea)
  //COMO lo GUARDAMOS? con el DISPATCH:
  //     dispatch(login({ credentials: userReduxCredentials }));//Este login lo hemos importado de userSlice

  //     //Una vez haya hecho el dispatch, con un Settimeout(para que sea mas suave),
  //     //nos redirigira a Home( ya que ya estaremos logeados):

  //     setTimeout(() => {
  //         navigate("/")
  //     }, 1000);

  // }

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
