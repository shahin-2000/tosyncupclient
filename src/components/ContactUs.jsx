import React from 'react';
import styles from '../styles/components/ContactUs.module.css';

const ContactUs = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.heroSection}>
        <h1 className={styles.heroHeading}>Contact Us</h1>
        <p className={styles.heroSubheading}>We'd love to hear from you!</p>
      </div>
      <div className={styles.contactContent}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <div className={styles.addressBox}>
            <h2>Address</h2>
            <p>
              #592/2/635, NGEF Layout, <br />
              Nagarbhavi, Bangalore North, <br />
              Bangalore-560072.
            </p>
          </div>
          <div className={styles.emailBox}>
            <h2>Email</h2>
            <a href="mailto:info@letsyncup.com">info@letsyncup.com</a>
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          <h2>Get In Touch</h2>
          <form>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className={styles.inputField}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className={styles.inputField}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className={styles.textArea}
            ></textarea>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
