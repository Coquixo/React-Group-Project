import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.scss";
import { userData, userout } from "../userSlice";
import { useSelector, useDispatch } from "react-redux";

const Profile = () => {
  //hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userReduxCredentials = useSelector(userData);

  const logout = () => {
    if (userReduxCredentials?.credentials?.token !== undefined) {
      //aqui borraremos el token y haremos log out :)
      dispatch(userout({ credentials: {} }));

      //inmediatamente despues del logout, conduzco al usuario a home.
      return navigate("/");
    }
  };

  return (
    <div className="menuDesign">
      <div className="menuButtonDesign" onClick={() => navigate("/login")}>
        Rented Movies
      </div>
      <div className="menuButtonDesign" onClick={() => navigate("/login")}>
        Rented Series
      </div>
      <div className="menuButtonDesign" onClick={() => navigate("/userSettings")}>
        User Settings
      </div>
      <div className="menuButtonDesign logOutDesign" onClick={logout}>
        Log Out
      </div>
    </div>
  );
};

export default Profile;
