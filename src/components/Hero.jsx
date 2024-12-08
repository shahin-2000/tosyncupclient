import React from 'react';
import styles from '../styles/components/Hero.module.css';
import { FaChevronDown } from 'react-icons/fa'; // Importing a scroll down icon

const Hero = () => {

  const handleScroll = () => {
    // Scroll to the next section smoothly
    const nextSection = document.getElementById("aboutus"); // Replace with your next section ID
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>
          ToSyncUp
        </h1>
        <h5>Innovating for Global Impact.</h5>
        <p>
          Transforming Lives Through Meaningful Consumer Experiences
        </p>
        
      </div>
      <div className={styles.scrollDown} onClick={handleScroll}>
        <FaChevronDown size={20} color="#ffffff" />
      </div>
    </section>
  );
};

export default Hero;
