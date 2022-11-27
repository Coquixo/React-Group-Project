import React, { useEffect, useState } from "react";
import { errorCheck } from "../../../services/errorManage";
import { useNavigate } from "react-router-dom";
import "./userSettings.scss";
import EyeIcon from "../../../components/icons/EyeIcon";
import EyeSlashIcon from "../../../components/icons/EyeSlashIcon";
import "./userSettings.scss"

const UserSettings = () => {
  //Hooks
  const [user, setUser] = useState({
    name: "aqui va anterior nombre",
    surname: "aqui va anterior apellido",
    email: "aqui va anterior email",
    age: "aqui va anterior edad",
    phone: "aqui va anterior telefono",
    adress: "aqui va anterior calle",
    password: "Aqui no tiene que ir nada, no deberian te deberia de traer la contraseña",
    password2: "Lo mismo que arriba",
  });

  const [userError, setUserError] = useState({
    nameError: "",
    surnameError: "",
    emailError: "",
    ageError: "",
    phoneError: "",
    adressError: "",
    passwordError: "",
    password2Error: "",
  });

  const [disabled, setDisabled] = useState(true);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

  const navigate = useNavigate();

  const inputHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setDisabled(!acceptedTerms);
  }, [acceptedTerms]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");

    //Aqui en principio tendría que enviar el put hacia la api con axios
  };

  const errorHandler = (field, value, type) => {
    let error = "";
    error = errorCheck(value, type);
    setUserError((prevState) => ({
      ...prevState,
      [field + "Error"]: error,
    }));
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="updateDesign">
      <h1 className="">Update your credentials</h1>
      <div className="formSquare">
        <form onSubmit={handleSubmit}>
          <p>Name:</p>
          <input
            type="text"
            name="name"
            value={user.name}
            className="updateInputs"
            placeholder="Name"
            onChange={inputHandler}
            onInput={(e) => errorHandler(e.target.name, e.target.value, "text")}
          />
          <p>Surname:</p>
          <div className="errorInput">{userError.nameError}</div>
          <input
            type="text"
            name="surname"
            value={user.surname}
            className="updateInputs"
            placeholder="Surname"
            onChange={inputHandler}
            onInput={(e) => errorHandler(e.target.name, e.target.value, "text")}
          />
          <div className="errorInput">{userError.surnameError}</div>
          <p>Mail:</p>
          <input
            type="text"
            name="email"
            value={user.email}
            className="updateInputs"
            placeholder="Email"
            onChange={inputHandler}
            onInput={(e) =>
              errorHandler(e.target.name, e.target.value, "email")
            }
          />
          <div className="errorInput">{userError.emailError}</div>
          <p>Phone:</p>
          <input
            type="text"
            name="phone"
            className="updateInputs"
            value={user.phone}
            placeholder="Phone Number"
            onChange={inputHandler}
            onInput={(e) =>
              errorHandler(e.target.name, e.target.value, "phone")
            }
          />
          <div className="errorInput">{userError.phoneError}</div>
          <p>Adress:</p>
          <input
            type="text"
            name="adress"
            className="updateInputs"
            value={user.adress}
            placeholder="Adress"
            onChange={inputHandler}
            onInput={(e) =>
              errorHandler(e.target.name, e.target.value, "adress")
            }
          />
          <div className="errorInput">{userError.adressError}</div>
          <p>Password:</p>
          <div className="updateInputs inputContainer">
            <input
              className="inputDesign passwordInput"
              type={passwordShown ? "text" : "password"}
              name="password"
              value={user.password}
              placeholder="Password"
              onChange={inputHandler}
              onInput={(e) =>
                errorHandler(e.target.name, e.target.value, "password")
              }
            />
            {passwordShown ? (
              <EyeSlashIcon classes="eyeIcon" onClick={togglePassword} />
            ) : (
              <EyeIcon classes="eyeIcon" onClick={togglePassword} />
            )}
          </div>
          <div className="errorInput">{userError.passwordError}</div>
          <p>Repeat Your Password:</p>
          <input
            type="password"
            name="password2"
            className="updateInputs"
            value={user.password2}
            placeholder="Repeat your password"
            onChange={inputHandler}
            onInput={(e) =>
              errorHandler(e.target.name, e.target.value, "password")
            }
          />
          <div className="errorInput">{userError.password2Error}</div>
          <input
            type="checkbox"
            defaultChecked={acceptedTerms}
            onChange={() => setAcceptedTerms(!acceptedTerms)}
          />
          I'm sure that i want to change that
          <br></br>
          <input
            type="submit"
            value="Update Now!"
            className="submitButton"
            disabled={disabled}
          />
        </form>
      </div>
    </div >
  );
};

export default UserSettings;
