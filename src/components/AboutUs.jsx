import React from 'react';
import { Fade } from 'react-awesome-reveal';
import styles from '../styles/components/AboutUs.module.css';
import { features } from '../utils/constants';

const AboutUs = () => {
  return (
    <div id="aboutus" className={styles.container}>
      <Fade triggerOnce direction="up">
        <h2 className={styles.heading}>About Us</h2>
        <p className={styles.subheading}>
          JOMS is dedicated to creating innovative solutions that bring people together, enhancing their experiences in meaningful ways.
        </p>
      </Fade>
      <div className={styles.cardWrapper}>
        {features.map((feature, index) => (
          <Fade
            key={index}
            triggerOnce
            direction={index % 2 === 0 ? 'left' : 'right'}
          >
            <div className={styles.card}>
              <img
                src={feature.img}
                alt={feature.title}
                className={styles.image}
              />
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
              <p className={styles.details}>{feature.details}</p>
              <button className={styles.button}>{feature.action}</button>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
