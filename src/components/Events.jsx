import React from 'react';
import styles from '../styles/components/Events.module.css';

const Events = () => {
  return (
    <section id="events" className={styles.events}>
      <h2>Exclusive Events for Influencers</h2>
      <p>
        Dive into extraordinary experiences tailored for influencers. From networking galas to private meetups, 
        our events are designed to help you connect, collaborate, and grow your personal brand.
      </p>
      
      {/* Event Cards Section */}
      <div className={styles.eventCards}>
        <div className={styles.card}>
          <img src="https://cdn2.allevents.in/thumbs/thumb6674db2283451.jpg" alt="Networking Gala" />
          <div className={styles.cardContent}>
            <h3>Networking Gala</h3>
            <p>
              Meet like-minded influencers, industry leaders, and potential collaborators in an elegant setting.
            </p>
            <button>View Details</button>
          </div>
        </div>

        <div className={styles.card}>
          <img src="https://cdn.prod.website-files.com/5e9aa66fd3886aa2b4ec01ca/658e256eebf04cbc8c591739_creative%20workshops%20(1).webp" alt="Creative Workshop" />
          <div className={styles.cardContent}>
            <h3>Creative Workshop</h3>
            <p>
              Enhance your content creation skills with hands-on sessions from top creators and mentors.
            </p>
            <button>View Details</button>
          </div>
        </div>

        <div className={styles.card}>
          <img src="https://suntrypholidays.com/uploads/0000/7/2024/07/14/fotografiaw10000f21849.jpg" alt="Exclusive Retreat" />
          <div className={styles.cardContent}>
            <h3>Exclusive Retreat</h3>
            <p>
              Unwind and recharge at our luxury retreat while forming meaningful connections with peers.
            </p>
            <button>View Details</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
