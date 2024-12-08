import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ClipLoader } from 'react-spinners';
import styles from '../styles/components/Preloader.module.css';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoadingComplete(true);
          return 100;
        }
        return prev + 10;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className={styles.preloader}
      initial={{ opacity: 1 }}
      animate={loadingComplete ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {!loadingComplete && (
        <>
          <motion.div
            initial={{ y: '-50%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className={styles.title}>Welcome to JOMS</h1>
          </motion.div>
          <div className={styles.spinnerContainer}>
            <ClipLoader color="#ff9671" size={50} />
          </div>
          <div className={styles.progressBarContainer}>
            <div
              className={styles.progressBar}
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className={styles.loadingText}>
            {progress < 100 ? `Loading ${progress}%` : 'Complete!'}
          </p>
        </>
      )}
    </motion.div>
  );
};

export default Preloader;
