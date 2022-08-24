import React from "react";
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="globalBar">
      <div className="logo">Logo</div>
      <nav className="nav">
        <Link to='Page1' className="button">Page1</Link>
        <Link to='Page2' className="button">Page2</Link>
        <Link to='Page3' className="button">Page3</Link>
        <Link to='Page4' className="button">Page4</Link>
        
      </nav>
    </header>
  );
};

export default Header;
