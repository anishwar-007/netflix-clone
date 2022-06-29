import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../utils/images/netflix_logo.png";

const Navbar = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) handleShow(true);
      else handleShow(false);
    });
  }, []);

  return (
    <div className={`navbar ${show && "nav__black"}`}>
      <img className="nav__logo" src={logo} alt="Netflix logo" />

      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix logo"
      />
    </div>
  );
};

export default Navbar;
