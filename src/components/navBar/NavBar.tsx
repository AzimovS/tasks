import React from "react";
import UserLoginMenu from "../userLoginMenu/UserLoginMenu";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <header className="header">
        <div className="left">
          <a href="#">Movie List</a>
        </div>
        <div className="mid"></div>
        <div className="right">
            <UserLoginMenu />
        </div>
      </header>
    </div>
  );
};

export default NavBar;
