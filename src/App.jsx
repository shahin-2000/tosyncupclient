import React, { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

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
          <Navbar />
          <main>
            <Hero />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
