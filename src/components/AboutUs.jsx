import React from 'react';
import styles from '../styles/components/AboutUs.module.css'; // Assuming you're using CSS modules for styling

const AboutUs = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.heroSection}>
        <h1 className={styles.heroHeading}>About Us</h1>
      </div>
      <div className={styles.contentSection}>
        <p className={styles.description}>
          <strong>To Sync Up</strong> is a premium platform tailored for high-value individuals—celebrities, high-net-worth individuals (HNWIs), and industry leaders—to discover meaningful connections globally. 
        </p>
        <p className={styles.description}>
          Whether for dating, networking, or building long-term collaborations, we redefine how extraordinary people meet. Our platform ensures authenticity, privacy, and exclusivity for those who value depth over the ordinary.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
