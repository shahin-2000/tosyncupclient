import React from "react";
import styles from "../styles/components/Impact.module.css";
import { FaStar, FaLightbulb, FaSeedling, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";

const Impact = () => {
  const contentBlocks = [
    {
      icon: <FaStar />,
      title: "Empowering Lives",
      description: "By developing solutions that solve real-life challenges.",
    },
    {
      icon: <FaLightbulb />,
      title: "Driving Innovation",
      description: "Through research and technology integration.",
    },
    {
      icon: <FaSeedling />,
      title: "Sustainability",
      description: "Designing eco-friendly and socially responsible products.",
    },
    {
      icon: <FaHandshake />,
      title: "Community Engagement",
      description: "Partnering with organisations to give back to society.",
    },
  ];

  return (
    <div id="ourimpact" className={styles.container}>
      {/* Header with fade-in-up animation */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Impact</h1>
        <p>Creating a better tomorrow through innovation and collaboration.</p>
      </motion.div>

      <div className={styles.content}>
        <div className={styles.blocks}>
          {contentBlocks.map((block, index) => (
            <motion.div
              key={index}
              className={styles.block}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} // Left blocks from left, right blocks from right
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={styles.icon}>{block.icon}</div>
              <h3>{block.title}</h3>
              <p>{block.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Impact;
