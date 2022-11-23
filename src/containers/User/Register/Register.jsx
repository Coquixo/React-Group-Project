
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


    //Handlers inputs usuario

    const inputHandler = (e) => {

        setUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value

        }));

    }

    const errorHandler = (field, value, type) => {

        let error = "";

        error = errorCheck(value, type);

        setUserError(((prevState) => ({
            ...prevState,
            [field + "Error"]: error

        })));

    }

    return (
        <div className='formSquare'>

            <div className='registerDesign'>
                {/* <form action=""> */}
                <input type="text" name="name" className='registerInputs' placeholder='Name'
                    onChange={(e) => inputHandler(e)} onBlur={(e) => errorHandler(e.target.name, e.target.value, "text")} />
                <div className='errorInput'>{userError.nameError}</div>
                <input type="text" name="surname" className='registerInputs' placeholder='Surname'
                    onChange={(e) => inputHandler(e)} onBlur={(e) => errorHandler(e.target.name, e.target.value, "text")} />
                <div className='errorInput'>{userError.surnameError}</div>
                <input type="text" name="email" className='registerInputs' placeholder='Email'
                    onChange={(e) => inputHandler(e)} onBlur={(e) => errorHandler(e.target.name, e.target.value, "email")} />
                <div className='errorInput'>{userError.emailError}</div>
                <input type="number" min="0" max="150"  name="age" className='registerInputs' placeholder='Age'
                    onChange={(e) => inputHandler(e)} onBlur={(e) => errorHandler(e.target.name, e.target.value, "age")} />
                <div className='errorInput'>{userError.ageError}</div>
                <input type="text" name="phone" className='registerInputs' placeholder='Phone Number'
                    onChange={(e) => inputHandler(e)} onBlur={(e) => errorHandler(e.target.name, e.target.value, "phone")} />
                <div className='errorInput'>{userError.phoneError}</div>
                <input type="text" name="adress" className='registerInputs' placeholder='Adress'
                    onChange={(e) => inputHandler(e)} onBlur={(e) => errorHandler(e.target.name, e.target.value, "adress")} />
                <div className='errorInput'>{userError.adressError}</div>
                <input type="password" name="password" className='registerInputs' placeholder='Password'
                    onChange={(e) => inputHandler(e)} onBlur={(e) => errorHandler(e.target.name, e.target.value, "password")} />
                <div className='errorInput'>{userError.passwordError}</div>
                <input type="password" name="password2" className='registerInputs' placeholder='Repeat your password'
                    onChange={(e) => inputHandler(e)} onBlur={(e) => errorHandler(e.target.name, e.target.value, "password")} />
                <div className='errorInput'>{userError.password2Error}</div>
                <input type="button" value="Sign In" className='submitButton' />

                {/* </form> */}
            </div>
        </div>


    )

}

export default Register;