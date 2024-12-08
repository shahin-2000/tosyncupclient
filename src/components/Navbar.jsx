import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import WaitlistForm from './WaitlistForm';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleWaitlistClick = () => {
    setIsWaitlistOpen(true);

  };

  return (
    <>
    <nav className={styles.navbar}>
      <div className={styles.logo}>JOMS</div>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#community">Community</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#footer">Contact</a></li>
        <li><button className={styles.joinButton} onClick={handleWaitlistClick}>Join the Waitlist</button></li>
      </ul>
    </nav>
    <WaitlistForm 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
      </>
    
  );
};

export default Navbar;
