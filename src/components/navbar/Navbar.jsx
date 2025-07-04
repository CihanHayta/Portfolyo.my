import React, { useState } from "react";
import styles from "./Navbar.module.css";

import menuIcon from "/assets/nav/menuIcon.png";
import closeIcon from "/assets/nav/closeIcon.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        <span className={styles.surname}>Cihan Hayta</span>
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? closeIcon : menuIcon}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">Hakkımda</a>
          </li>
          <li>
            <a href="#experience">Tecrübe</a>
          </li>
          <li>
            <a href="#projects">Projeler</a>
          </li>
          <li>
            <a href="#contact">İletişim</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
