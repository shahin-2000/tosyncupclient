import React, { useState, useEffect } from "react";
import styles from "../styles/components/JoinUs.module.css";

const JoinUs = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      title: "Careers",
      content: `Exciting opportunities for passionate individuals to join our team. We believe a workplace should be your second home where you feel absolutely comfortable and safe.`,
      image: "/assets/images/careers.jpg",
    },
    {
      title: "Partnerships",
      content: `Collaborate with us to co-create impactful products and solutions. Together, let's build something meaningful.`,
      image: "/assets/images/partnerships.jpg",
    },
    {
      title: "Investors",
      content: `Be part of a transformative journey with JOMS. It's about the value you bring to grow together.`,
      image: "/assets/images/investor.gif",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % sections.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [sections.length]);

  return (
    <section id="joinus" className={styles.joinUs}>
      <h1 className={styles.title}>Join Us</h1>
      <div className={styles.container}>
        {sections.map((section, index) => (
          <div
            key={index}
            className={`${styles.section} ${
              index === activeSection ? styles.active : ""
            }`}
          >
            <div className={styles.image}>
              <img src={section.image} alt={section.title} />
            </div>
            <div className={styles.text}>
              <h2>{section.title}</h2>
              <p>{section.content}</p>
            </div>
          </div>
        ))}
        <div className={styles.buttons}>
          {sections.map((section, index) => (
            <button
              key={index}
              className={`${styles.navButton} ${
                index === activeSection ? styles.activeNav : ""
              }`}
              onClick={() => setActiveSection(index)}
            >
              {section.title}
            </button>
          ))}
        </div>
        <div className={styles.pagination}>
          {sections.map((_, index) => (
            <button
              key={index}
              className={`${styles.paginationDot} ${
                index === activeSection ? styles.activeDot : ""
              }`}
              onClick={() => setActiveSection(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
