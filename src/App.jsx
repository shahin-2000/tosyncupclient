import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/main/Hero";
import SignupForm from "./pages/auth/SignupForm";
import Footer from "./components/Footer";
import "./styles/globals.css";

const App = () => {
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
