import React from 'react';
import { Fade } from 'react-awesome-reveal'; 
import { FaGlobe, FaHandshake, FaLightbulb } from 'react-icons/fa'; 
import styles from '../styles/components/Vision.module.css';

const roadmapData = [
  {
    icon: <FaGlobe />,
    text: "Expanding into global markets.",
  },
  {
    icon: <FaHandshake />,
    text: "Partnering with like-minded organizations to amplify social impact.",
  },
  {
    icon: <FaLightbulb />,
    text: "Investing in cutting-edge technologies to enhance our offerings.",
  },
];

const Vision = () => {
  return (
    <section id="ourvision" className={styles.roadmapSection}>
      <h1 className={styles.title}>Our Vision</h1>
      <div className={styles.roadmap}>
        {roadmapData.map((step, index) => (
          <Fade key={index} duration={1000} delay={index * 500} direction={index % 2 === 0 ? "left" : "right"}>
            <div className={styles.step}>
              <div className={styles.icon}>{step.icon}</div>
              <p className={styles.text}>{step.text}</p>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default Vision;
