import React, { useEffect, useState } from 'react';
import styles from '../styles/Hero.module.css';

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

  return (
    <section id="hero" className={styles.hero}>
      {/* Video Background */}
      <video autoPlay loop muted className={styles.videoBackground}>
        <source src="https://cdn.pixabay.com/video/2019/09/19/27018-361798566_tiny.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.overlay}></div>

      <div className={styles.heroContent}>
        <h1>
          {displayedWords.map((word, index) => (
            <span key={index} className={styles.word}>
              {word}{" "}
            </span>
          ))}
        </h1>
        <h5>Connect Securely. Network Effortlessly. Be Exclusive.</h5>
        <p>
          Join a community of elite influencers to expand your connections and
          explore opportunities.
        </p>
        <div className={styles.ctaButtons}>
          <a href="#playstore" className={styles.cta}>
            <img
              width="250" // Adjust as needed
              height="80"
              src="/assets/images/play-store.png" alt="Download on Playstore" className={styles.ctaImage} /> </a>
          <a href="#appstore" className={styles.cta}>
            <img
              width="250" // Adjust as needed
              height="80"
              src="https://static.vecteezy.com/system/resources/previews/012/871/374/non_2x/app-store-download-button-in-white-colors-download-on-the-apple-app-store-free-png.png" alt="Download on Appstore" className={styles.ctaImage} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
