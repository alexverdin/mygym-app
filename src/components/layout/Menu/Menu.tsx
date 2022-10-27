import React from "react";
import { NavLink } from "react-router-dom";
import { LiRouter } from "../LiRouter/LiRouter";

const Menu = () => {
  
  return (
    <>
      <NavLink
        className={(navData) => (navData.isActive ? "active-a" : "")}
        to="/users"
      >
        <LiRouter
          text="Users"
          icon={<i className="fa-solid fa-chart-line"></i>}
        />
      </NavLink>
      
      <NavLink
        className={(navData) => (navData.isActive ? "active-a" : "")}
        to="/classes"
      >
        <LiRouter
          text="Classes"
          icon={<i className="fa-solid fa-user-group"></i>}
        />
      </NavLink>
    </>
  );
};

export default Menu;