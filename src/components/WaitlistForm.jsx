import React, { useEffect,useState } from 'react';
import styles from '../styles/WaitlistForm.module.css';

const WaitlistForm = ({ isOpen, onClose }) => {
    const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    profession: ''
  });
  useEffect(() => {
    if (isOpen) {
      // Small delay to trigger animation
      setTimeout(() => setIsActive(true), 0);
    } else {
      setIsActive(false);
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (

    <div className={`${styles.overlay} ${isActive ? styles.active : ''}`}>
      <div className={`${styles.modal} ${isActive ? styles.active : ''}`}>
       
        <button className={styles.closeButton} onClick={onClose}>&times;</button>
        <h2>Join Our Waitlist</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input
              type="text"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="text"
              placeholder="Profession"
              value={formData.profession}
              onChange={(e) => setFormData({...formData, profession: e.target.value})}
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default WaitlistForm;
