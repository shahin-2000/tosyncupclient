import React, { useState } from 'react';
import axios from 'axios';
import styles from '../../styles/pages/auth/SignupForm.module.css';
import { API_BASE_URL } from '../../utils/constants';

// const API_BASE_URL = 'http://localhost:8000';
const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    otpphone: '',
    email: '',
    otpEmail: '',
    instagram: '',
    questionAnswer: '',
  });
  const [activeTab, setActiveTab] = useState(1);
  const [progress, setProgress] = useState(25);
  const [otpRequestStatus, setOtpRequestStatus] = useState({ phone: false, email: false });
  const [otpVerifyStatus, setOtpVerifyStatus] = useState({ phone: false, email: false });
  const [eligibilityStatus, setEligibilityStatus] = useState(''); // Pending, Success, Failure
  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleOtpRequest = async (type) => {
    try {
      const endpoint =
        type === 'phone'
          ? `${API_BASE_URL}/api/verify/send-phone-otp`
          : `${API_BASE_URL}/api/verify/send-email-otp`;

      const payload = type === 'phone' ? { phone: formData.phone } : { email: formData.email };
      console.log(payload, " ; payload")
      const res = await axios.post(endpoint, payload);
      console.log('otp: ', res.data.otp);
      setOtpRequestStatus({ ...otpRequestStatus, [type]: true });
      alert(`OTP sent to your ${type}!`);
    } catch (error) {
      console.error(`Error sending OTP for ${type}:`, error);
    }
  };

  const handleOtpVerification = async (type) => {
    try {
      const endpoint =
        type === 'phone'
          ? `${API_BASE_URL}/api/verify/verify-phone-otp`
          : `${API_BASE_URL}/api/verify/verify-email-otp`;

      const payload =
        type === 'phone'
          ? { phone: formData.phone, otp: formData.otpphone }
          : { email: formData.email, otp: formData.otpEmail };

          setOtpVerifyStatus({ ...otpVerifyStatus, [type]: true });
      await axios.post(endpoint, payload);
      alert(`${type} verified successfully!`);
    } catch (error) {
      console.error(`Error verifying ${type} OTP:`, error);
    }
  };

  const handleEligibilityCheck = async () => {
    const username = formData.instagram.trim();
    if (!username) {
      alert('Please enter a valid Instagram username.');
      return;
    }

    setLoading(true);
    setEligibilityStatus(''); // Reset status

    try {
      const response = await axios.post(`${API_BASE_URL}/api/otp/verify-instagram`, { username });
      if (response.data?.eligible) {
        setEligibilityStatus('Success'); // Eligible
        alert(`${username} is eligible!`);
      } else {
        setEligibilityStatus('Failure'); // Not Eligible
        alert(`${username} is not eligible.`);
      }
    } catch (error) {
      setEligibilityStatus('Failure'); // Error Handling
      alert('There was an error checking eligibility. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleNextTab = () => {
    if (activeTab < 4) {
      setActiveTab(activeTab + 1);
      setProgress((prev) => prev + 25);
    }
  };

  const handlePreviousTab = () => {
    if (activeTab > 1) {
      setActiveTab(activeTab - 1);
      setProgress((prev) => prev - 25);
    }
  };

  const isNextEnabled =
    (activeTab === 1 && otpVerifyStatus.phone && formData.firstName && formData.lastName && formData.phone) ||
    (activeTab === 2 && otpVerifyStatus.email && formData.email) ||
    (activeTab === 3 && eligibilityStatus === "Success") ||
    (activeTab === 4 && formData.questionAnswer);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE_URL}/api/auth/signup`, formData);
      alert('Sign-up successful!');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.progressBar}>
          <div style={{ width: `${progress}%` }} className={styles.progress}></div>
        </div>

        {activeTab === 1 && (
          <>
            <h2 className={styles.title}>Verify Phone</h2>
            <div className={styles.field}>
              <label htmlFor="firstName" className={styles.label}>First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                className={styles.input}
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="lastName" className={styles.label}>Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your last name"
                className={styles.input}
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="phone" className={styles.label}>Mobile Number</label>
              <div className={styles.otpContainer}>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your mobile number"
                  className={styles.input}
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={otpVerifyStatus.phone}
                  required
                />
                {!otpVerifyStatus.phone && <button
                  type="button"
                  className={styles.otpButton}
                  onClick={() => handleOtpRequest('phone')}
                >
                  Send OTP
                </button>}
              </div>
            </div>
            {otpRequestStatus.phone && (
              <div className={styles.field}>
                <label htmlFor="otpphone" className={styles.label}>Enter OTP</label>
                <div className={styles.otpContainer}>
                  <input
                    type="text"
                    id="otpphone"
                    placeholder="Enter OTP"
                    className={styles.input}
                    value={formData.otpphone}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className={styles.otpButton}
                    onClick={() => handleOtpVerification('phone')}
                  >
                    Verify
                  </button>
                </div>
              </div>
            )}
            {otpVerifyStatus.phone && (
              <div className={styles.successMessage}>phone Verification Successful ✅</div>
            )}
          </>
        )}

        {activeTab === 2 && (
          <>
            <h2 className={styles.title}>Verify Email</h2>
            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <div className={styles.otpContainer}>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className={styles.input}
                  value={formData.email}
                  onChange={handleChange}
                  disabled={otpVerifyStatus.email}
                  required
                />
                {!otpVerifyStatus.email && <button
                  type="button"
                  className={styles.otpButton}
                  onClick={() => handleOtpRequest('email')}
                >
                  Send OTP
                </button>}
              </div>
            </div>
            {otpRequestStatus.email && (
              <div className={styles.field}>
                <label htmlFor="otpEmail" className={styles.label}>Enter OTP</label>
                <div className={styles.otpContainer}>
                  <input
                    type="text"
                    id="otpEmail"
                    placeholder="Enter OTP"
                    className={styles.input}
                    value={formData.otpEmail}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className={styles.otpButton}
                    onClick={() => handleOtpVerification('email')}
                  >
                    Verify
                  </button>
                </div>
              </div>
            )}
            {otpVerifyStatus.email && (
              <div className={styles.successMessage}>Email Verification Successful ✅</div>
            )}
          </>
        )}

        {activeTab === 3 && (
          <>
            <h2 className={styles.title}>Verify Instagram</h2>
            <div className={styles.field}>
              <label htmlFor="instagram" className={styles.label}>
                Instagram Username (should be a public profile)
              </label>
              <div className={styles.inputWithButton}>
                <input
                  type="text"
                  id="instagram"
                  placeholder="@yourhandle"
                  className={styles.input}
                  value={formData.instagram}
                  onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                  disabled={eligibilityStatus === "Success"}
                  required
                />
                {eligibilityStatus !== "Success" && <button
                  type="button"
                  className={styles.verifyButton}
                  onClick={handleEligibilityCheck}
                  disabled={!formData.instagram.trim() || loading}
                >
                  {loading ? 'Checking...' : 'Check Eligibility'}
                </button> }
              </div>
              {eligibilityStatus && (
                <p
                  className={
                    eligibilityStatus === 'Success'
                      ? styles.successMessage
                      : styles.errorMessage
                  }
                >
                  {eligibilityStatus === 'Success'
                    ? 'Verification successful!'
                    : 'Verification failed. Please try again.'}
                </p>
              )}
            </div>
          </>
        )}

        {activeTab === 4 && (
          <>
            <h2 className={styles.title}>Questions</h2>
            <div className={styles.field}>
              <label htmlFor="questionAnswer" className={styles.label}>
                Why are you signing up?
              </label>
              <textarea
                id="questionAnswer"
                placeholder="Explain briefly"
                className={styles.textarea}
                value={formData.questionAnswer}
                onChange={handleChange}
                required
              />
            </div>
          </>
        )}

        <div className={styles.navigation}>
          <div>
            {activeTab < 4 && (
              <button
                type="button"
                className={styles.navButton}
                disabled={!isNextEnabled}
                onClick={handleNextTab}
              >
                Next
              </button>
            )}
            {activeTab === 4 && (
              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            )}
            {activeTab > 1 && (
              <button
                type="button"
                className={styles.prevButton}
                onClick={handlePreviousTab}
              >
                Previous
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
