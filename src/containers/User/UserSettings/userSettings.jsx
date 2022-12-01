import React, { useEffect, useState } from "react";
import { errorCheck } from "../../../services/errorManage";
import { useNavigate } from "react-router-dom";
import "./userSettings.scss";
import EyeIcon from "../../../components/icons/EyeIcon";
import EyeSlashIcon from "../../../components/icons/EyeSlashIcon";
import "./userSettings.scss"
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
const UserSettings = () => {

  const userReduxCredentials = useSelector(userData);
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

  console.log(userReduxCredentials)

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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam deserunt amet adipisci neque maxime consectetur repudiandae, voluptatum ducimus ab aperiam cupiditate quis ratione, quasi rem natus, nulla sit perspiciatis iste voluptatibus saepe necessitatibus facilis consequatur! Voluptatibus, hic ratione fugiat odio rem sapiente libero quae corrupti aspernatur nostrum? Expedita perspiciatis ipsam modi repudiandae tenetur consectetur accusantium. Excepturi ex eos molestiae et provident earum, cupiditate pariatur id odio distinctio, rem sapiente. Ex culpa nesciunt, id dignissimos quidem necessitatibus voluptatum omnis iure. Repellendus architecto commodi temporibus labore, dolorum maiores magnam quibusdam aliquid dolore omnis quia suscipit minima voluptates, consequatur quaerat! Necessitatibus rem magnam eligendi velit commodi at iste! Doloribus libero quidem inventore iusto, ipsa mollitia corporis provident incidunt recusandae unde ducimus consequatur debitis excepturi quis ipsum quasi, modi nobis minus soluta non porro laboriosam quae exercitationem aperiam? A vitae eligendi quod doloremque alias. Ipsa, eaque. A, aliquam repudiandae vel numquam voluptas, dolorum sed quas sunt debitis distinctio aut quam similique est? Quos deleniti quod odit minima modi voluptatibus magnam vel esse. Repudiandae dolores cumque voluptate, est, vel veniam animi velit quos architecto sit inventore aliquam. Dolorum necessitatibus sed nostrum labore saepe, voluptatibus, alias suscipit molestias aut ullam earum? Neque, ipsum recusandae molestiae asperiores beatae delectus rerum incidunt sit ducimus aliquam sapiente maxime commodi? Aut, nobis at. Fugiat blanditiis quaerat adipisci maxime officiis explicabo consectetur. Iure aut quis vero aliquid ipsa! Cupiditate assumenda explicabo delectus? Fugiat corporis, quaerat atque nisi quidem blanditiis optio! Dolor aspernatur ad atque optio eligendi quod, qui reprehenderit dolores minima nostrum a animi minus iusto magnam facere iure vel tempora, voluptate quam delectus nam? Doloribus quasi aut doloremque similique alias corporis ex inventore nihil perspiciatis ad. Quae magni at molestiae voluptates ullam cumque obcaecati ad rerum ab, dignissimos tenetur provident officia magnam aut dolor eum saepe voluptatum. Delectus earum culpa doloremque ipsum officia molestias esse hic aspernatur nesciunt minus adipisci iusto sunt odit nisi corporis facilis, architecto pariatur quaerat itaque commodi? Consequuntur deleniti iusto quas, cumque eos dolorem quidem aliquam fugit, explicabo reiciendis obcaecati ducimus architecto voluptatibus repellendus totam blanditiis reprehenderit repudiandae ea? Ducimus molestias nihil, molestiae laborum rerum debitis ullam omnis, mollitia enim, ratione consequuntur architecto in! Architecto placeat ullam quod odit dolorem accusamus tempore quia voluptatum animi neque rem saepe aliquid quis, quam dolore labore vero error, nam voluptate. Incidunt suscipit beatae a ratione nam atque, quam et nisi illum praesentium rerum esse odio rem inventore nulla aut harum dolores consequuntur ullam nemo quibusdam unde. Nemo veniam corporis nobis itaque maxime reiciendis debitis cupiditate, necessitatibus rerum id unde ex perferendis, adipisci qui pariatur rem vitae. Quis repellat temporibus quidem eligendi? Sed quaerat cum doloribus amet doloremque. Nisi, facilis. Placeat animi cumque consequuntur facere fuga repellendus eos, quod magni numquam esse consequatur doloribus a ad sit odit atque laborum possimus itaque ducimus? Suscipit, doloribus? Repudiandae dicta distinctio laborum rerum molestiae temporibus, voluptatibus mollitia repellat reprehenderit dolores ducimus quod placeat possimus qui. Quibusdam quasi vel aperiam maxime perspiciatis enim, maiores commodi ab. Repudiandae, libero quibusdam totam architecto nihil amet quia?
        </div>
      </div>
    </div>


  );
};

export default UserSettings;
