import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { users } from "../../mock";
import "./UserLoginMenu.css";

const UserLoginMenu = () => {
  const { user, login, logout } = useContext(UserContext);

  const loginUser = () => {
    login(users[0]);
  };

  const logoutUser = () => {
    logout(null);
  };
  console.log(user);

  return user ? (
    <div>
      <div className="dropdown">
      <img src={user.avatar} className="logo-image" alt="image not found" />
        {/* <button>Button</button> */}
        <div className="item">
          <p>Profile</p>
          <p onClick={logoutUser}>Log Out</p>
        </div>
      </div>
    </div>
  ) : (
    <div onClick={loginUser}>Login</div>
  );
};

export default UserLoginMenu;
