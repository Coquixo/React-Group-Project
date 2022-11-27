import React, { useEffect, useState } from "react";
import { errorCheck } from "../../../services/errorManage";
import { useNavigate } from "react-router-dom";
import "./Register.scss";
import EyeIcon from "../../../components/icons/EyeIcon";
import EyeSlashIcon from "../../../components/icons/EyeSlashIcon";

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
    password2: "",
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
    // setUser((prevState) => ({
    //     ...prevState,
    //     [e.target.name]: e.target.value
    // }));
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const userIsNotFilled = Object.values(user).some((property) => {
      return property === "";
    });
    setDisabled(userIsNotFilled || !acceptedTerms);
  }, [user, acceptedTerms]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
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
    <div className="registerDesign">
      <div className="formSquare">
        <h1 className="">WELCOME</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className="registerInputs"
            placeholder="Name"
            required
            onChange={inputHandler}
            onInput={(e) => errorHandler(e.target.name, e.target.value, "text")}
          />
          <div className="errorInput">{userError.nameError}</div>
          <input
            type="text"
            name="surname"
            className="registerInputs"
            placeholder="Surname"
            onChange={inputHandler}
            onInput={(e) => errorHandler(e.target.name, e.target.value, "text")}
          />
          <div className="errorInput">{userError.surnameError}</div>
          <input
            type="text"
            name="email"
            className="registerInputs"
            placeholder="Email"
            onChange={inputHandler}
            onInput={(e) =>
              errorHandler(e.target.name, e.target.value, "email")
            }
          />
          <div className="errorInput">{userError.emailError}</div>
          <input
            type="number"
            min="0"
            max="150"
            name="age"
            className="registerInputs"
            placeholder="Age"
            onChange={inputHandler}
            onInput={(e) => errorHandler(e.target.name, e.target.value, "age")}
          />
          <div className="errorInput">{userError.ageError}</div>
          <input
            type="text"
            name="phone"
            className="registerInputs"
            placeholder="Phone Number"
            onChange={inputHandler}
            onInput={(e) =>
              errorHandler(e.target.name, e.target.value, "phone")
            }
          />
          <div className="errorInput">{userError.phoneError}</div>
          <input
            type="text"
            name="adress"
            className="registerInputs"
            placeholder="Adress"
            onChange={inputHandler}
            onInput={(e) =>
              errorHandler(e.target.name, e.target.value, "adress")
            }
          />
          <div className="errorInput">{userError.adressError}</div>
          <div className="registerInputs inputContainer">
            <input
              className="inputDesign passwordInput"
              type={passwordShown ? "text" : "password"}
              name="password"
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
          <input
            type="password"
            name="password2"
            className="registerInputs"
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
          />{" "}
          He leido la <i>politica</i> de <i>privacidad</i> de la empresa{" "}
          <br></br>
          <input
            type="submit"
            value="Sign In"
            className="submitButton"
            disabled={disabled}
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
