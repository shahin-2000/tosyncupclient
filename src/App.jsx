import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
// import Community from "./components/Community";
import Events from "./components/Events";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

import "./styles/globals.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process
    const loadData = () => {
      setTimeout(() => {
        setLoading(false); // Set loading to false after 5 seconds
      }, 2000);
    };

    loadData();
  }, []);
  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <Features />
            {/* <Community /> */}
            <Events />
            <Testimonials />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
