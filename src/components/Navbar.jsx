import React, { useState } from 'react';
import styles from '../styles/components/Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navLinks } from '../utils/constants';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>ToSyncUp</div>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
          {navLinks.map(link => (
            <li key={link.id} onClick={toggleMenu}>
              <a href={`#${link.id}`} className={styles.link}>{link.title}</a>
            </li>
          ))}
          <li>
            <a className={styles.joinButton} href='/signup' rel="noreferrer" target='_blank' color='#fff'>Join the Waitlist</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
