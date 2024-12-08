import React from 'react';
import styles from '../styles/components/Products.module.css';

const Products = () => {
  return (
    <div className={styles.container} id="ourproducts">
      <div className={styles.headingSection}>
        <h1 className={styles.heading}>Our Products / Services</h1>
        <p className={styles.subheading}>
          Discover our innovative offerings designed to enhance your experience.
        </p>
      </div>
      <div className={styles.products}>
        <div className={styles.productCard}>
          <img src="/assets/images/dating.webp" alt="Consumer Products" className={styles.productImage} />
          <div className={styles.contentOverlay}>
            <h2>Consumer Products</h2>
            <p>
              Innovative solutions across categories that enhance convenience, wellness, and lifestyle. We are soon launching <strong>'Let's Sync Up'</strong>, a product that is forever going to change the dating experience.
            </p>
            <a className={styles.ctaButton} href='https://tosyncup.com/launching-soon' rel='noreferrer' target='_blank'>Become Member</a>
          </div>
        </div>
        <div className={styles.productCard}>
          <img src="/assets/images/fashion.jpg" alt="Fashion" className={styles.productImage} />
          <div className={styles.contentOverlay}>
            <h2>Fashion</h2>
            <p>
              Tailored offerings that cater to customer needs and enrich experiences. A fresh new high-quality thread is being spun to create a sought-after clothing brand, launching in the summer of 2025.
            </p>
          </div>
        </div>
        <div className={styles.productCard}>
          <img src="/assets/images/technology.avif" alt="Technology Integration" className={styles.productImage} />
          <div className={styles.contentOverlay}>
            <h2>Technology Integration</h2>
            <p>
              Leveraging advanced technologies to create intuitive and user-friendly solutions. We are working on a user-generated content platform that helps brands understand product users' sentiments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
