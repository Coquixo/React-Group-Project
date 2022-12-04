import React, { useEffect, useState } from "react";
import { errorCheck } from "../../../services/errorManage";
import { useNavigate } from "react-router-dom";
import "./userSettings.scss";
import EyeIcon from "../../../components/icons/EyeIcon";
import EyeSlashIcon from "../../../components/icons/EyeSlashIcon";
import "./userSettings.scss"
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { bringUsers, eraseUser, updateUser } from "../../../services/apiCalls"
const UserSettings = () => {

  const userReduxCredentials = useSelector(userData);

  const jwt = userReduxCredentials?.credentials?.jwt;
  //Hooks
  const [user, setUser] = useState({
    name: userReduxCredentials?.credentials?.name,
    surname: userReduxCredentials?.credentials?.surname,
    email: userReduxCredentials?.credentials?.email,
    age: userReduxCredentials?.credentials?.age,
    phone: userReduxCredentials?.credentials?.phone,
    address: userReduxCredentials?.credentials?.address,
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


  const [notEmail, setNotEmail] = useState("");

  console.log(userReduxCredentials)

  const [disabled, setDisabled] = useState(true);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

  const navigate = useNavigate();

  const [users, setUsers] = useState([]);


  //bringing users from api
  const updateUsers = () => {
    bringUsers(jwt).then((users) => {
      console.log(users)
      setUsers(users);
    }).catch((error) => console.log(error))
  }

  useEffect(() => {
    updateUsers()
  }, [])

  const inputHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  };
  const inputEraseHandler = (e) => {
    setNotEmail(
      e.target.value
    )
    console.log(notEmail)
  };

  useEffect(() => {
    setDisabled(!acceptedTerms);
  }, [acceptedTerms]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  //bringing users from ap

  const handleEraseSubmit = () => {
    try {

      if (notEmail !== userReduxCredentials?.credentials?.email) {

        eraseUser(notEmail, jwt);
      }

      updateUsers()


    } catch (error) {
      console.log('deleteo fallito ' + error)
    };
  }

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
    <div className="settingsViewDesign">


      <div className="settingsBoxDesign">


        <h1 className="updateTittleDesign">Update your credentials</h1>
        <form onSubmit={handleSubmit} className="formSquare2">
          <p>NAME</p>
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
            value={user.address}
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
          <div className="adviseDesign">
            <input
              type="checkbox"
              defaultChecked={acceptedTerms}
              onChange={() => setAcceptedTerms(!acceptedTerms)}
            />

            <p>

              I'm sure that i want to change that
            </p>
          </div>
          <br></br>
          <input
            type="submit"
            value="Update Now!"
            className="submitButton"
            disabled={disabled}
          />
        </form>
      </div >
      <div className="settingsBoxDesign">

        <h1 className="updateTittleDesign">Admin Settings</h1>
        <div className="formSquare2">
          <form action="" className="eraseBox">

            <input type="text" name="notEmail" className="eraseInput" placeholder="user Email" onChange={inputEraseHandler} />
            <input type="button" className="eraseButton" value="Erase user" onClick={handleEraseSubmit} />
          </form>

          {users.map((user) => {
            return (
              <div className="usersBoxDesign">
                Id: {user.id_user}
                <br />
                User: {user.name}{user.surname}
                <br />
                Email: {user.email}
                <br />

              </div>
            )


          })}
        </div>
      </div>
    </div>


  );
};

export default UserSettings;
