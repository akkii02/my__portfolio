import React, { useState } from 'react';
import styles from './Navbar.module.css';
// import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <h1 className={styles.navbarTitle}>Akshay Sable</h1>
        <button className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.hamburgerLines}></div>
          <div className={styles.hamburgerLines}></div>
          <div className={styles.hamburgerLines}></div>
        </button>
        <ul className={`${styles.navbarMenu} ${isMenuOpen ? styles.navbarMenuOpen : ''}`}>
          <li className={styles.navbarMenuItem}>
            <a href="#home" className={styles.navbarMenuLink}>
              Home
            </a>
          </li>
          <li className={styles.navbarMenuItem}>
            <a href="#about" className={styles.navbarMenuLink}>
              About Me
            </a>
          </li>
          <li className={styles.navbarMenuItem}>
            <a href="#skill" className={styles.navbarMenuLink}>
              Skill
            </a>
          </li>
          <li className={styles.navbarMenuItem}>
            <a href="#project" className={styles.navbarMenuLink}>
              Projects
            </a>
          </li>
          <li className={styles.navbarMenuItem}>
            <a href="#contact" className={styles.navbarMenuLink}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
