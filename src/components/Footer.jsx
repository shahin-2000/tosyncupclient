import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import styles from '../styles/components/Footer.module.css';

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        {/* About Section */}
        <div className={styles.section}>
          <h3>JOMS</h3>
          <p>
          JOMS was born out of the shared vision of passionate individuals who believe in the power of innovation to make a difference.
          </p>
        </div>

        {/* Newsletter Section */}
        <div className={styles.section}>
          <h3>Subscribe to Our Newsletter</h3>
          <p>Get the latest updates, tips, and insights directly to your inbox.</p>
          <form className={styles.form}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Quick Links Section */}
        <div className={styles.section}>
          <h3>Quick Links</h3>
          <ul className={styles.links}>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className={styles.section}>
          <h3>Connect with Us</h3>
          <div className={styles.social}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="mailto:support@joms.in">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className={styles.copy}>
        <p>© 2024 JOMS. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
