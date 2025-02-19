"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import "../../styles/navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Add or remove blur class on body when menu is toggled
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Hamburger Button */}
        <button className={`navbar__toggle ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span className="navbar__toggle-icon"></span>
        </button>

        {/* Language Selector */}
        <div className="navbar__language">
          <select>
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>
        </div>
      </div>

      {/* Side Menu */}
      <div className={`navbar__links ${isOpen ? "navbar__links--open" : ""}`}>
        <Link href="/menu" onClick={toggleMenu}>Menu</Link>
        <Link href="/about" onClick={toggleMenu}>About Us</Link>
        <Link href="/contact" onClick={toggleMenu}>Contact</Link>
        <Link href="/reserve" onClick={toggleMenu}>Reserve</Link>
      </div>
    </nav>
  );
};

export default Navbar;