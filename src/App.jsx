import React from 'react'
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Companies from "./components/Companies";
import Courses from "./components/Courses";
import Achievements from "./components/Achievements";
import Categories from "./components/Categories";
import FeadBack from "./components/FeadBack";
import Platforms from "./components/Platforms";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="px-2 md:px-20 app overflow-x-hidden ">
      <Navbar />
      <HeroSection />
      <Companies />
      <Courses />
      <Achievements />
      <Categories />
      <FeadBack />
      <Platforms />
      <Footer />
    </div>
  );
}

export default App
