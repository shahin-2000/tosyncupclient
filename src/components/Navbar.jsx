import React, { useState } from 'react';
import styles from '../styles/components/Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navLinks } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleClick = (route) => {
    setIsMenuOpen(prev => !prev);
    navigate(route);
  }

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>ToSyncUp</div>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
          {navLinks.map(link => (
            <li key={link.id} onClick={() => handleClick(link.route)}>
              <a href={`${link.route}`} className={styles.link}>{link.title}</a>
            </li>
          ))}
          <li>
            <a className={styles.joinButton} href='/signup'>Join the Waitlist</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
