import React from "react";
import "./Nav.css";
function Nav() {
  return (
    <div className="nav">
      <img
        className="nav__logo"
        src="https://wallpaperaccess.com/full/6075689.png"
        alt="logo"
      />
      <img
        className="nav__avatar"
        src="https://i.pinimg.com/236x/12/fb/fa/12fbfa10c6135e9a5b528737ee714617.jpg"
        alt="user"
      />
    </div>
  );
}

export default Nav;
