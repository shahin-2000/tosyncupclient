import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import styles from '../styles/Testimonials.module.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Alex Carter',
      role: 'Lifestyle Influencer',
      feedback: 'JOMS has been a game-changer for connecting with brands and other influencers. The events are top-notch, and the privacy is unparalleled!',
      avatar: 'https://m.media-amazon.com/images/M/MV5BNTA0MzI4ZDUtNTBmOC00NDE0LTljMTEtMDI1ZmU3YmUxNzkxXkEyXkFqcGc@._V1_.jpg',
    },
    {
      name: 'Sophia Green',
      role: 'Travel Blogger',
      feedback: 'This platform has opened doors to so many opportunities. The community is incredibly supportive, and I feel safe sharing my journey here.',
      avatar: 'https://media.licdn.com/dms/image/v2/C5603AQHT_MHFjKQbaw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1668127181614?e=2147483647&v=beta&t=xkW-fAgo6yZpY_PNQWu6c525jf9nKAdr-RQ_JXGqgBs',
    },
    {
      name: 'Michael Lee',
      role: 'Tech Influencer',
      feedback: 'From networking to meaningful collaborations, JOMS provides everything an influencer needs to grow in a secure environment.',
      avatar: 'https://m.media-amazon.com/images/M/MV5BMjRmZjg4MTgtYjU0ZS00M2E3LTkxM2YtYWZlNzQ1NmNlYzA5XkEyXkFqcGc@._V1_.jpg',
    },
  ];

  return (
    <section id="testimonials" className={styles.testimonials}>
      <h2>What Our Members Say</h2>
      <p>Discover how JOMS has transformed the lives and careers of our elite influencers.</p>
      <div className={styles.testimonialGrid}>
        {testimonials.map((t, index) => (
          <div key={index} className={styles.testimonialCard}>
            <FaQuoteLeft className={styles.quoteIcon} />
            <img src={t.avatar} alt={t.name} className={styles.avatar} />
            <p>{t.feedback}</p>
            <h3>{t.name}</h3>
            <span>{t.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
