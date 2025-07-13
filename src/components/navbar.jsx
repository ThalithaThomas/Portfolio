import { Link as RouterLink } from "react-router-dom";

import "./navbar.css";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const handleClickMenu = () => {
    setClick(false);
  };

  return (
    <nav className="navbar" id="navbar">
      <h2>Thalitha sambo</h2>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <RouterLink to="/" onClick={handleClickMenu}>
            Home
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/aboutme" onClick={handleClickMenu}>
            About
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/skills" onClick={handleClickMenu}>
            Skills
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/projects" onClick={handleClickMenu}>
            Project
          </RouterLink>
        </li>
        <li>
          <button className="sayHi">
            <RouterLink to="/contact" onClick={handleClickMenu}>
              Say Hello
            </RouterLink>
          </button>
        </li>
      </ul>
      <div className="menu" onClick={handleClick}>
        {click ? <FaTimes className="faBars" /> : <FaBars className="faBars" />}
      </div>
    </nav>
  );
};

export default Navbar;
