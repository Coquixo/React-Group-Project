import React from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.scss";




const Menu = () => {
  //hooks

  const navigate = useNavigate();



  const onClick = (e) => {
    e.preventDefault();
    navigate("/login");
  };


  return (
    <div className="menuDesign">
      <div className="menuButtonDesign" onClick={onClick}>Rented Movies</div>
      <div className="menuButtonDesign">Rented Series</div>
      <div className="menuButtonDesign">User Settings</div>
      <div className="menuButtonDesign logOutDesign">Log Out</div>
    </div>
  );
};

export default Menu;
