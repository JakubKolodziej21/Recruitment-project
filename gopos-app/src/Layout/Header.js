import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Images/logo.png";

const Header = () => {
  return (
    <header className="globalBar">
      <div className="logo">
        <img alt="logo" src={logo} height="90px" />
      </div>
      <nav className="nav">
        <Link to="/" className="button">
          Lista produktów
        </Link>
        <Link to="Cateories" className="button">
          Lista kategorii
        </Link>
        <Link to="Page5" className="button">
          Tworzenie nowego produktu i kategorii
        </Link>
      </nav>
    </header>
  );
};

export default Header;
