import React, { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Story from "./components/Story";
import Impact from "./components/Impact";
import Vision from "./components/Vision";
import ContactUs from "./components/ContactUs";
import WhyChooseUs from "./components/WhyChooseUs";
import Products from "./components/Products";
import JoinUs from "./components/JoinUs";

import Footer from "./components/Footer";

import "./styles/globals.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = () => {
      setTimeout(() => setLoading(false), 2000); // Use constants for timeouts in production
    };

    loadData();
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <main>
          <Navbar />
            <Hero />
            <AboutUs />
            <Story />
            <Impact />
            <Vision />
            <WhyChooseUs />
            <Products />
            <JoinUs />  
            <ContactUs />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
