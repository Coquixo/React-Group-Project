import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';//Son métodos desestructurados que hay que INSTANCIAR(mas abajo)
import { userData, login } from '../userSlice'// Esto lo importamos desde userSlice. Nos hace falta para el useSelector
//Nos estamos trayendo el ESTADO(el ALMACEN, la zona donde se guarda la info)
// import { loginUser } from '../../../services/apiCalls'
import './Login.scss'




const Login = () => {

    //Instanciamos los métodos desestructurados importados al inicio del archivo:
    const navigate = useNavigate();//Necesario para navegar

    const dispatch = useDispatch();//Esto me permitirá usar el dispatch en cualquier momento en la Aplicacion para despachar ACCIONES de REDUX

    const userReduxCredentials = useSelector(userData);//Aqui estamos guardando el ALMACEN de REDUX en userReduxCredentials.

    //Hooks:
    //Hooks de credenciales de usuario:
    const [user, setUser] = useState({
        email: '',
        password: ''
    });


    // HANDLERS
    const inputHandler = (e) => {
        //Aqui setearemos DINAMICAMENTE el BINDEO entre inputs y hook.
        setUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }


    //Life cycle-methods:
    useEffect(() => {
        if (userReduxCredentials?.token !== "") { //Esto quiere decir, que SI que TIENES TOKEN, por lo tanto, navegaremos automaticamente fuera de Login.(Iremos a HOME)
            navigate("/");// ESTO MISMO, TAMBIEN PODEMOS APLICARLO A LA RESTRICCION SI ALGUIEN QUIERE ENTRAR EN ADMIN
        }
    }, []);


    //ESTO HAY QUE MODIFICARLO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //Creamos la funcion logme, que usaremos al Clickar el boton.
    //Funcion Local de login
    const logMe = () => {
        // //Empieza el proceso de login...// DE MOMENTO LO DEJO COMENTADO TODO ESTO
        // loginUser(user);//Le pasamos el Hook que tiene los datos de usuario
        // .then(data =>{//Si ecuentra datos, entonces haremos esta funcion...
        //     console.log(data)
        // })
        // .catch(error);

        //Vamos a fingir que el Token nos ha llegado del backend:
        let fakeHardToken = 'wololo';
        //Una vez que el backend nos da el Token, que tenemos que hacer? GUARDARLO en REDUX(Para que el Header, que tb esta conectado a REDUX, lo lea)
        //COMO lo GUARDAMOS? con el DISPATCH:
        dispatch(login({ token: fakeHardToken }));//Este login lo hemos importado de userSlice

        //Una vez haya hecho el dispatch, con un Settimeout(para que sea mas suave), 
        //nos redirigira a Home( ya que ya estaremos logeados):

        setTimeout(() => {
            navigate("/")
        }, 1000);

    }
    return (
        <div className='loginDesign'>
            <div className='inputsContainer'>
                <input type="text" name='email' placeholder='email' onChange={(e) => inputHandler(e)} />
                <input type="password" name='password' placeholder='password' onChange={(e) => inputHandler(e)} />
            </div>
            <div onClick={() => logMe()} className='buttonDesign'>
                Login me!
            </div>
        </div>
    )
}

export default Login;