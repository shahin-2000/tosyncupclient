import React from 'react';
import { Fade } from 'react-awesome-reveal'; // Import Fade for animation
import { ourStory } from '../utils/constants';
import styles from '../styles/components/Story.module.css';

const Story = () => {
  return (
    <section id="ourstory" className={styles.ourStory}>
      <Fade duration={2000}>
        <h1 className={styles.storyTitle}>{ourStory[0].title}</h1>
      </Fade>
      <Fade duration={2000} delay={500}>
        <div className={styles.storyContainer}>
          <div className={styles.imageWrapper}>
            <img
              src="/assets/images/story.jpg"
              alt="Our Story"
              className={styles.storyImage}
            />
          </div>
          <div className={styles.textWrapper}>
            <p className={styles.storyText}>
              {ourStory[0].description}
            </p>
            <button className={styles.ctaButton}>
              Learn More
            </button>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Story;
