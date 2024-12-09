// import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SignupForm from "./components/SignupForm";
import Footer from "./components/Footer";

import "./styles/globals.css";

const App = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const loadData = () => {
  //     setTimeout(() => setLoading(false), 2000); // Use constants for timeouts in production
  //   };

  //   loadData();
  // }, []);

  // if (loading) {
  //   return <Preloader />;
  // }

  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
