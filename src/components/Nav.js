import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import avatar from "../images/Netflix-avatar.png";

const Nav = () => {
  const [show, handleShow] = useState();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img src={logo} alt="Netflix logo" className="nav_logo" />
      <img src={avatar} alt="avatar" className="avatar" />
    </div>
  );
};

export default Nav;
