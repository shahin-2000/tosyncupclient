import React from 'react';
import styles from '../../styles/pages/main/Hero.module.css';
// import { FaChevronDown } from 'react-icons/fa';
const Hero = () => {

  // const handleScroll = () => {
  //   // Scroll to the next section smoothly
  //   const nextSection = document.getElementById("aboutus"); // Replace with your next section ID
  //   if (nextSection) {
  //     nextSection.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>
          ToSyncUp
        </h1>
        <h5>Innovating for Global Impact.</h5>
        <p>
          Transforming Lives Through Meaningful Consumer Experiences
        </p>
        
      </div>
      {/* <div className={styles.scrollDown} onClick={handleScroll}>
        <FaChevronDown size={20} color="#ffffff" />
      </div> */}
    </section>
  );
};

export default Hero;
