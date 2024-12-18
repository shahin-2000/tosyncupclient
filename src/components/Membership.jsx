// PricingCards.js
import React from "react";
import styles from "../styles/components/Membership.module.css";

const Membership = () => {
  return (
    <div className={styles.pricingContainer}>
      <h1>Get Started with Exclusive Memberships Today!</h1>
      <p>
        All plans come with premium benefits tailored to connect and elevate
        your experience.
      </p>

      <div className={styles.cards}>
        <div className={styles.card}>
          <h2>$99/year</h2>
          <h3>Elite Member</h3>
          <p>Access to standard features and high-quality matches.</p>
          <ul>
            <li>✔ Standard Features</li>
            <li>✔ High-Quality Matches</li>
            <li>✔ Secure Network Access</li>
          </ul>
          <button>Get Started</button>
        </div>

        <div className={`${styles.card} ${styles.cardHighlighted}`}>
          <h2>$149/year</h2>
          <h3>Signature Member</h3>
          <p>
            Additional benefits like priority matching and VIP event access.
          </p>
          <ul>
            <li>✔ Standard Features</li>
            <li>✔ Priority Matching</li>
            <li>✔ VIP Event Access</li>
          </ul>
          <button>Get Started</button>
        </div>

        <div className={styles.card}>
          <h2>$249/year</h2>
          <h3>Legacy Member</h3>
          <p>
            All-inclusive benefits with personalized concierge services and
            international event invitations.
          </p>
          <ul>
            <li>✔ All Benefits Included</li>
            <li>✔ Personalized Concierge</li>
            <li>✔ International Event Invitations</li>
          </ul>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Membership;
