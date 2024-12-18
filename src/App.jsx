import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/main/Home";
import Banner from "./pages/auth/Banner";
import styles from './styles/App.css';

const App = () => {
  return (
    <div className={styles.appContainer}>
      <Router>
        <Navbar />
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Banner />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
