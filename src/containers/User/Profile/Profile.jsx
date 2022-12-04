import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.scss";
import { userData, userout } from "../userSlice";
import { useSelector, useDispatch } from "react-redux";

const Profile = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userReduxCredentials = useSelector(userData);

  const logout = () => {
    if (userReduxCredentials?.credentials?.jwt !== undefined) {
      
      dispatch(userout({ credentials: {} }));

     
      return navigate("/");
    }
  };

  return (
    <div className="menuDesign">
      <div className="menuButtonDesign" onClick={() => navigate("/userOrder")}>
        Rented Movies
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
