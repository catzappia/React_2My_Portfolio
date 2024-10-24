import { Link } from 'react-router-dom';
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        {/* Logo */}

        <div className={`title ${menuOpen ? "open" : ""}`}>
          Catherine Zappia
        </div>

        {/* Hamburger menu (hidden by default)*/}

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>

          <span></span>

          <span></span>
        </div>

        {/* Nav Links */}

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/portfolio" onClick={closeMenu}>
              Portfolio
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>

          <li>
            <Link to="/resume" onClick={closeMenu}>
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
