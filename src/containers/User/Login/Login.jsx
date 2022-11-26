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
  const dataBase = "http://localhost:3000/";

  //Instanciamos los métodos desestructurados importados al inicio del archivo:
  const navigate = useNavigate(); //Necesario para navegar

  const dispatch = useDispatch(); //Esto me permitirá usar el dispatch en cualquier momento en la Aplicacion para despachar ACCIONES de REDUX

  const userReduxCredentials = useSelector(userData); //Aqui estamos guardando el ALMACEN de REDUX en userReduxCredentials.



  //Hooks:
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

  // const errorHandler = (e) => {

  //     let error = "";

  //     error = errorCheck(e.target.name, e.target.value);

  //     setUserError((prevState) => ({
  //         ...prevState,
  //         [e.target.name + 'Error']: error
  //     }));

  // }

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

    if (userReduxCredentials?.credentials?.token !== undefined) {
      //Esto quiere decir, que SI que TIENES TOKEN, por lo tanto, navegaremos automaticamente fuera de Login.(Iremos a HOME)
      navigate("/"); // ESTO MISMO, TAMBIEN PODEMOS APLICARLO A LA RESTRICCION SI ALGUIEN QUIERE ENTRAR EN ADMIN
    }
  }, []);

  const logMe = () => {
    console.log("LOGEADO!!");
    //Hardcodeamos un token fingiendo que el backend nos ha devuelto el susodicho
    let fakeHardCredentials = {
      token: "secreto",
      name: "Piwi",
      email: "piwi@test.com",
      phone: "666555444"
    }

    dispatch(login({ credentials: fakeHardCredentials }));

    setTimeout(() => {
      navigate("/");
    }, 1000);//De momento solo va a home.
  };

  //ESTO HAY QUE MODIFICARLO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //Creamos la funcion logme, que usaremos al Clickar el boton.
  //Funcion Local de login
  // const logMe = async (props) => {
  //     try {

  //         let body = {
  //             email: user.email,
  //             password: user.password
  //         }

  //         let resultado = await axios.post(dataBase + "auth/login", body);

  //         if (resultado.message === "Password or email is incorrect") {//Aqui estoy intentando compararlo con la base de datos
  //             setMsgError2("Usuario o contraseña incorrecto")
  //         } else {

  //             props.dispatch({ type: login, payload: resultado.data });//MODIFICAR ESTO!

  //             setTimeout(() => {

  //                 navigate("/");
  //             }, 1500);
  //         }

  //     } catch (error) {

  //         console.log(error)

  //     }

  // };
  //Empieza el proceso de login...// DE MOMENTO LO DEJO COMENTADO TODO ESTO
  // loginUser(user);//Le pasamos el Hook que tiene los datos de usuario
  // if(email === state.user.mail){data =>{//Si ecuentra datos, entonces haremos esta funcion...
  //     console.log(data)
  // }}
  // else{console.log("Ha ocurrido un problema")};

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
        <h1 className="">PLEASE ENTER YOUR DETAILS TO LOGIN</h1>
        <div>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            onChange={(e) => inputHandler(e)}
            onBlur={(e) => errorHandler(e.target.name, e.target.value, "email")}
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
            onBlur={(e) =>
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
      <div onClick={() => logMe()} className="buttonDesign">
        Login me!
      </div>
    </div>
  );
};

export default Login;