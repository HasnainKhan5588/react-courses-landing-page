import React from 'react'
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Companies from "./components/Companies";
import Courses from "./components/Courses";
import Achievements from "./components/Achievements";

function App() {
  return (
    <div className="px-2 md:px-20">
      <Navbar />
      <HeroSection />
      <Companies />
      <Courses />
      <Achievements />
    </div>
  );
}

export default App
