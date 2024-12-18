import React from 'react';
import styles from '../styles/components/Hero.module.css';
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
        <h5>Meet the Highly Admired Beyond Borders</h5>
        <p>
        We created To Sync Up to transform how highly admired individuals find and build meaningful connections. It’s not just about meeting, it’s about finding someone who truly understands your world.
        </p>
        
      </div>
      {/* <div className={styles.scrollDown} onClick={handleScroll}>
        <FaChevronDown size={20} color="#ffffff" />
      </div> */}
    </section>
  );
};

export default Hero;
