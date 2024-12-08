import React from 'react';
import styles from '../styles/components/WhyChooseUs.module.css';

const WhyChooseUs = () => {
  return (
    <div id="whychooseus" className={styles.container}>
      <div className={styles.headingSection}>
        <h1 className={styles.heading}>Why Choose Us?</h1>
        <p className={styles.subheading}>
          Here’s what sets us apart and why we are the right choice for you.
        </p>
      </div>
      <div className={styles.features}>
        <div className={styles.featureCard}>
          <h2>Customer-Centric Design</h2>
          <p>
            We prioritise design over anything to ensure all our products are a
            true reflection of our customer’s desires.
          </p>
        </div>
        <div className={styles.featureCard}>
          <h2>Innovative Solutions</h2>
          <p>
            We love to swim against the tide to ensure we stay ahead of the
            market trends.
          </p>
        </div>
        <div className={styles.featureCard}>
          <h2>Social Impact</h2>
          <p>
            We stay committed to positively impacting communities and the
            environment.
          </p>
        </div>
        <div className={styles.featureCard}>
          <h2>Team Excellence</h2>
          <p>
            We are a team that is courageous, dedicated, passionate and
            committed to delivering high-quality work through innovative
            products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
