import React from 'react';
import styles from './SignupForm.module.css';

const SignupForm = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2 className={styles.title}>Sign Up</h2>
        <div className={styles.field}>
          <label htmlFor="firstName" className={styles.label}>First Name</label>
          <input type="text" id="firstName" placeholder="Enter your first name" className={styles.input} />
        </div>
        <div className={styles.field}>
          <label htmlFor="lastName" className={styles.label}>Last Name</label>
          <input type="text" id="lastName" placeholder="Enter your last name" className={styles.input} />
        </div>
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <div className={styles.verifyContainer}>
            <input type="email" id="email" placeholder="Enter your email" className={styles.input} />
            <button type="button" className={styles.verifyButton}>Verify</button>
          </div>
        </div>
        <div className={styles.field}>
          <label htmlFor="mobile" className={styles.label}>Mobile</label>
          <div className={styles.verifyContainer}>
            <input type="tel" id="mobile" placeholder="Enter your mobile number" className={styles.input} />
            <button type="button" className={styles.verifyButton}>Verify</button>
          </div>
        </div>
        <div className={styles.field}>
          <label htmlFor="instagram" className={styles.label}>Instagram</label>
          <div className={styles.verifyContainer}>
            <input type="text" id="instagram" placeholder="@yourhandle" className={styles.input} />
            <button type="button" className={styles.verifyButton}>Verify</button>
          </div>
        </div>
        <button type="submit" className={styles.submitButton}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
