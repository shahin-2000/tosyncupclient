import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import styles from '../styles/components/SignupForm.module.css';


const SignupForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        instagram: ''
      });
      const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          console.log('Response:>>>>>1', formData);

          const response = await axios.post('https://tosyncupserver.onrender.com/signup', formData);
          console.log('Response:>>>>>2', response.data);
          // You can add additional logic here, like redirecting or showing a success message
        } catch (error) {
          console.error('Error sending data:', error);
          console.log('formdata>>>>>',formData);

          // Handle error appropriately, e.g., show an error message
        }
      };    
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Sign Up</h2>
        <div className={styles.field}>
          <label htmlFor="firstName" className={styles.label}>First Name</label>
          <input type="text" id="firstName" placeholder="Enter your first name" className={styles.input} value={formData.firstName} onChange={handleChange}/>
        </div>
        <div className={styles.field}>
          <label htmlFor="lastName" className={styles.label}>Last Name</label>
          <input type="text" id="lastName" placeholder="Enter your last name" className={styles.input} value={formData.lastName} onChange={handleChange} />
        </div>
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <div className={styles.verifyContainer}>
            <input type="email" id="email" placeholder="Enter your email" className={styles.input} value={formData.email} onChange={handleChange}  />
            <button type="button" className={styles.verifyButton}>Verify</button>
          </div>
        </div>
        <div className={styles.field}>
          <label htmlFor="mobile" className={styles.label}>Mobile</label>
          <div className={styles.verifyContainer}>
            <input type="tel" id="mobile" placeholder="Enter your mobile number" className={styles.input} value={formData.mobile} onChange={handleChange}/>
            <button type="button" className={styles.verifyButton}>Verify</button>
          </div>
        </div>
        <div className={styles.field}>
          <label htmlFor="instagram" className={styles.label}>Instagram</label>
          <div className={styles.verifyContainer}>
            <input type="text" id="instagram" placeholder="@yourhandle" className={styles.input} value={formData.instagram} onChange={handleChange} />
            <button type="button" className={styles.verifyButton}>Verify</button>
          </div>
        </div>
        <button type="submit" className={styles.submitButton}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
