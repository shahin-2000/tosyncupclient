import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import styles from '../styles/Features.module.css';
import { FaLock, FaMapMarkerAlt, FaGift, FaUsers, FaBell, FaComments } from 'react-icons/fa';

const features = [
  {
    title: 'Secure Connections',
    icon: <FaLock />,
    description: 'Private and trusted communication channels designed to ensure confidentiality and safety.',
    details: 'End-to-end encryption and advanced authentication protocols.',
    action: 'Learn More',
  },
  {
    title: 'Discover Local Influencers',
    icon: <FaMapMarkerAlt />,
    description: 'Find like-minded individuals and influencers in your vicinity.',
    details: 'Get personalized recommendations based on your interests.',
    action: 'Explore Now',
  },
  {
    title: 'Gifting Options',
    icon: <FaGift />,
    description: 'Send thoughtful gifts to strengthen connections.',
    details: 'Choose from a curated list of premium gifting options.',
    action: 'View Gifts',
  },
  {
    title: 'Community Events',
    icon: <FaUsers />,
    description: 'Exclusive meetups, galas, and networking events for members.',
    details: 'Expand your network with curated, member-only gatherings.',
    action: 'Join Events',
  },
  {
    title: 'Personalized Matching',
    icon: <FaUsers />,
    description: 'Advanced algorithms to connect you with people who share your passions and interests.',
    details: 'Enjoy personalized match suggestions for networking or dating opportunities.',
    action: 'Find Your Match',
  },
  {
    title: 'Privacy Control',
    icon: <FaLock />,
    description: 'Full control over your data and privacy settings to keep your information secure.',
    details: 'Easily manage who can see your profile and what information is shared.',
    action: 'Manage Privacy',
  },
  {
    title: 'Exclusive Content',
    icon: <FaUsers />,
    description: 'Access to premium content such as workshops, tutorials, and expert sessions.',
    details: 'Enhance your skills and knowledge with exclusive member-only resources.',
    action: 'Explore Content',
  },
  {
    title: 'Real-Time Notifications',
    icon: <FaBell />,
    description: 'Stay updated with instant notifications for events, messages, and special offers.',
    details: 'Never miss out on important updates or opportunities to engage.',
    action: 'Check Notifications',
  },
  {
    title: 'Feedback and Support',
    icon: <FaComments />,
    description: 'Access a dedicated support team ready to assist you with any questions or issues.',
    details: 'Provide feedback and suggestions to help improve your experience.',
    action: 'Contact Support',
  },
];

const Features = () => {
  return (
    <div className={styles.swiperContainer}>
      <h2 className={styles.heading}>Our Premium Features</h2>
      <p className={styles.subheading}>
        Discover the unique features that elevate your experience.
      </p>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
        }}
        // className={styles.swiperSlide}
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <div className={styles.featureCard}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <p className={styles.details}>{feature.details}</p>
              <button className={styles.actionButton}>{feature.action}</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Features;




