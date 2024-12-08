import React, { useEffect, useState } from 'react';
import styles from '../styles/components/Hero.module.css';
import { FaChevronDown } from 'react-icons/fa'; // Importing a scroll down icon

const Hero = () => {
  const [displayedWords, setDisplayedWords] = useState([]);

  useEffect(() => {
    const words = ["Just", "One", "More", "Step"];
    const timer = setInterval(() => {
      setDisplayedWords((prev) => {
        if (prev.length < words.length) {
          return [...prev, words[prev.length]];
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 500);

    return () => clearInterval(timer);
  }, []);

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
          {displayedWords.map((word, index) => (
            <span key={index} className={styles.word}>
              {word}{" "}
            </span>
          ))}
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
