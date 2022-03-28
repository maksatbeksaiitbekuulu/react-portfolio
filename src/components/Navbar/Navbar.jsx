import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../components/Navbar/group1.png";

import "./navbar.scss";
import menuIcon from "../../images/menu.svg";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const showMenu = () => {
    setMenuActive(!menuActive);
  };
  const SuperLink = (props) => (
    <NavLink className="navbar__menu-link" to={props.to} onClick={showMenu}>
      {props.text}
    </NavLink>
  );

  return (
    <nav className="navbar">
      <div className="container navbar__container">
        <Link to="/" className="navbar__logo">
          <img src={logo} alt="" />
        </Link>
        <button onClick={showMenu} className="navbar__toggle">
          <img src={menuIcon} alt="asdf" />
        </button>

        <div
          className={
            menuActive ? "navbar__menu navbar__menu--show" : "navbar__menu"
          }
        >
          <SuperLink to="/" text="Home" />
          <SuperLink to="/works" text="Works" />
          <SuperLink to="/blog" text="Blog" />
          <SuperLink to="/contact" text="Contacts" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
