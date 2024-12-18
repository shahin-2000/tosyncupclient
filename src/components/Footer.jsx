import React from "react";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import styles from "../styles/components/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© 2024 JOMS Commerce & Technologies Private Limited. All Rights Reserved.</p>
        <ul className={styles.links}>
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms-of-service">Terms of Service</a>
          </li>
        </ul>
        <div className={styles.social}>
          <a
            href="https://linkedin.com/company/justonemorestep"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a href="mailto:hello@tosyncup.in">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
