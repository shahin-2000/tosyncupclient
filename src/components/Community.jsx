import React from 'react';
import styles from '../styles/Community.module.css';

const Community = () => {
  return (
    <section id="community" className={styles.community}>
      <h2>Secure and Private Community</h2>
      <p>We prioritize your privacy with advanced security measures and encrypted communication channels.</p>
      <img src="/assets/shield.png" alt="Privacy Shield" className={styles.image} />
    </section>
  );
};

export default Community;
