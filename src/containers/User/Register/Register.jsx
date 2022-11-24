
import React, { useEffect, useState } from 'react';
import { errorCheck } from '../../../services/errorManage'
import './Register.scss'


const Register = () => {

    //Hooks
    const [user, setUser] = useState({
        name: "",
        surname: "",
        email: "",
        age: "",
        phone: "",
        adress: "",
        password: "",
        password2: ""
    });

    const [userError, setUserError] = useState({
        nameError: "",
        surnameError: "",
        emailError: "",
        ageError: "",
        phoneError: "",
        adressError: "",
        passwordError: "",
        password2Error: ""
    });

    const [message, setMessage] = useState('');


    //Handlers inputs usuario

    const inputHandler = (e) => {

        setUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value


        }));

    }
    console.log(user);

    const errorHandler = (field, value, type) => {

        let error = "";

        error = errorCheck(value, type);

        setUserError(((prevState) => ({
            ...prevState,
            [field + "Error"]: error

        })));

    }

    //Show / Hide Password

    const [passwordShown, setPasswordShown] = useState(false);

    // Password toggle handler
    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
    };

    


    return (
        <div className="registerDesign">

            <div className='formSquare'>
                <h1 className=''>WELCOME</h1>
                {/* <form action=""> */} 
                {/* Si colocamos form el botton de enseñar contraseña resetea el estado user, no estoy seguro si tambien pasa con submit (queda por ver) */}
                    <input type="text" name="name" className='registerInputs' placeholder='Name'
                        onChange={(e) => { inputHandler(e); setMessage(e.target.value) }} onBlur={(e) => errorHandler(e.target.name, e.target.value, "text")} />
                    <div className='errorInput'>{userError.nameError}</div>
                    <input type="text" name="surname" className='registerInputs' placeholder='Surname'
                        onChange={(e) => { inputHandler(e); setMessage(e.target.value) }} onBlur={(e) => errorHandler(e.target.name, e.target.value, "text")} />
                    <div className='errorInput'>{userError.surnameError}</div>
                    <input type="text" name="email" className='registerInputs' placeholder='Email'
                        onChange={(e) => { inputHandler(e); setMessage(e.target.value) }} onBlur={(e) => errorHandler(e.target.name, e.target.value, "email")} />
                    <div className='errorInput'>{userError.emailError}</div>
                    <input type="number" min="0" max="150" name="age" className='registerInputs' placeholder='Age'
                        onChange={(e) => { inputHandler(e); setMessage(e.target.value) }} onBlur={(e) => errorHandler(e.target.name, e.target.value, "age")} />
                    <div className='errorInput'>{userError.ageError}</div>
                    <input type="text" name="phone" className='registerInputs' placeholder='Phone Number'
                        onChange={(e) => { inputHandler(e); setMessage(e.target.value) }} onBlur={(e) => errorHandler(e.target.name, e.target.value, "phone")} />
                    <div className='errorInput'>{userError.phoneError}</div>
                    <input type="text" name="adress" className='registerInputs' placeholder='Adress'
                        onChange={(e) => { inputHandler(e); setMessage(e.target.value) }} onBlur={(e) => errorHandler(e.target.name, e.target.value, "adress")} />
                    <div className='errorInput'>{userError.adressError}</div>
                    <input type={passwordShown ? "text" : "password"} name="password" className='registerInputs' placeholder='Password'
                        onChange={(e) => { inputHandler(e); setMessage(e.target.value) }} onBlur={(e) => errorHandler(e.target.name, e.target.value, "password")} />
                    <div className='errorInput'>{userError.passwordError}</div>
                    <input type="password" name="password2" className='registerInputs' placeholder='Repeat your password'
                        onChange={(e) => { inputHandler(e); setMessage(e.target.value) }} onBlur={(e) => errorHandler(e.target.name, e.target.value, "password")} />
                    <div className='errorInput'>{userError.password2Error}</div>
                    <button onClick={togglePassword} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 24 20"><path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z" /></svg>
                    </button>
                    <br />
                    <input type="checkbox" /> He leido la <i>politica</i> de <i>privacidad</i> de la empresa <br></br>
                    <a href="https://www.google.com/">

                    <input type="button" value="Sign In" className='submitButton' disabled={!message} />
                    </a>

                {/* </form> */}
            </div>

        </div>

    )


}

export default Register;